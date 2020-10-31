/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Customerinfo;
import com.project.traveltourism.model.Userrole;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public interface JoinUserdetailsService {
    public List <Object[]> saveUser(Customerinfo ci, Userrole ur);
    public List <Object[]> updateUser();
    public List <Object[]> deleteUser();
    public List <Object> showAll();
}
