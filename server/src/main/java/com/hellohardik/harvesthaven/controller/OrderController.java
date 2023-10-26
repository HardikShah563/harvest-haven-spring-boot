package com.hellohardik.harvesthaven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    public String placeOrder(@RequestBody Orders order) {
        if(orderservice.placeOrders(order)) {
            return "Order Placed";
        }
        return "Could Not Place Order";
    }
}
