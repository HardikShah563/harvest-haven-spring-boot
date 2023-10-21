package com.hellohardik.harvesthaven.dao;

import com.hellohardik.harvesthaven.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDao extends JpaRepository<Users, Integer> {
    
}
