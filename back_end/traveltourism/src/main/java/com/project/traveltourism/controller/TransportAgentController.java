/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Transportagent;
import com.project.traveltourism.service.TransportagentService;
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
public class TransportAgentController {
    @Autowired
    private TransportagentService agentService;
    
    @GetMapping("/transagent")
    public List<Transportagent> getAllPackage() {
        return agentService.findAllAgent();
    }
    
    @PostMapping("/transagent")
    public Transportagent createPackage(@RequestBody Transportagent cbg) {
        return agentService.savePackage(cbg);
    }

    @GetMapping("/transagent/{tagentid}")
    public ResponseEntity<Transportagent> getPackage(@PathVariable("tagentid") Integer gid) {
        System.out.println("Fetching User with id " + gid);
        Transportagent b = agentService.findById(gid);
        if (b == null) {
            System.out.println("Category with id " + gid + " not found");
            return new ResponseEntity<Transportagent>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Transportagent>(b, HttpStatus.OK);
    }

    @PutMapping("/transagent/{tagentid}")
    public ResponseEntity<Transportagent> updateAgent(@PathVariable("tagentid") Integer bookingid, @RequestBody Transportagent bb) {
        System.out.println("Updating Category " + bookingid);

        Transportagent b = agentService.findById(bookingid);

        if (b == null) {
            System.out.println("User with id " + bookingid + " not found");
            return new ResponseEntity<Transportagent>(HttpStatus.NOT_FOUND);
        }

        b.setTagentname(bb.getTagentname());
        b.setTagentmobile(bb.getTagentmobile());
        b.setTagentaddress(bb.getTagentaddress());
        b.setEmail(bb.getEmail());

        agentService.updateAgent(b);
        return new ResponseEntity<Transportagent>(b, HttpStatus.OK);
    }

    @DeleteMapping("/transagent/{tagentid}")
    public ResponseEntity<Transportagent> deleteAgent(@PathVariable("tagentid") Integer bookingid) {
        System.out.println("Fetching & Deleting Category with id " + bookingid);

        Transportagent b = agentService.findById(bookingid);
        if (b == null) {
            System.out.println("Unable to delete. Category with id " + bookingid + " not found");
            return new ResponseEntity<Transportagent>(HttpStatus.NOT_FOUND);
        }

        agentService.deleteAgent(bookingid);
        return new ResponseEntity<Transportagent>(HttpStatus.NO_CONTENT);
    }
}
