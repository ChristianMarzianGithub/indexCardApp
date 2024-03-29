package com.example.demo.services;

import java.util.List;

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
}