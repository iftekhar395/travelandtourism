/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Hoteldetails;
import com.project.traveltourism.service.HoteldetailsService;
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
 * @author R-41
 */
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class HotelDetailsController {
    @Autowired
    private HoteldetailsService hotelService;
    
    
    @GetMapping("/hoteldetails")
    public List<Hoteldetails> getAllAgent() {
        return hotelService.findAllDetails();
    }
    
    @GetMapping("/hoteldetail")
    public List<Hoteldetails> getAll() {
        return hotelService.findAllResortDetails();
    }
    @GetMapping("/hoteldetails/ltdhotels")
    public List<Hoteldetails> getLtdHotels() {
        return hotelService.findLimitedDetails();
    }
    
    @GetMapping("/hoteldetail/ltdresorts")
    public List<Hoteldetails> getAllLtdResort() {
        return hotelService.findAllLimitedResortDetails();
    }
    
    @PostMapping("/hoteldetails")
    public Hoteldetails createAgent(@RequestBody Hoteldetails cbg) {
        
        return hotelService.saveHotelDetails(cbg);
    }

    @GetMapping("/hoteldetails/{hdetid}")
    public ResponseEntity<Hoteldetails> getAgent(@PathVariable("hdetid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Hoteldetails b = hotelService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Hoteldetails>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Hoteldetails>(b, HttpStatus.OK);
    }

    @PutMapping("/hoteldetails/{hdetid}")
    public ResponseEntity<Hoteldetails> updateAgent(@PathVariable("hdetid") Integer bookingid, @RequestBody Hoteldetails bb) {
        System.out.println("Updating Category " + bookingid);

        Hoteldetails b = hotelService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Hoteldetails>(HttpStatus.NOT_FOUND);
        }

        b.setHagentid(bb.getHagentid());
        b.setRoomtype(bb.getRoomtype());
        b.setRent(bb.getRent());
        b.setFacilities(bb.getFacilities());
        b.setType(bb.getType());
        b.setImgurl(bb.getImgurl());
        hotelService.updateDetails(b);
        return new ResponseEntity<Hoteldetails>(b, HttpStatus.OK);
    }

    @DeleteMapping("/hoteldetails/{hdetid}")
    public ResponseEntity<Hoteldetails> deleteAgent(@PathVariable("hdetid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Hoteldetails b = hotelService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Hoteldetails>(HttpStatus.NOT_FOUND);
        }

        hotelService.deleteById(bookingid);
        return new ResponseEntity<Hoteldetails>(HttpStatus.NO_CONTENT);
    }
}
