/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Custbookinghotel;
import com.project.traveltourism.service.CustbookinghotelService;
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
public class CustbookinghotelRepository implements CustbookinghotelService{
@Autowired
SessionFactory sessionFactory;
    @Override
    public List<Custbookinghotel> findAllbookingHotel() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Custbookinghotel> list = s.createQuery("from Custbookinghotel").list();
        t.commit();
        s.close();
        System.out.println(list);
        return list;

    }

    @Override
    public Custbookinghotel saveBookingHotel(Custbookinghotel cbh) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(cbh);
        t.commit();
        s.close();
        return cbh;
    }

    @Override
    public void updateBookingHotel(Custbookinghotel cbh) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(cbh);
        t.commit();
        s.close();
    }

    @Override
    public Custbookinghotel findBookingHotelById(Integer custhotelid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Custbookinghotel b = (Custbookinghotel) s.get(Custbookinghotel.class, custhotelid);
        t.commit();
        s.close();
        return b;
    }
    
    @Override
    public void deleteById(Integer custhotelid) {
         Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Custbookinghotel b = (Custbookinghotel) s.get(Custbookinghotel.class, custhotelid);
        s.delete(b);
        t.commit();
        s.close();
    }

    
    
}
