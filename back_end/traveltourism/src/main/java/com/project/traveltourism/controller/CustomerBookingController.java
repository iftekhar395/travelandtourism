/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Customerbooking;
import com.project.traveltourism.service.CustomerbookingService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
public class CustomerBookingController {
    @Autowired
    private CustomerbookingService bookingguideService;
    
    @GetMapping("/customerbooking")
    public List<Customerbooking> getAll() {
        return bookingguideService.findAllBooking();
    }
    
    @GetMapping("/customerbooking/showall")
    public List<Customerbooking> getAllBooking() {
        return bookingguideService.showAllBooking();
    }
    
    @PostMapping("/customerbooking")
    public Customerbooking createBooking(@RequestBody Customerbooking cbg) {
        return bookingguideService.saveBooking(cbg);
    }

    @GetMapping("/customerbooking/{bookingid}")
    public ResponseEntity<Customerbooking> getBusBooking(@PathVariable("bookingid") Integer bookingid) {
        System.out.println("Fetching User with id " + bookingid);
        Customerbooking b = bookingguideService.findBookingById(bookingid);
        if (b == null) {
            System.out.println("Category with id " + bookingid + " not found");
            return new ResponseEntity<Customerbooking>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Customerbooking>(b, HttpStatus.OK);
    }

    @PutMapping("/guidebooking/{bookingid}")
    public ResponseEntity<Customerbooking> updateBooking(@PathVariable("bookingid") Integer bookingid, @RequestBody Customerbooking bb) {
        System.out.println("Updating Category " + bookingid);

        Customerbooking b = bookingguideService.findBookingById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Customerbooking>(HttpStatus.NOT_FOUND);
        }

        b.setCustid(bb.getCustid());
        b.setTpackid(bb.getTpackid());
        b.setTourstart(bb.getTourstart());
        b.setTourend(bb.getTourend());
        b.setTotalperson(bb.getTotalperson());
        b.setBookingdate(bb.getBookingdate());

        bookingguideService.updateBooking(b);
        return new ResponseEntity<Customerbooking>(b, HttpStatus.OK);
    }

    @DeleteMapping("/customerbooking/{bookingid}")
    public ResponseEntity<Customerbooking> deleteBooking(@PathVariable("bookingid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Customerbooking b = bookingguideService.findBookingById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Customerbooking>(HttpStatus.NOT_FOUND);
        }

        bookingguideService.deleteBooking(bookingid);
        return new ResponseEntity<Customerbooking>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/allhotelbooking/{custid}/{bdate}")
    public ResponseEntity<Object> getAllHotelBooking(@PathVariable("custid") Integer custid, @PathVariable("bdate") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date bdate) {
        
        List<Object> b = bookingguideService.getAllHotelBooking(custid, bdate);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/individualhotelbooking/{custid}")
    public ResponseEntity<Object> getIndividualBooking(@PathVariable("custid") Integer custid) {
        
        List<Object> b = bookingguideService.showIndividualBooking(custid);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/individualbooking/{bookingid}")
    public ResponseEntity<Object> getIndividualBooking(@PathVariable("bookingid") int bookingid) {
        
        List<Object> b = bookingguideService.getIndividualBooking(bookingid);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/singlehotel/{hdetid}/{custid}")
    public ResponseEntity<Object> getSingleHotelBooking(@PathVariable("hdetid") Integer hdetid, @PathVariable("custid") Integer custid) {
        
        List<Object> b = bookingguideService.getHotelBookingById(hdetid,custid);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/singlepack/{tpackid}/{custid}")
    public ResponseEntity<Object> getSinglePackBooking(@PathVariable("tpackid") Integer tpackid, @PathVariable("custid") Integer custid) {
        
        List<Object> b = bookingguideService.getPackBookingById(tpackid,custid);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/singletransport/{busid}/{custid}")
    public ResponseEntity<Object> getSingleTransportBooking(@PathVariable("busid") Integer busid, @PathVariable("custid") Integer custid) {
        
        List<Object> b = bookingguideService.getBusBookingById(busid,custid);
        if (b == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
}
