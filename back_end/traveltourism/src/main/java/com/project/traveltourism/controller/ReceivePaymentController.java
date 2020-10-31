/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Receivepayment;
import com.project.traveltourism.service.ReceivepaymentService;
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
public class ReceivePaymentController {
    @Autowired
    private ReceivepaymentService paymentService;
    
    @GetMapping("/payment")
    public List<Receivepayment> getAllPayment() {
        return paymentService.findAllDetails();
    }
    
//    @GetMapping("/payment")
//    public List<Receivepayment> getAllPaymentForId(Receivepayment rp) {
//        return paymentService.findAllDetailsForId(rp);
//    }
    
    @PostMapping("/payment")
    public Receivepayment createPayment(@RequestBody Receivepayment cbg) {
        return paymentService.saveHotelDetails(cbg);
    }

    @GetMapping("/payment/pmt/{payid}")
    public List<Receivepayment> getPmtById(@PathVariable("payid") Integer gid) {
//        System.out.println("Fetching User with id " + gid);
        List<Receivepayment> b = paymentService.findPaymentById(gid);
//        if (b == null) {
//            System.out.println("Category with id " + gid + " not found");
//            return new List<Receivepayment>(HttpStatus.NOT_FOUND);
//        }
        return b;
    }
    
    @GetMapping("/payment/{payid}")
    public ResponseEntity<Receivepayment> getPaymentById(@PathVariable("payid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Receivepayment b = paymentService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Receivepayment>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Receivepayment>(b, HttpStatus.OK);
    }

    @PutMapping("/payment/{payid}")
    public ResponseEntity<Receivepayment> updatePayment(@PathVariable("payid") Integer bookingid, @RequestBody Receivepayment bb) {
        System.out.println("Updating Category " + bookingid);

        Receivepayment b = paymentService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Receivepayment>(HttpStatus.NOT_FOUND);
        }

        b.setCustid(bb.getCustid());
        b.setBookingid(bb.getBookingid());
        b.setPaydate(bb.getPaydate());
        b.setAmount(bb.getAmount());
        b.setPaytype(bb.getPaytype());

        paymentService.updateDetails(b);
        return new ResponseEntity<Receivepayment>(b, HttpStatus.OK);
    }

    @DeleteMapping("/payment/{payid}")
    public ResponseEntity<Receivepayment> deletePayment(@PathVariable("payid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Receivepayment b = paymentService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Receivepayment>(HttpStatus.NOT_FOUND);
        }

        paymentService.deleteById(bookingid);
        return new ResponseEntity<Receivepayment>(HttpStatus.NO_CONTENT);
    }
}
