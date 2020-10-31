/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Hotelagent;
import com.project.traveltourism.service.HotelagentService;
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
public class HotelAgentController {
        @Autowired
    private HotelagentService hotelagentService;
    
    @GetMapping("/hotelagent")
    public List<Hotelagent> getAllAgent() {
        return hotelagentService.findAll();
    }
    
    @PostMapping("/hotelagent")
    public Hotelagent createAgent(@RequestBody Hotelagent cbg) {
        return hotelagentService.saveAgent(cbg);
    }

    @GetMapping("/hotelagent/{hagentid}")
    public ResponseEntity<Hotelagent> getAgent(@PathVariable("hagentid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Hotelagent b = hotelagentService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Hotelagent>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Hotelagent>(b, HttpStatus.OK);
    }

    @PutMapping("/hotelagent/{hagentid}")
    public ResponseEntity<Hotelagent> updateAgent(@PathVariable("hagentid") Integer bookingid, @RequestBody Hotelagent bb) {
        System.out.println("Updating Category " + bookingid);

        Hotelagent b = hotelagentService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Hotelagent>(HttpStatus.NOT_FOUND);
        }

        b.setHagentname(bb.getHagentname());
        b.setHagentmobile(bb.getHagentmobile());
        b.setHagentaddress(bb.getHagentaddress());
        b.setEmailid(bb.getEmailid());

        hotelagentService.updateAgent(b);
        return new ResponseEntity<Hotelagent>(b, HttpStatus.OK);
    }

    @DeleteMapping("/hotelagent/{hagentid}")
    public ResponseEntity<Hotelagent> deleteAgent(@PathVariable("hagentid") Integer hagentid) {
        System.out.println("Fetching & Deleting Category with id " + hagentid);

        Hotelagent b = hotelagentService.findById(hagentid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + hagentid + " not found");
            return new ResponseEntity<Hotelagent>(HttpStatus.NOT_FOUND);
        }

        hotelagentService.deleteAgent(hagentid);
        return new ResponseEntity<Hotelagent>(HttpStatus.NO_CONTENT);
    }
}
