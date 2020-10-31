/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Busbooking;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface BusbookingService {
    List<Busbooking> findAllBus();
    Busbooking saveBusBooking(Busbooking bb);
    Busbooking findById(Integer busbookid);
    void updateBusBooking(Busbooking bb);     
    void deleteBusBookngId(Integer busbookid);
}
