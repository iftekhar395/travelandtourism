/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Busbooking;
import com.project.traveltourism.service.BusbookingService;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ASUS
 */
@Transactional
@Repository
public class BusbookingRepository implements BusbookingService{

    @Autowired
    SessionFactory sessionFactory;
    @Override
    public List<Busbooking> findAllBus() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Busbooking> bookinglist = s.createQuery("from Busbooking").list();
        t.commit();
        s.close();
        System.out.println(bookinglist);
        return bookinglist;
    }

    @Override
    public Busbooking saveBusBooking(Busbooking bb) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(bb);
        t.commit();
        s.close();
        return bb;
    }

    @Override
    public Busbooking findById(Integer busbookid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Busbooking b = (Busbooking) s.get(Busbooking.class, busbookid);
        t.commit();
        s.close();
        return b;
    }

    @Override
    public void updateBusBooking(Busbooking bb) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(bb);
        t.commit();
        s.close();
    }

    @Override
    public void deleteBusBookngId(Integer busbookid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Busbooking b = (Busbooking) s.get(Busbooking.class, busbookid);
        s.delete(b);
        t.commit();
        s.close();
    }
    
}
