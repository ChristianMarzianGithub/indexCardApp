package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class IndexCardEntity {

	public Integer getId() {
		return id;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String question;
	
	private String answer;
	
	@OneToOne(mappedBy = "id")
	private CategoryEntity category;

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}
	

	public void setId(Integer id) {
		this.id = id;
	}

	public CategoryEntity getCategory() {
		return category;
	}

	public void setCategory(CategoryEntity category) {
		this.category = category;
	}
	
	@Override
	public String toString() {
		return "IndexCardEntity [id=" + id + ", question=" + question + ", answer=" + answer + ", category=" + category
				+ "]";
	}
	
}