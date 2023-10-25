package com.hellohardik.harvesthaven.dao;

import com.hellohardik.harvesthaven.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDao extends JpaRepository<Products, Integer> {
    
}
