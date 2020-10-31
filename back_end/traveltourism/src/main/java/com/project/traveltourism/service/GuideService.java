/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Guide;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface GuideService {
    List<Guide> findAll();
    Guide saveGuide(Guide user);
    Guide findById(Integer id);
    void updateGuide(Guide user);     
    void delete(Integer id); 
}
