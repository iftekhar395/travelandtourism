/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Transportagent;
import com.project.traveltourism.service.TransportagentService;
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
public class TransportagentRepository implements TransportagentService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Transportagent> findAllAgent() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Transportagent> userslist = s.createQuery("from Transportagent").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Transportagent savePackage(Transportagent user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public Transportagent findById(Integer tagentid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Transportagent user = (Transportagent) s.get(Transportagent.class, tagentid);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateAgent(Transportagent user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void deleteAgent(Integer tagentid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Transportagent user = (Transportagent) s.get(Transportagent.class, tagentid);
        s.delete(user);
        t.commit();
        s.close();
    }
}
