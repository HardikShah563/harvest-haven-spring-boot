package com.hellohardik.harvesthaven.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellohardik.harvesthaven.Products;
import com.hellohardik.harvesthaven.dao.ProductDao;

@Service
public class ProductService {
    
    @Autowired
    ProductDao productdao;

    public List<Products> getProducts() {
        return productdao.findAll();
    }
}
