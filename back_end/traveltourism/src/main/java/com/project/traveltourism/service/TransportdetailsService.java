/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Transportdetails;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface TransportdetailsService {
//    List<Transportdetails> findAllCar();
    List<Transportdetails> findAllBus();
    List<Transportdetails> findAll();
    Transportdetails save(Transportdetails transport);
    Transportdetails findById(Integer tagentid);
    void update(Transportdetails user);     
    void delete(Integer tagentid);
    
}
