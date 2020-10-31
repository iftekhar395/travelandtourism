/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Custbookinghotel;
import com.project.traveltourism.service.CustbookinghotelService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author ASUS
 */
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class CustBookingHotelController {
    @Autowired
    private CustbookinghotelService bookinghotelService;
    
    @GetMapping("/hotelbooking")
    public List<Custbookinghotel> getAll() {
        return bookinghotelService.findAllbookingHotel();
    }
    
    @PostMapping("/hotelbooking")
    public Custbookinghotel createBooking(@RequestBody Custbookinghotel cbh) {
        return bookinghotelService.saveBookingHotel(cbh);
    }

    @GetMapping("/hotelbooking/{custhotelid}")
    public ResponseEntity<Custbookinghotel> getBusBooking(@PathVariable("custhotelid") Integer custhotelid) {
        System.out.println("Fetching User with id " + custhotelid);
        Custbookinghotel b = bookinghotelService.findBookingHotelById(custhotelid);
        if (b == null) {
            System.out.println("Category with id " + custhotelid + " not found");
            return new ResponseEntity<Custbookinghotel>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Custbookinghotel>(b, HttpStatus.OK);
    }

    @PutMapping("/hotelbooking/{custhotelid}")
    public ResponseEntity<Custbookinghotel> updateBooking(@PathVariable("custhotelid") Integer custhotelid, @RequestBody Custbookinghotel cbh) {
        System.out.println("Updating Category " + custhotelid);

        Custbookinghotel cb = bookinghotelService.findBookingHotelById(custhotelid);

        if (cb == null) {
            System.out.println("User with id " + custhotelid + " not found");
            return new ResponseEntity<Custbookinghotel>(HttpStatus.NOT_FOUND);
        }

          cb.setBookingid(cbh.getBookingid());
//        cb.setHdetid(cbh.getHdetid());
//        cb.setTotalroom(cbh.getTotalroom());
          cb.setPaystatus(cbh.getPaystatus());
//        cb.setBusid(cbh.getBusid());
//        cb.setSubtotal(cbh.getSubtotal());

        bookinghotelService.updateBookingHotel(cb);
        return new ResponseEntity<Custbookinghotel>(cb, HttpStatus.OK);
    }

    @DeleteMapping("/hotelbooking/{custhotelid}")
    public ResponseEntity<Custbookinghotel> deleteBooking(@PathVariable("custhotelid") Integer custhotelid) {
        System.out.println("Fetching & Deleting Category with id " + custhotelid);

        Custbookinghotel b = bookinghotelService.findBookingHotelById(custhotelid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + custhotelid + " not found");
            return new ResponseEntity<Custbookinghotel>(HttpStatus.NOT_FOUND);
        }

        bookinghotelService.deleteById(custhotelid);
        return new ResponseEntity<Custbookinghotel>(HttpStatus.NO_CONTENT);
    }
}
