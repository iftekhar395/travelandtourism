/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Customerinfo;
import com.project.traveltourism.service.CustomerinfoService;
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
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class CustomerInfoController {
    @Autowired
    private CustomerinfoService customerInfoService;
    
    @GetMapping("/customerinfo")
    public List<Customerinfo> getAll() {
        return customerInfoService.findAllCustomer();
    }
    
    @PostMapping("/customerinfo")
    public Customerinfo createBooking(@RequestBody Customerinfo cbg) {
        return customerInfoService.saveCustomer(cbg);
    }

    @GetMapping("/customerinfo/{custid}")
    public ResponseEntity<Customerinfo> getBusBooking(@PathVariable("custid") Integer bookingid) {
        System.out.println("Fetching User with id " + bookingid);
        Customerinfo b = customerInfoService.findById(bookingid);
        if (b == null) {
            System.out.println("Category with id " + bookingid + " not found");
            return new ResponseEntity<Customerinfo>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Customerinfo>(b, HttpStatus.OK);
    }
    
    @GetMapping("/customer/{custid}")
    public ResponseEntity<Object> getCustomerById(@PathVariable("custid") Integer bookingid) {
        System.out.println("Fetching User with id " + bookingid);
        Object b = customerInfoService.findCustomerById(bookingid);
        if (b == null) {
            System.out.println("Category with id " + bookingid + " not found");
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(b, HttpStatus.OK);
    }
    
    @GetMapping("/userinfo/{email}/")
    public ResponseEntity<Object> getCustomer(@PathVariable("email") String email){
        Object o = customerInfoService.getUser(email);
        if(o==null){
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(o, HttpStatus.OK);
    }

    @PutMapping("/customerinfo/{custid}")
    public ResponseEntity<Customerinfo> updateBooking(@PathVariable("custid") Integer bookingid, @RequestBody Customerinfo bb) {
        System.out.println("Updating Category " + bookingid);

        Customerinfo b = customerInfoService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Customerinfo>(HttpStatus.NOT_FOUND);
        }

        b.setCustname(bb.getCustname());
        b.setCustphone(bb.getCustphone());
        b.setEmail(bb.getEmail());
        b.setCustaddress(bb.getCustaddress());
        b.setImage(bb.getImage());

        customerInfoService.updateCustomer(b);
        return new ResponseEntity<Customerinfo>(b, HttpStatus.OK);
    }

    @DeleteMapping("/customerinfo/{custid}")
    public ResponseEntity<Customerinfo> deleteCustomer(@PathVariable("custid") Integer custid) {
        System.out.println("Fetching & Deleting Category with id " + custid);

        Customerinfo b = customerInfoService.findById(custid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + custid + " not found");
            return new ResponseEntity<Customerinfo>(HttpStatus.NOT_FOUND);
        }

        customerInfoService.deleteCustomer(custid);
        return new ResponseEntity<Customerinfo>(HttpStatus.NO_CONTENT);
    }
}
