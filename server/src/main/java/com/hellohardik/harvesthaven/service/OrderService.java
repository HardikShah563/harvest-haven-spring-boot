package com.hellohardik.harvesthaven.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellohardik.harvesthaven.Orders;
import com.hellohardik.harvesthaven.Users;
import com.hellohardik.harvesthaven.dao.OrdersDao;

@Service
public class OrderService {
    
    @Autowired
    OrdersDao ordersdao;

    public Boolean placeOrders(Orders order) {
        ordersdao.save(order);
        return true;
    }

    public List<Orders> getAllOrders() {
        return ordersdao.findAll();
    }
}
