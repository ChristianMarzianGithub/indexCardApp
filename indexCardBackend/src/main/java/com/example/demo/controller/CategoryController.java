package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CategoryEntity;

@RestController
@RequestMapping("/category")
public class CategoryController {

	@GetMapping("/getAllCategories")
	public List<CategoryEntity> getAllCategories(){
		CategoryEntity name1 = new CategoryEntity();
		name1.setId(1);
		name1.setDescription("test1");
		
		CategoryEntity name2 = new CategoryEntity();
		name2.setId(2);
		name2.setDescription("test2");
		
		CategoryEntity name3 = new CategoryEntity();
		name3.setId(3);
		name3.setDescription("test3");
		
		List<CategoryEntity> listCategories = new ArrayList<CategoryEntity>();
		listCategories.add(name1);
		listCategories.add(name2);
		listCategories.add(name3);
		
		return listCategories;
	}
}