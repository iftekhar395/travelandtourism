/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Guide;
import com.project.traveltourism.service.GuideService;
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
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/v1")
public class GuideController {
    @Autowired
    private GuideService guideService;
    
    @GetMapping("/guide")
    public List<Guide> getAll() {
        return guideService.findAll();
    }
    
    @PostMapping("/guide")
    public Guide createGuide(@RequestBody Guide cbg) {
        return guideService.saveGuide(cbg);
    }

    @GetMapping("/guide/{gid}")
    public ResponseEntity<Guide> getGuide(@PathVariable("gid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Guide b = guideService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Guide>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Guide>(b, HttpStatus.OK);
    }

    @PutMapping("/guide/{gid}")
    public ResponseEntity<Guide> updateGuide(@PathVariable("gid") Integer bookingid, @RequestBody Guide bb) {
        System.out.println("Updating Category " + bookingid);

        Guide b = guideService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Guide>(HttpStatus.NOT_FOUND);
        }

        b.setName(bb.getName());
        b.setMobile(bb.getMobile());
        b.setAddress(bb.getAddress());
        b.setEmail(bb.getEmail());

        guideService.updateGuide(b);
        return new ResponseEntity<Guide>(b, HttpStatus.OK);
    }

    @DeleteMapping("/guide/{gid}")
    public ResponseEntity<Guide> deleteGuide(@PathVariable("gid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Guide b = guideService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Guide>(HttpStatus.NOT_FOUND);
        }

        guideService.delete(bookingid);
        return new ResponseEntity<Guide>(HttpStatus.NO_CONTENT);
    }
}
