package com.hellohardik.harvesthaven.service;
import com.hellohardik.harvesthaven.Users;
import com.hellohardik.harvesthaven.dao.UsersDao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UsersDao usersDao;

    public List<Users> getAuthToken() {
        return usersDao.findAll();
    }

}
