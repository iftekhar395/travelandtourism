/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Custbookingguide;
import com.project.traveltourism.service.CustbookingguideService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class CustbookingguideController {
   @Autowired
    private CustbookingguideService bookingguideService;
    
    @GetMapping("/guidebooking")
    public List<Custbookingguide> getAll() {
        return bookingguideService.findAllbookingGuide();
    }
    
    @PostMapping("/guidebooking")
    public Custbookingguide createBooking(@RequestBody Custbookingguide cbg) {
        return bookingguideService.saveBookingGuide(cbg);
    }

    @GetMapping("/guidebooking/{custguideid}")
    public ResponseEntity<Custbookingguide> getBusBooking(@PathVariable("custguideid") Integer custguideid) {
        System.out.println("Fetching User with id " + custguideid);
        Custbookingguide b = bookingguideService.findBookingguiudeById(custguideid);
        if (b == null) {
            System.out.println("Category with id " + custguideid + " not found");
            return new ResponseEntity<Custbookingguide>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Custbookingguide>(b, HttpStatus.OK);
    }

    @PutMapping("/guidebooking/{custguideid}")
    public ResponseEntity<Custbookingguide> updateBooking(@PathVariable("custguideid") Integer custguideid, @RequestBody Custbookingguide bb) {
        System.out.println("Updating Category " + custguideid);

        Custbookingguide b = bookingguideService.findBookingguiudeById(custguideid);

        if (b == null) {
            System.out.println("User with id " + custguideid + " not found");
            return new ResponseEntity<Custbookingguide>(HttpStatus.NOT_FOUND);
        }

        b.setBookingid(bb.getBookingid());
        b.setGid(bb.getGid());
        b.setRate(bb.getRate());
        b.setBookingdate(bb.getBookingdate());

        bookingguideService.updateBookingGuide(b);
        return new ResponseEntity<Custbookingguide>(b, HttpStatus.OK);
    }

    @DeleteMapping("/guidebooking/{custguideid}")
    public ResponseEntity<Custbookingguide> deleteBooking(@PathVariable("custguideid") Integer custguideid) {
        System.out.println("Fetching & Deleting Category with id " + custguideid);

        Custbookingguide b = bookingguideService.findBookingguiudeById(custguideid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + custguideid + " not found");
            return new ResponseEntity<Custbookingguide>(HttpStatus.NOT_FOUND);
        }

        bookingguideService.deleteById(custguideid);
        return new ResponseEntity<Custbookingguide>(HttpStatus.NO_CONTENT);
    }
 
}
