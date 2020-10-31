/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Receivepayment;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface ReceivepaymentService {
    List<Receivepayment> findAllDetails();
//    List<Receivepayment> findAllDetailsForId(Receivepayment rp);
    Receivepayment saveHotelDetails(Receivepayment user);
    Receivepayment findById(Integer payid);
    List<Receivepayment> findPaymentById(Integer payid);
    void updateDetails(Receivepayment user);     
    void deleteById(Integer payid);
}
