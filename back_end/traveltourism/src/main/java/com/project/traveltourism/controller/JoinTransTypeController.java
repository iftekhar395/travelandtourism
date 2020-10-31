/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Transportdetails;
import com.project.traveltourism.service.JoinTransTypeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class JoinTransTypeController {
    @Autowired
    private JoinTransTypeService jtts;
    
    @GetMapping("/rentbus")
    public List<Transportdetails> getAllBuses(){
     return jtts.getAllBuses();
    }
    
    @GetMapping("/rentcar")
    public List<Transportdetails> getAllCars(){
     return jtts.getAllCars();
    }
}
