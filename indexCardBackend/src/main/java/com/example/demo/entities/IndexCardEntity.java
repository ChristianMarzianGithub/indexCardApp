package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IndexCardEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String languageOne;
	private String languageTwo;
	
	public String getLanguageOne() {
		return languageOne;
	}
	public void setLanguageOne(String languageOne) {
		this.languageOne = languageOne;
	}
	public String getLanguageTwo() {
		return languageTwo;
	}
	public void setLanguageTwo(String languageTwo) {
		this.languageTwo = languageTwo;
	}
	@Override
	public String toString() {
		return "IndexCardEntity [id=" + id + ", languageOne=" + languageOne + ", languageTwo=" + languageTwo + "]";
	}
}
