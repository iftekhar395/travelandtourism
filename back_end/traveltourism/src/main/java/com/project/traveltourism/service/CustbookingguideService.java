/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Custbookingguide;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface CustbookingguideService {
    List<Custbookingguide> findAllbookingGuide();
    Custbookingguide saveBookingGuide(Custbookingguide custguideid);
    void updateBookingGuide(Custbookingguide custguideid);
    void deleteById(Integer custguideid);
    Custbookingguide findBookingguiudeById(Integer custguideid );
//    Custbookingguide findBookingguiudeByName(String name);
}
