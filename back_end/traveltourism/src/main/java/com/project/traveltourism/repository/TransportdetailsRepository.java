/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Transportdetails;
import com.project.traveltourism.service.TransportdetailsService;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS
 */
@Repository
public class TransportdetailsRepository implements TransportdetailsService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Transportdetails> findAll() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Transportdetails> userslist = s.createQuery("from Transportdetails").list();
        t.commit();
        s.close();
        return userslist;
    }
    @Override
    public List<Transportdetails> findAllBus() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Transportdetails> userslist = s.createQuery("from Transportdetails").list();
        t.commit();
        s.close();
        return userslist.subList(0, 8);
    }

    @Override
    public Transportdetails save(Transportdetails transport) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(transport);
        t.commit();
        s.close();
        return transport;
    }

    @Override
    public Transportdetails findById(Integer tagentid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Transportdetails user = (Transportdetails) s.get(Transportdetails.class, tagentid);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void update(Transportdetails user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void delete(Integer transdetid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Transportdetails user = (Transportdetails) s.get(Transportdetails.class, transdetid);
        s.delete(user);
        t.commit();
        s.close();
    }

//    @Override
//    public List<Transportdetails> findAllCar() {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//    }
//
//    @Override
//    public List<Transportdetails> findAllBus() {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//    }
}
