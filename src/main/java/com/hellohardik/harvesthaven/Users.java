package com.hellohardik.harvesthaven;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer u_id;
    private String username;
    private Boolean gender;
    private String email;
    private String passcode;
    private Boolean isadmin;
}
