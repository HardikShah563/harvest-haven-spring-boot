package com.hellohardik.harvesthaven.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellohardik.harvesthaven.Users;
import com.hellohardik.harvesthaven.service.AuthService;

@RestController
@RequestMapping("users")
public class AuthController {

    @Autowired
    AuthService AuthService;

    @GetMapping("signin")
    public List<Users> SignIn() {
        return AuthService.getAuthToken();
    }
    
}
