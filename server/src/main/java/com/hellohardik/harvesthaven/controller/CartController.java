package com.hellohardik.harvesthaven.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellohardik.harvesthaven.Product;
import com.hellohardik.harvesthaven.service.CartService;

@RestController
@RequestMapping("cart")
public class CartController {

    @Autowired
    CartService cartservice;

    @CrossOrigin
    @GetMapping("all")
    public List<Product> GetCart() {
        return cartservice.getCart();
    }

    @CrossOrigin
    @PostMapping("add")
    public Boolean AddToCart(@RequestBody Product prod) {
        System.out.println(prod);
        return cartservice.addProduct(prod);
    }

    @CrossOrigin
    @PostMapping("remove")
    public Boolean RemoveFromCart(@RequestBody Product prod) {
        return cartservice.removeProduct(prod);
    }
}
