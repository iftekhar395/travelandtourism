/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Feedback;
import com.project.traveltourism.service.FeedbackService;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author R-41
 */
@Repository
public class FeedbackRepository implements FeedbackService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Feedback> findAll() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Feedback> userslist = s.createQuery("from Feedback").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Feedback saveFeedback(Feedback fid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(fid);
        t.commit();
        s.close();
        return fid;
    }

    @Override
    public Feedback findById(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Feedback user = (Feedback) s.get(Feedback.class, id);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateFeedback(Feedback fid) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(fid);
        t.commit();
        s.close();
    }

    @Override
    public void deleteFeedback(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Feedback user = (Feedback) s.get(Feedback.class, id);
        s.delete(user);
        t.commit();
        s.close();
    }
}
