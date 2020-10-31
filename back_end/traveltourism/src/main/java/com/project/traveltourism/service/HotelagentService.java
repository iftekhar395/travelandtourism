/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Hotelagent;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface HotelagentService {
    List<Hotelagent> findAll();
    Hotelagent saveAgent(Hotelagent user);
    Hotelagent findById(Integer id);
    void updateAgent(Hotelagent user);     
    void deleteAgent(Integer id); 
//    List<Hotelagent> findAllAgentsName();
}
