/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Guide;
import com.project.traveltourism.service.GuideService;
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
public class GuideRepository implements GuideService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Guide> findAll() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Guide> userslist = s.createQuery("from Guide").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Guide saveGuide(Guide user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public Guide findById(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Guide user = (Guide) s.get(Guide.class, id);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateGuide(Guide user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void delete(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Guide user = (Guide) s.get(Guide.class, id);
        s.delete(user);
        t.commit();
        s.close();
    }
    
}
