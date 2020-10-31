/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.controller;

import com.project.traveltourism.model.Userrole;
import com.project.traveltourism.service.UserroleService;
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
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/v1")
public class UserroleController {
   @Autowired
    private UserroleService userService;

    @GetMapping("/userrole")
    public List<Userrole> getAllCategory() {
        return userService.findAllUserrole();
    }

    @PostMapping("/userrole")
    public Userrole createCategory(@RequestBody Userrole role) {
        return userService.saveUser(role);
    }

    @GetMapping("/userrole/{emailid}")
    public ResponseEntity<Userrole> getUser(@PathVariable("emailid") String emailid) {
        Userrole user = userService.findByEmailId(emailid);
        System.out.println("Here is your email "+user);
        if (user == null) {
            return new ResponseEntity<Userrole>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Userrole>(user, HttpStatus.OK);
    }

    @PutMapping("/userrole/{emailid}")
    public ResponseEntity<Userrole> updateUser(@PathVariable("emailid") String emailid, @RequestBody Userrole user) {

        Userrole users = userService.findByEmailId(emailid);

        if (users == null) {
            return new ResponseEntity<Userrole>(HttpStatus.NOT_FOUND);
        }
//        users.setEmailid(user.getEmailid());
        users.setPassword(user.getPassword());
        users.setStatus(user.getStatus());
        users.setRole(user.getRole());

        userService.updateUserrole(users);
        return new ResponseEntity<Userrole>(users, HttpStatus.OK);
    }

    @DeleteMapping("/userrole/{id}")
    public ResponseEntity<Userrole> deleteUser(@PathVariable("id") String id) {

        Userrole user = userService.findByEmailId(id);
        if (user == null) {
            return new ResponseEntity<Userrole>(HttpStatus.NOT_FOUND);
        }

        userService.deleteUserByEmailId(id);
        return new ResponseEntity<Userrole>(HttpStatus.NO_CONTENT);
    } 
    
     @GetMapping("/userrole/{email}/{password}")
    public ResponseEntity<Object> getMyUser(@PathVariable("email") String emailid, @PathVariable("password") String password) {
        
        Object user = userService.getUser(emailid, password);
        if (user == null) {
           
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Object>(user, HttpStatus.OK);
    }
}
