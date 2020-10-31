/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Userrole;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface UserroleService {
    Object getUser(String emailid, String password);
    List<Userrole> findAllUserrole();
    Userrole saveUser(Userrole emailid);
    Userrole findByEmailId(String emailid);
    void updateUserrole(Userrole userrole);     
    void deleteUserByEmailId(String emailid);
}
