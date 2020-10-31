/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Hotelagent;
import com.project.traveltourism.service.HotelagentService;
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
public class HotelagentRepository implements HotelagentService{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Hotelagent> findAll() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Hotelagent> userslist = s.createQuery("from Hotelagent").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Hotelagent saveAgent(Hotelagent user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public Hotelagent findById(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Hotelagent user = (Hotelagent) s.get(Hotelagent.class, id);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateAgent(Hotelagent user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();
    }

    @Override
    public void deleteAgent(Integer id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Hotelagent user = (Hotelagent) s.get(Hotelagent.class, id);
        s.delete(user);
        t.commit();
        s.close();
    }
    
}
