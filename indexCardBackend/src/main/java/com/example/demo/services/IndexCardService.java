package com.example.demo.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repositories.IndexCardRepository;
import com.example.demo.entities.IndexCardEntity;

@Service
public class IndexCardService {

	@Autowired
	IndexCardRepository indexCardRepository;
	
	public List<IndexCardEntity> getAll(){
		return indexCardRepository.findAll();
	}
	
	public List<IndexCardEntity> getIndexCardsInCategory(Integer categoryId ){
		indexCardRepository.findAll().stream().map( entity -> entity.getId() == categoryId );
		
		Predicate<IndexCardEntity> predicateIndexCardEntity = i -> (i.getId() == categoryId);		
		return indexCardRepository.findAll().stream().filter(e -> predicateIndexCardEntity.test(e)).toList();
	}
}