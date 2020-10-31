/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Tourpackage;
import com.project.traveltourism.service.TourpackageService;
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
public class TourpackageRepository implements TourpackageService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Tourpackage> findAllPackage() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Tourpackage> userslist = s.createQuery("from Tourpackage").list();
        t.commit();
        s.close();
        return userslist;
    }
    @Override
    public List<Tourpackage> findLimitedPackage() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Tourpackage> userslists = s.createQuery("from Tourpackage").list();
        t.commit();
        s.close();
        return userslists.subList(0, 8);
    }

    @Override
    public Tourpackage savePackage(Tourpackage user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public Tourpackage findById(Integer tpackid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Tourpackage user = (Tourpackage) s.get(Tourpackage.class, tpackid);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updatePackage(Tourpackage user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void deletePackage(Integer tpackid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Tourpackage user = (Tourpackage) s.get(Tourpackage.class, tpackid);
        s.delete(user);
        t.commit();
        s.close();
    }
}
