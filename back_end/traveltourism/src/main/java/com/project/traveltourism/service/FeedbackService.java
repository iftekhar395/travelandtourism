/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.service;

import com.project.traveltourism.model.Feedback;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author R-41
 */
@Service
public interface FeedbackService {
    List<Feedback> findAll();
    Feedback saveFeedback(Feedback fid);
    Feedback findById(Integer id);
    void updateFeedback(Feedback fid);     
    void deleteFeedback(Integer id);
}
