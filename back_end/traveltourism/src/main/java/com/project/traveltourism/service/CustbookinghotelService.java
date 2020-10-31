/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;
import com.project.traveltourism.model.Custbookinghotel;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface CustbookinghotelService {
    List<Custbookinghotel> findAllbookingHotel();
    Custbookinghotel saveBookingHotel(Custbookinghotel cbh);
    void updateBookingHotel(Custbookinghotel cbh);
    Custbookinghotel findBookingHotelById(Integer custhotelid );
    void deleteById(Integer custhotelid);
}
