package com.hellohardik.harvesthaven.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellohardik.harvesthaven.Products;
import com.hellohardik.harvesthaven.service.ProductService;

@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductService productservice;
    
    @CrossOrigin
    @GetMapping("all")
    public List<Products> GetStoreItems() {
        return productservice.getProducts();
    }
}
