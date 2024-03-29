package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.IndexCardEntity;

@Repository
public interface IndexCardRepository extends JpaRepository<IndexCardEntity, Long>{
}