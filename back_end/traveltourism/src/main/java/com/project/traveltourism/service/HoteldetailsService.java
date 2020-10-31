/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Hoteldetails;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface HoteldetailsService {
    List<Hoteldetails> findAllDetails();
    List<Hoteldetails> findLimitedDetails();
    List<Hoteldetails> findAllResortDetails();
    List<Hoteldetails> findAllLimitedResortDetails();
    Hoteldetails saveHotelDetails(Hoteldetails user);
    Hoteldetails findById(Integer hdetid);
    void updateDetails(Hoteldetails user);     
    void deleteById(Integer hdetid);
//    List<Hotelagent> findAllAgentsName();
}
