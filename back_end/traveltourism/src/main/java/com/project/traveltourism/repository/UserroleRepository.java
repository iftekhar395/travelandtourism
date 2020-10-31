/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Userrole;
import com.project.traveltourism.service.UserroleService;
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
public class UserroleRepository implements UserroleService{
    @Autowired
    SessionFactory sessionFactory;
    @Override
    public List<Userrole> findAllUserrole() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Userrole> userslist = s.createQuery("from Userrole").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public Userrole saveUser(Userrole emailid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(emailid);
        t.commit();
        s.close();
        return emailid;
    }

    @Override
    public Userrole findByEmailId(String emailid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Userrole user = (Userrole) s.get(Userrole.class, emailid);
        System.out.println("User Repository "+user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateUserrole(Userrole userrole) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(userrole);
        t.commit();
        s.close();
}

    @Override
    public void deleteUserByEmailId(String emailid) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        Userrole user = (Userrole) s.get(Userrole.class, emailid);
        s.delete(user);
        t.commit();
        s.close();}

    @Override
    @Transactional
    public Object getUser(String emailid, String password) {
        Session s = sessionFactory.openSession();
        Query query = s.createQuery("select ur, ci from Userrole ur, Customerinfo ci where ur.emailid=ci.email and ur.emailid = :email and ur.password = :password");
        query.setParameter("email", emailid);
        query.setParameter("password", password);
        Object role = query.list();
        System.out.println(query);
        s.close();
        
        return role;
    }
}
