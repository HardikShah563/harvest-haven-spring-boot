package com.hellohardik.harvesthaven.dao;

import com.hellohardik.harvesthaven.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersDao extends JpaRepository<Orders, Integer> {
    
}
