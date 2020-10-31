/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Custbookingguide;
import com.project.traveltourism.service.CustbookingguideService;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS
 */
@Repository
public class CustbookingguideRepository implements CustbookingguideService{
    @Autowired
    SessionFactory sessionFactory;
    @Override
    public List<Custbookingguide> findAllbookingGuide() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Custbookingguide> bookinglist = s.createQuery("from Custbookingguide").list();
        t.commit();
        s.close();
        System.out.println(bookinglist);
        return bookinglist;
    }

    

    @Override
    public Custbookingguide saveBookingGuide(Custbookingguide custguideid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(custguideid);
        t.commit();
        s.close();
        return custguideid;
    }

    @Override
    public void updateBookingGuide(Custbookingguide custguideid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(custguideid);
        t.commit();
        s.close();
    }

    @Override
    public void deleteById(Integer custguideid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Custbookingguide b = (Custbookingguide) s.get(Custbookingguide.class, custguideid);
        s.delete(b);
        t.commit();
        s.close();
    }

    @Override
    public Custbookingguide findBookingguiudeById(Integer custguideid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Custbookingguide b = (Custbookingguide) s.get(Custbookingguide.class, custguideid);
        t.commit();
        s.close();
        return b;
    }

//    @Override
//    public Custbookingguide findBookingguiudeByName(String name) {
//        Session s = sessionFactory.openSession();
//        Transaction t = s.getTransaction();
//        t.begin();;
//        Criteria c = s.createCriteria(Custbookingguide.class);
//        c.add(Restrictions.eq("name", name));
//        Custbookingguide cbg = (Custbookingguide)c.uniqueResult();
//        t.commit();
//        s.close();
//        return cbg;
//    }
    
}
