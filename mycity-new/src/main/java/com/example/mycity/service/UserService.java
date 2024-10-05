package com.example.mycity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mycity.entity.User;
import com.example.mycity.repository.UserRepository;

@Service
public class UserService {

     @Autowired
    private UserRepository userRepository;

    public User authenticate(String email, String password) {
        User user = userRepository.findByEmail(email);

        // Check if user exists and password matches (plain text comparison)
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public void registerUser(String name, String email, String password, String mobile, String address) {
        User user = new User();
        user.setName(name);
        user.setEmail(email.toLowerCase());
        user.setPassword(password);
        user.setMobile(mobile);
        user.setAddress(address);


        userRepository.save(user);
    }

      // Check if an email exists in the repository
      public boolean emailExists(String email) {
        User user = userRepository.findByEmail(email);
        return user != null;
    }
    
}
