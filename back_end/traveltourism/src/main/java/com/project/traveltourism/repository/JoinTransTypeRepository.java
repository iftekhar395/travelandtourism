/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.traveltourism.repository;

import com.project.traveltourism.model.Transportdetails;
import com.project.traveltourism.service.JoinTransTypeService;
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
public class JoinTransTypeRepository implements JoinTransTypeService{

    @Autowired
    SessionFactory sf;
    
    @Override
    public List<Transportdetails> getAllBuses() {
        Session s = sf.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Transportdetails> td = s.createQuery("select t from Transportdetails t, Transtype tt where t.transtype=tt.bus").list();
        t.commit();
        s.close();
        return td;
    }

    @Override
    public List<Transportdetails> getAllCars() {
        Session s = sf.openSession();
        Transaction t = s.getTransaction();
        t.begin();
        List<Transportdetails> td = s.createQuery("select t from Transportdetails t, Transtype tt where t.transtype=tt.car").list();
        t.commit();
        s.close();
        return td;
    }
    
}
