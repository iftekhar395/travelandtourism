/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Tourpackage;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface TourpackageService {
    List<Tourpackage> findAllPackage();
    List<Tourpackage> findLimitedPackage();
    Tourpackage savePackage(Tourpackage user);
    Tourpackage findById(Integer tpackid);
    void updatePackage(Tourpackage user);     
    void deletePackage(Integer tpackid);
}
