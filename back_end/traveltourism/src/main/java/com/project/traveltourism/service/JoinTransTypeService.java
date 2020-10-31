/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Busdetails;
import com.project.traveltourism.model.Transportdetails;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface JoinTransTypeService {
    
    public List<Transportdetails> getAllBuses();
    public List<Transportdetails> getAllCars();
}
