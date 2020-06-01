package com.example.bodega.repository;

import com.example.bodega.model.Candy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface CandyRepository extends JpaRepository<Candy, Long> {

}