package com.example.bodega.repository;

import com.example.bodega.model.Snack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface SnackRepository extends JpaRepository<Snack, Long> {

}