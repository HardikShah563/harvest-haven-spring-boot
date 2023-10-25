package com.hellohardik.harvesthaven;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer p_id;
    private String p_name;
    private String p_qty;
    private Integer p_price;
    private Integer p_stock_qty;
    private String p_img;
    private Integer c_id;
    private Integer stock_available;
}
