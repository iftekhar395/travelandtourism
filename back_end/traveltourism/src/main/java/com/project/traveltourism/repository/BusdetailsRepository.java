/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;
import com.project.traveltourism.model.Busdetails;
import com.project.traveltourism.service.BusdetailsService;
import java.util.List;
import org.hibernate.Query;
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
@Repository
public class BusdetailsRepository implements BusdetailsService{

    @Autowired
    SessionFactory sessionFactory;
    @Override
    public List<Busdetails> findAllBus() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Busdetails> buslist = s.createQuery("from Busdetails").list();
        t.commit();
        s.close();
        System.out.println(buslist);
        return buslist;
    }

    @Override
    public Busdetails saveBus(Busdetails bd) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(bd);
        t.commit();
        s.close();
        return bd;
    }

    @Override
    public Busdetails findById(Integer busid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Busdetails bd = (Busdetails) s.get(Busdetails.class, busid);
        t.commit();
        s.close();
        return bd;

    }

    @Override
    public void updateBus(Busdetails bd) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(bd);
        t.commit();
        s.close();
    }

    @Override
    public void deleteBus(Integer busid) {
         Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Busdetails bd = (Busdetails) s.get(Busdetails.class, busid);
        s.delete(bd);
        t.commit();
        s.close();
    }

    @Override
    @Transactional
    public List<Object> getAllBus(int transdetid) {
        Session s = sessionFactory.openSession();
        Query query = s.createQuery("select bd from Busdetails bd where bd.transdetid = :transid");
        query.setParameter("transid", transdetid);
        List<Object> info = query.list();
        s.close();

        return info;
    }

    
}
