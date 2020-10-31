/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Customerinfo;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface CustomerinfoService {
    List<Customerinfo> findAllCustomer();
    Customerinfo saveCustomer(Customerinfo custid);
    Customerinfo findById(Integer id);
    void updateCustomer(Customerinfo custid);     
    void deleteCustomer(Integer id);
    Object getUser(String email);
    Object findCustomerById(int id);
}
