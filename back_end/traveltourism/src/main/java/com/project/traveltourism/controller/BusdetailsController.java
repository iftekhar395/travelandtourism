/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;
import com.project.traveltourism.model.Busdetails;
import com.project.traveltourism.service.BusdetailsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
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
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class BusdetailsController {
    @Autowired
    private BusdetailsService busdetailsService;
    
    @GetMapping("/busdetails")
    public List<Busdetails> getAll() {
        return busdetailsService.findAllBus();
    }
    
    @PostMapping("/busdetails")
    public Busdetails createBus(@RequestBody Busdetails bd) {
        return busdetailsService.saveBus(bd);
    }

    @GetMapping("/busdetail/{transdetid}")
    public ResponseEntity<Object> getBuses(@PathVariable("transdetid") Integer transdetid) {
        List<Object> bd = busdetailsService.getAllBus(transdetid);
        if (bd == null) {
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>( bd, HttpStatus.OK);
    }
    
    @GetMapping("/busdetails/{busid}")
    public ResponseEntity<Busdetails> getBus(@PathVariable("busid") Integer busid) {
        System.out.println("Fetching User with id " + busid);
        Busdetails bd = busdetailsService.findById(busid);
        if (bd == null) {
            System.out.println("Category with id " + busid + " not found");
            return new ResponseEntity<Busdetails>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Busdetails>(bd, HttpStatus.OK);
    }

    @PutMapping("/busdetails/{busid}")
    public ResponseEntity<Busdetails> updateBus(@PathVariable("busid") Integer busid, @RequestBody Busdetails bd) {
        System.out.println("Updating Category " + busid);
        Busdetails bdetails = busdetailsService.findById(busid);
        if (bdetails == null) {
            System.out.println("User with id " + busid + " not found");
            return new ResponseEntity<Busdetails>(HttpStatus.NOT_FOUND);
        }

        bdetails.setBusname(bd.getBusname());
        bdetails.setStart(bd.getStart());
        bdetails.setEnd(bd.getEnd());
        bdetails.setFare(bd.getFare());
        bdetails.setStatus(bd.getStatus());
        bdetails.setTransdetid(bd.getTransdetid());
        busdetailsService.updateBus(bdetails);
        return new ResponseEntity<Busdetails>(bdetails, HttpStatus.OK);
    }

    @DeleteMapping("/busdetails/{busid}")
    public ResponseEntity<Busdetails> deleteBus(@PathVariable("busid") Integer busid) {
        System.out.println("Fetching & Deleting Category with id " + busid);

        Busdetails b = busdetailsService.findById(busid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + busid + " not found");
            return new ResponseEntity<Busdetails>(HttpStatus.NOT_FOUND);
        }

        busdetailsService.deleteBus(busid);
        return new ResponseEntity<Busdetails>(HttpStatus.NO_CONTENT);
    }

}
