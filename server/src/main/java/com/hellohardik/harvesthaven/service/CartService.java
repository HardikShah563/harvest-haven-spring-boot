package com.hellohardik.harvesthaven.service;
import com.hellohardik.harvesthaven.Product;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Service;


@Service
public class CartService {
    private List<Product> items;

    public CartService() {
        items = new ArrayList<>();
    }

    public boolean addProduct(Product product) {
        boolean productExists = false;

        for(Product item : items) {
            if(item.getProdId() == product.getProdId()) {
                item.setQuantity(item.getQuantity() + 1);
                productExists = true;
                return(true);
            }
        }
        if(!productExists) {
            product.setQuantity(1);
            items.add(product);
            return(true);
        }
        return false;
    }

    public boolean removeProduct(Product product) {
        for(Product item : items) {
            if (item.getProdId() == product.getProdId()) {
                if(item.getQuantity() - 1 <= 0) {
                    items.remove(item);
                    return(true);
                }
                else {
                    item.setQuantity(item.getQuantity() - 1);
                    return(true);
                }
            }
        }
        return false;
    }

    public void displayCart() {
        for(Product item : items) {
            System.out.println(item);
        }
    }

    public List<Product> getCart() {
        return items;
    }
}
