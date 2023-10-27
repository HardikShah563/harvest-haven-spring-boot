package com.hellohardik.harvesthaven.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellohardik.harvesthaven.Orders;
import com.hellohardik.harvesthaven.service.OrderService;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderService orderservice;
    
    @CrossOrigin
    @PostMapping("place")
    public Boolean placeOrder(@RequestBody Orders order) {
        if(orderservice.placeOrders(order)) {
            return true;
        }
        return false;
    }

    @CrossOrigin
    @GetMapping("all")
    public List<Orders> getOrders() {
        return orderservice.getAllOrders();
    }
}
