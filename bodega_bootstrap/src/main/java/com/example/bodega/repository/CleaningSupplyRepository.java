package com.example.bodega.repository;

import com.example.bodega.model.CleaningSupply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface CleaningSupplyRepository extends JpaRepository<CleaningSupply, Long> {

}