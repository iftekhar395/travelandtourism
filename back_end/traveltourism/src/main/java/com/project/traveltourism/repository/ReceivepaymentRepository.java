/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Receivepayment;
import com.project.traveltourism.service.ReceivepaymentService;
import java.util.List;
import org.hibernate.Query;
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
public class ReceivepaymentRepository implements ReceivepaymentService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Receivepayment> findAllDetails() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Receivepayment> userslist = s.createQuery("from Receivepayment").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Receivepayment saveHotelDetails(Receivepayment user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    
    @Override
    public Receivepayment findById(Integer payid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Receivepayment user = (Receivepayment) s.get(Receivepayment.class, payid);
        t.commit();
        s.close();
        return user;
    }
    
    @Override
    public List<Receivepayment> findPaymentById(Integer payid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Receivepayment> userslist = s.createQuery("select rp from Receivepayment rp, Customerbooking cb, Transtype tt where rp.custid = cb.custid and rp.status = tt.status and rp.bookingid = cb.bookingid").list();
        System.out.println(userslist);
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public void updateDetails(Receivepayment user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void deleteById(Integer payid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Receivepayment user = (Receivepayment) s.get(Receivepayment.class, payid);
        s.delete(user);
        t.commit();
        s.close();
    }

//    @Override
//    public List<Receivepayment> findAllDetailsForId(Receivepayment rp) {
//    Session s = sessionFactory.openSession();
//        Transaction t = s.getTransaction();
//        t.begin();
//        Query userslist = s.createQuery("select rp from Receivepayment rp, Customerbooking cb, Transtype tt where rp.custid = cb.custid and rp.status = tt.status");
//        userslist.setParameter("custid", rp.getCustid() );
//        userslist.setParameter("status", rp.getStatus());
//        List<Receivepayment> list = userslist.list();
//        t.commit();
//        s.close();
//        return list;
//    }
    
}
