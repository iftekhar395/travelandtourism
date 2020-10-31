/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Transportagent;
import com.project.traveltourism.model.Transportdetails;
import com.project.traveltourism.service.TransportdetailsService;
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
public class TransportDetailsController {
    @Autowired
    private TransportdetailsService transService;
    
    @GetMapping("/transport")
    public List<Transportdetails> getAllBus() {
        return transService.findAll();
    }
    @GetMapping("/transport/limitedtransport")
    public List<Transportdetails> getLimitedBus() {
        return transService.findAllBus();
    }
//    @GetMapping("/transport")
//    public List<Transportdetails> getAllBus() {
//        return transService.findAllBus();
//    }
//    
//    @GetMapping("/transport")
//    public List<Transportdetails> getAllCar() {
//        return transService.findAllCar();
//    }
    
    @PostMapping("/transport")
    public Transportdetails createTransport(@RequestBody Transportdetails cbg) {
        return transService.save(cbg);
    }

    @GetMapping("/transport/{transdetid}")
    public ResponseEntity<Transportdetails> getTransport(@PathVariable("transdetid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Transportdetails b = transService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Transportdetails>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Transportdetails>(b, HttpStatus.OK);
    }

    @PutMapping("/transport/{transdetid}")
    public ResponseEntity<Transportdetails> updateTransport(@PathVariable("transdetid") Integer bookingid, @RequestBody Transportdetails bb) {
        System.out.println("Updating Category " + bookingid);

        Transportdetails b = transService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Transportdetails>(HttpStatus.NOT_FOUND);
        }

        b.setTagentid(bb.getTagentid());
        b.setTpackid(bb.getTpackid());
        b.setTranstype(bb.getTranstype());
        b.setTransdetails(bb.getTransdetails());
        b.setImage(bb.getImage());

        transService.update(b);
        return new ResponseEntity<Transportdetails>(b, HttpStatus.OK);
    }

    @DeleteMapping("/transport/{transdetid}")
    public ResponseEntity<Transportagent> deleteTransport(@PathVariable("transdetid") Integer transdetid) {
        System.out.println("Fetching & Deleting Category with id " + transdetid);

        Transportdetails b = transService.findById(transdetid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + transdetid + " not found");
            return new ResponseEntity<Transportagent>(HttpStatus.NOT_FOUND);
        }

        transService.delete(transdetid);
        return new ResponseEntity<Transportagent>(HttpStatus.NO_CONTENT);
    }
}
