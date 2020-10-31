/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Customerinfo;
import com.project.traveltourism.model.Userrole;
import com.project.traveltourism.service.JoinUserdetailsService;
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
public class JoinUserdetailsRepository implements JoinUserdetailsService{
    @Autowired
    SessionFactory sessionFac;

    @Override
    public List<Object[]> updateUser() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Object[]> deleteUser() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Object> showAll() {
        Session s = sessionFac.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Object> td = s.createQuery("select ci, ur from Customerinfo ci, Userrole ur where ci.email=ur.emailid").list();
        t.commit();
        s.close();
        return td;
    }

    @Override
    public List<Object[]> saveUser(Customerinfo ci, Userrole ur) {
        Session s = sessionFac.openSession();
        Session s2 = sessionFac.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(ci);
        s2.save(ur);
        t.commit();
        s.close();
        s2.close();
        return saveUser(ci, ur);
    }
    
}
