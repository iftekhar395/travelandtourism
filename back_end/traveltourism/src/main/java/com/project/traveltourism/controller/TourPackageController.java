/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Tourpackage;
import com.project.traveltourism.service.TourpackageService;
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
@RequestMapping("/api/v1")
public class TourPackageController {
    @Autowired
    private TourpackageService packageService;
    
    @GetMapping("/package")
    public List<Tourpackage> getAllPackage() {
        return packageService.findAllPackage();
    }
    @GetMapping("/package/limited")
    public List<Tourpackage> getLtdPackage() {
        return packageService.findLimitedPackage();
    }
    
    @PostMapping("/package")
    public Tourpackage createPackage(@RequestBody Tourpackage cbg) {
        return packageService.savePackage(cbg);
    }

    @GetMapping("/package/{tpackid}")
    public ResponseEntity<Tourpackage> getPackage(@PathVariable("tpackid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Tourpackage b = packageService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Tourpackage>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Tourpackage>(b, HttpStatus.OK);
    }

    @PutMapping("/package/{tpackid}")
    public ResponseEntity<Tourpackage> updateAgent(@PathVariable("tpackid") Integer bookingid, @RequestBody Tourpackage bb) {
        System.out.println("Updating Category " + bookingid);

        Tourpackage b = packageService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Tourpackage>(HttpStatus.NOT_FOUND);
        }

        b.setTpackfrom(bb.getTpackfrom());
        b.setTpackto(bb.getTpackto());
        b.setTpackfare(bb.getTpackfare());
        b.setPackagetype(bb.getPackagetype());
        b.setPackageday(bb.getPackageday());
        b.setPackdesc(bb.getPackdesc());
        b.setPackimg(bb.getPackimg());

        packageService.updatePackage(b);
        return new ResponseEntity<Tourpackage>(b, HttpStatus.OK);
    }

    @DeleteMapping("/package/{tpackid}")
    public ResponseEntity<Tourpackage> deleteAgent(@PathVariable("tpackid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Tourpackage b = packageService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Tourpackage>(HttpStatus.NOT_FOUND);
        }

        packageService.deletePackage(bookingid);
        return new ResponseEntity<Tourpackage>(HttpStatus.NO_CONTENT);
    }
}
