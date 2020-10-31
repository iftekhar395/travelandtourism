/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.User;
import com.project.traveltourism.service.UserService;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository implements UserService{

    @Autowired
    SessionFactory sessionFactory;
    @Override
    public List<User> findAllUsers() {
        Session s = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<User> userslist = s.createQuery("from User").list();
        t.commit();
        s.close();
        return userslist;
    }

    @Override
    public User saveUser(User user) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.save(user);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public User findByEmailId(String id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        User user = (User) s.get(User.class, id);
        t.commit();
        s.close();
        return user;
    }

    @Override
    public void updateUser(User user) {
        Session s  = sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        s.update(user);
        t.commit();
        s.close();

    }

    @Override
    public void deleteUserByEmailId(String id) {
        Session s= sessionFactory.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        User user = (User) s.get(User.class, id);
        s.delete(user);
        t.commit();
        s.close();
    }
    
}
