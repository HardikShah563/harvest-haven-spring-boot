package com.hellohardik.harvesthaven;

import lombok.Data;

@Data
public class Product {
    private Integer prodId;
    private String prodName;
    private Integer prodPrice;
    private String prodQty;
    private Integer prodStock;
    private Integer prodStockAv;
    private Integer prodType;
    private String prodURL;
    private Integer quantity;
}
