/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Customerinfo;
import com.project.traveltourism.service.CustomerinfoService;
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
 * @author R-41
 */
@Repository
public class CustomerinfoRepository implements CustomerinfoService{
 @Autowired
 SessionFactory sessionFactory;

    @Override
    public List<Customerinfo> findAllCustomer() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Customerinfo> list = s.createQuery("from Customerinfo").list();
        t.commit();
        s.close();
        System.out.println(list);
        return list;
    }

    @Override
    public Customerinfo saveCustomer(Customerinfo custid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(custid);
        t.commit();
        s.close();
        return custid;
    }

    @Override
    public Customerinfo findById(Integer id) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Customerinfo b = (Customerinfo) s.get(Customerinfo.class, id);
        t.commit();
        s.close();
        return b;
    }
    
    
    @Override
    @Transactional
    public Object findCustomerById(int id) {
        Session s = sessionFactory.openSession();
        Query q = s.createQuery("select ci,ur from Userrole ur, Customerinfo ci where ur.emailid=ci.email and ci.custid=:custid");
        q.setParameter("custid", id);
        Object o = q.list();
        s.close();
        return o;
    }

    @Override
    public void updateCustomer(Customerinfo custid) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(custid);
        t.commit();
        s.close();
    }

    @Override
    public void deleteCustomer(Integer id) {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Customerinfo b = (Customerinfo) s.get(Customerinfo.class, id);
        s.delete(b);
        t.commit();
        s.close();
    }

    @Override
    @Transactional
    public Object getUser(String email) {
        Session s = sessionFactory.openSession();
        Query q = s.createQuery("Select ci from Customerinfo ci where ci.email=:email");
        q.setParameter("email", email);
        Object o = q;
        s.close();
        return o;
    }
 
}
