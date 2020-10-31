/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.User;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface UserService {
    
    List<User> findAllUsers();
    User saveUser(User user);
    User findByEmailId(String id);
    void updateUser(User user);     
    void deleteUserByEmailId(String id);
}
