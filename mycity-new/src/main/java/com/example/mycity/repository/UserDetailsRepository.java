package com.example.mycity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mycity.entity.User;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, Integer> {
    User findByEmailAndPassword(String email, String password);
}
