/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Customerbooking;
import com.project.traveltourism.service.CustomerbookingService;
import java.util.Date;
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
public class CustomerbookingRepository implements CustomerbookingService {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Customerbooking> findAllBooking() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Customerbooking> list = s.createQuery("from Customerbooking").list();
        t.commit();
        s.close();
        System.out.println(list);
        return list;
    }
@Override
    public List<Customerbooking> showAllBooking() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Customerbooking> list = s.createQuery("select cb, cbh from Customerbooking cb, Custbookinghotel cbh where cb.bookingid = cbh.bookingid").list();
        t.commit();
        s.close();
        System.out.println(list);
        return list;
    }
    
@Override
@Transactional
    public List<Object> showIndividualBooking(int custid) {
        Session s = sessionFactory.openSession();
        Query q = s.createQuery("select cb, cbh from Customerbooking cb, Custbookinghotel cbh where cb.bookingid = cbh.bookingid and cb.custid=:custid");
        q.setParameter("custid", custid);
        List<Object> info = q.list();
        s.close();
        return info;
    }
    
    
@Override
@Transactional
    public List<Object> getIndividualBooking(int bookingid) {
        Session s = sessionFactory.openSession();
        Query q = s.createQuery("select cb, cbh from Customerbooking cb, Custbookinghotel cbh where cb.bookingid = cbh.bookingid and cb.bookingid = :bookingid");
        q.setParameter("bookingid", bookingid);
        List<Object> info = q.list();
        s.close();
        return info;
    }
    
    @Override
    public Customerbooking saveBooking(Customerbooking cb) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(cb);
        t.commit();
        s.close();
        return cb;
    }

    @Override
    public Customerbooking findBookingById(Integer bookingid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Customerbooking b = (Customerbooking) s.get(Customerbooking.class, bookingid);
        t.commit();
        s.close();
        return b;

    }

    @Override
    public void updateBooking(Customerbooking cb) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(cb);
        t.commit();
        s.close();
    }

    @Override
    public void deleteBooking(Integer bookingid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Customerbooking b = (Customerbooking) s.get(Customerbooking.class, bookingid);
        s.delete(b);
        t.commit();
        s.close();
    }

    @Override
    @Transactional
    public List<Object> getAllHotelBooking(int custid, Date bdate) {

        Session s = sessionFactory.openSession();
        Query query = s.createQuery("select cb, cbh from Customerbooking cb, Custbookinghotel cbh where cb.bookingid = cbh.bookingid and cb.custid = :cid and cb.bookingdate= :bd");
        query.setParameter("cid", custid);
        query.setParameter("bd", bdate);
        List<Object> Allinfo = query.list();
        s.close();

        return Allinfo;

    }
    
    @Override
    @Transactional
    public List<Object> getHotelBookingById(int hdetid, int custid) {

        Session s = sessionFactory.openSession();
        Query query = s.createQuery("SELECT c FROM Customerbooking c, Custbookinghotel ch where ch.bookingid = c.bookingid and ch.hdetid = :hdetid and c.custid = :custid and c.bookingdate = (SELECT MAX(cst.bookingdate) from Customerbooking cst, Custbookinghotel chst where chst.hdetid = :hdetid and cst.bookingid=chst.bookingid)");
        query.setParameter("hdetid", hdetid);
        query.setParameter("custid", custid);
        List<Object> allinfo = query.list();
        s.close();

        return allinfo;

    }

    @Override
    @Transactional
    public List<Object> getBusBookingById(int busid, int custid) {

        Session s = sessionFactory.openSession();
        Query query = s.createQuery("SELECT c FROM Customerbooking c, Custbookinghotel ch where ch.bookingid = c.bookingid and ch.busid = :busid and c.custid = :custid and c.bookingdate = (SELECT MAX(cst.bookingdate) from Customerbooking cst, Custbookinghotel chst where chst.busid = :busid and cst.bookingid=chst.bookingid)");
        query.setParameter("busid", busid);
        query.setParameter("custid", custid);
        List<Object> allinfo = query.list();
        s.close();

        return allinfo;

    }
    
    @Override
    @Transactional
    public List<Object> getPackBookingById(int tpackid, int custid) {

        Session s = sessionFactory.openSession();
        Query query = s.createQuery("SELECT c FROM Customerbooking c where c.tpackid = :tpackid and c.custid = :custid and c.bookingdate = (SELECT MAX(cst.bookingdate) from Customerbooking cst where cst.tpackid = :tpackid)");
        query.setParameter("tpackid", tpackid);
        query.setParameter("custid", custid);
        List<Object> allinfo = query.list();
        s.close();

        return allinfo;

    }
}
