package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.IndexCardEntity;
import com.example.demo.services.IndexCardService;

@RestController
@RequestMapping(path="/indexcard") 
public class IndexCardController {

	@Autowired
	IndexCardService indexCardService;
	
	@GetMapping("/getAllIndexCard")
	public List<IndexCardEntity> getAllIndexCard(){
		return indexCardService.getAll();
	}
}