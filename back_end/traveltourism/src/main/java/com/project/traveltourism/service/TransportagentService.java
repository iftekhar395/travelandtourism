/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Transportagent;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface TransportagentService {
    List<Transportagent> findAllAgent();
    Transportagent savePackage(Transportagent user);
    Transportagent findById(Integer tagentid);
    void updateAgent(Transportagent user);     
    void deleteAgent(Integer tagentid);
}
