/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Busdetails;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface BusdetailsService {
    List<Busdetails> findAllBus();
    List<Object> getAllBus(int transdetid);
    Busdetails saveBus(Busdetails bd);
    Busdetails findById(Integer busid);
    void updateBus(Busdetails bd);     
    void deleteBus(Integer busid);
}
