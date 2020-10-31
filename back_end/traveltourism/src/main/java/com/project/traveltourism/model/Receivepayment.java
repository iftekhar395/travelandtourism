package com.project.traveltourism.model;
// Generated Oct 29, 2020 2:28:11 AM by Hibernate Tools 4.3.1


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Receivepayment generated by hbm2java
 */
@Entity
@Table(name="receivepayment"
    ,catalog="travelandtourism"
)
public class Receivepayment  implements java.io.Serializable {


     private Integer payid;
     private int custid;
     private int bookingid;
     private Date paydate;
     private double amount;
     private String paytype;
     private String status;

    public Receivepayment() {
    }

    public Receivepayment(int custid, int bookingid, Date paydate, double amount, String paytype, String status) {
       this.custid = custid;
       this.bookingid = bookingid;
       this.paydate = paydate;
       this.amount = amount;
       this.paytype = paytype;
       this.status = status;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="payid", unique=true, nullable=false)
    public Integer getPayid() {
        return this.payid;
    }
    
    public void setPayid(Integer payid) {
        this.payid = payid;
    }

    
    @Column(name="custid", nullable=false)
    public int getCustid() {
        return this.custid;
    }
    
    public void setCustid(int custid) {
        this.custid = custid;
    }

    
    @Column(name="bookingid", nullable=false)
    public int getBookingid() {
        return this.bookingid;
    }
    
    public void setBookingid(int bookingid) {
        this.bookingid = bookingid;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="paydate", nullable=false, length=10)
    public Date getPaydate() {
        return this.paydate;
    }
    
    public void setPaydate(Date paydate) {
        this.paydate = paydate;
    }

    
    @Column(name="amount", nullable=false, precision=22, scale=0)
    public double getAmount() {
        return this.amount;
    }
    
    public void setAmount(double amount) {
        this.amount = amount;
    }

    
    @Column(name="paytype", nullable=false, length=45)
    public String getPaytype() {
        return this.paytype;
    }
    
    public void setPaytype(String paytype) {
        this.paytype = paytype;
    }

    
    @Column(name="status", nullable=false, length=45)
    public String getStatus() {
        return this.status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }




}

