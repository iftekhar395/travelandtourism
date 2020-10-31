/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Customerinfo;
import com.project.traveltourism.model.Userrole;
import com.project.traveltourism.service.JoinUserdetailsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class JoinUserdetailsController {
    @Autowired
    private JoinUserdetailsService juds;
    
    @GetMapping("/alluser")
    public List<Object> getAllUsers(){
     return juds.showAll();
    }
    @PostMapping("/alluser")
    public List<Object[]> createUser(@RequestBody Customerinfo cbg,@RequestBody Userrole ur) {
        return juds.saveUser(cbg,ur);
    }
}
