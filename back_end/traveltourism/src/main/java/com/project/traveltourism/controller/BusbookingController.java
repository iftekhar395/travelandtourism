package com.project.traveltourism.controller;

import com.project.traveltourism.model.Busbooking;
import com.project.traveltourism.service.BusbookingService;
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
public class BusbookingController {
    @Autowired
    private BusbookingService bookingService;
//    
//    @RequestMapping("/")
//    public String hello(){
//        return "Hello World!";
//    }
    
    @GetMapping("/busbooking")
    public List<Busbooking> getAll() {
        return bookingService.findAllBus();
    }
    
    @PostMapping("/busbooking")
    public Busbooking createBooking(@RequestBody Busbooking bb) {
        return bookingService.saveBusBooking(bb);
    }

    @GetMapping("/busbooking/{busbookid}")
    public ResponseEntity<Busbooking> getBusBooking(@PathVariable("busbookid") Integer busbookid) {
        System.out.println("Fetching User with id " + busbookid);
        Busbooking b = bookingService.findById(busbookid);
        if (b == null) {
            System.out.println("Category with id " + busbookid + " not found");
            return new ResponseEntity<Busbooking>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Busbooking>(b, HttpStatus.OK);
    }

    @PutMapping("/busbooking/{busbookid}")
    public ResponseEntity<Busbooking> updateBooking(@PathVariable("busbookid") Integer busbookid, @RequestBody Busbooking bb) {
        System.out.println("Updating Category " + busbookid);

        Busbooking b = bookingService.findById(busbookid);

        if (b == null) {
            System.out.println("User with id " + busbookid + " not found");
            return new ResponseEntity<Busbooking>(HttpStatus.NOT_FOUND);
        }

        b.setBusid(bb.getBusid());
        b.setCustid(bb.getCustid());
        b.setBookingdate(bb.getBookingdate());
        b.setSeatqty(bb.getSeatqty());

        bookingService.updateBusBooking(b);
        return new ResponseEntity<Busbooking>(b, HttpStatus.OK);
    }

    @DeleteMapping("/busbooking/{busbookid}")
    public ResponseEntity<Busbooking> deleteUser(@PathVariable("busbookid") Integer busbookid) {
        System.out.println("Fetching & Deleting Category with id " + busbookid);

        Busbooking b = bookingService.findById(busbookid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + busbookid + " not found");
            return new ResponseEntity<Busbooking>(HttpStatus.NOT_FOUND);
        }

        bookingService.deleteBusBookngId(busbookid);
        return new ResponseEntity<Busbooking>(HttpStatus.NO_CONTENT);
    }

}
