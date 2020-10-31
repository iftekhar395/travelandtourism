/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Busdetails;
import com.project.traveltourism.model.Customerbooking;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface CustomerbookingService {
    
    List<Customerbooking> findAllBooking();
    
    List<Customerbooking> showAllBooking();
    
    List<Object> showIndividualBooking(int custid);
    
    List<Object> getIndividualBooking(int booingid);
    
    Customerbooking saveBooking(Customerbooking cb);
    
    Customerbooking findBookingById(Integer bookingid);
    
    void updateBooking(Customerbooking cb); 
    
    void deleteBooking(Integer bookingid);
    
    List<Object> getAllHotelBooking(int custid,Date bdate);
    List<Object> getHotelBookingById(int hdetid, int custid);
    List<Object> getBusBookingById(int busid,int custid);
    List<Object> getPackBookingById(int tpackid, int custid);
    
}
