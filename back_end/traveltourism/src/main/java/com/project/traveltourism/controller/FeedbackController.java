/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Feedback;
import com.project.traveltourism.service.FeedbackService;
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
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;
    
    @GetMapping("/feedback")
    public List<Feedback> getAll() {
        return feedbackService.findAll();
    }
    
    @PostMapping("/feedback")
    public Feedback createBooking(@RequestBody Feedback cbg) {
        return feedbackService.saveFeedback(cbg);
    }

    @GetMapping("/feedback/{fid}")
    public ResponseEntity<Feedback> getBusBooking(@PathVariable("fid") Integer bookingid) {
        System.out.println("Fetching User with id " + bookingid);
        Feedback b = feedbackService.findById(bookingid);
        if (b == null) {
            System.out.println("Category with id " + bookingid + " not found");
            return new ResponseEntity<Feedback>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Feedback>(b, HttpStatus.OK);
    }

    @PutMapping("/feedback/{fid}")
    public ResponseEntity<Feedback> updateBooking(@PathVariable("fid") Integer bookingid, @RequestBody Feedback bb) {
        System.out.println("Updating Category " + bookingid);

        Feedback b = feedbackService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Feedback>(HttpStatus.NOT_FOUND);
        }

        b.setCustid(bb.getCustid());
        b.setFeedbackfor(bb.getFeedbackfor());
        b.setComment(bb.getComment());

        feedbackService.updateFeedback(b);
        return new ResponseEntity<Feedback>(b, HttpStatus.OK);
    }

    @DeleteMapping("/feedback/{fid}")
    public ResponseEntity<Feedback> deleteBooking(@PathVariable("fid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Feedback b = feedbackService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Feedback>(HttpStatus.NOT_FOUND);
        }

        feedbackService.deleteFeedback(bookingid);
        return new ResponseEntity<Feedback>(HttpStatus.NO_CONTENT);
    }
}
