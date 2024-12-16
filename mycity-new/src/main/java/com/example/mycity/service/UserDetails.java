package com.example.mycity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mycity.entity.User;
import com.example.mycity.repository.UserDetailsRepository;

@Service
public class UserDetails {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public User getUserDetails(String email, String password){
        return userDetailsRepository.findByEmailAndPassword(email, password);
    }
}
