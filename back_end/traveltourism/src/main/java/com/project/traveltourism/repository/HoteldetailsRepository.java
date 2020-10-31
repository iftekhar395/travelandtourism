/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Hoteldetails;
import com.project.traveltourism.service.HoteldetailsService;
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
public class HoteldetailsRepository implements HoteldetailsService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Hoteldetails> findAllDetails() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Hoteldetails> userslist = s.createQuery("select hd from Hoteldetails hd, Transtype tt where hd.type=tt.hotel").list();
        t.commit();
        s.close();
        return userslist;
    }
    @Override
    public List<Hoteldetails> findLimitedDetails() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Hoteldetails> userslist = s.createQuery("select hd from Hoteldetails hd, Transtype tt where hd.type=tt.hotel").list();
        t.commit();
        s.close();
        return userslist.subList(0, 8);
    }

    @Override
    public List<Hoteldetails> findAllResortDetails() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Hoteldetails> userslist = s.createQuery("select hd from Hoteldetails hd, Transtype tt where hd.type=tt.resort").list();
        t.commit();
        s.close();
        return userslist;
    }
    @Override
    public List<Hoteldetails> findAllLimitedResortDetails() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Hoteldetails> userslist = s.createQuery("select hd from Hoteldetails hd, Transtype tt where hd.type=tt.resort").list();
        t.commit();
        s.close();
        return userslist.subList(0, 8);
    }
    
    @Override
    public Hoteldetails saveHotelDetails(Hoteldetails user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public Hoteldetails findById(Integer hdetid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Hoteldetails user = (Hoteldetails) s.get(Hoteldetails.class, hdetid);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateDetails(Hoteldetails user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void deleteById(Integer hdetid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Hoteldetails user = (Hoteldetails) s.get(Hoteldetails.class, hdetid);
        s.delete(user);
        t.commit();
        s.close();
    }
}
