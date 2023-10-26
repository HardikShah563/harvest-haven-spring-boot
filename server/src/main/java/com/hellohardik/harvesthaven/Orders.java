package com.hellohardik.harvesthaven;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer o_id;
    private Integer u_id;
    private String addr;
    private Double order_total;
    private String purchase;
    private Integer total_order_qty;
}
