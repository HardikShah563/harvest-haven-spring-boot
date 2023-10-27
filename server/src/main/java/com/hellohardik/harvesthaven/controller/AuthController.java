package com.hellohardik.harvesthaven.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellohardik.harvesthaven.Users;
import com.hellohardik.harvesthaven.service.AuthService;

@RestController
@RequestMapping("users")
public class AuthController {

    @Autowired
    AuthService auth;

    @CrossOrigin
    @GetMapping("signin")
    public List<Users> SignIn() {
        return auth.getAuthToken();
    }
    
    @CrossOrigin
    @PostMapping("signin")
    public ResponseEntity<String> GetUserInfo(@RequestBody Users user) {
        if(auth.checkUserExists(user)) {
            return new ResponseEntity<>("Login Successful!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Login Unsuccessful!", HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("all")
    public List<Users> getUsers() {
        return auth.getAllUsers();
    }
}
