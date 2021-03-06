package com.project.traveltourism.model;
// Generated Oct 29, 2020 2:28:11 AM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Customerinfo generated by hbm2java
 */
@Entity
@Table(name="customerinfo"
    ,catalog="travelandtourism"
)
public class Customerinfo  implements java.io.Serializable {


     private Integer custid;
     private String custname;
     private String custphone;
     private String email;
     private String custaddress;
     private String image;

    public Customerinfo() {
    }

    public Customerinfo(String custname, String custphone, String email, String custaddress, String image) {
       this.custname = custname;
       this.custphone = custphone;
       this.email = email;
       this.custaddress = custaddress;
       this.image = image;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="custid", unique=true, nullable=false)
    public Integer getCustid() {
        return this.custid;
    }
    
    public void setCustid(Integer custid) {
        this.custid = custid;
    }

    
    @Column(name="custname", nullable=false, length=45)
    public String getCustname() {
        return this.custname;
    }
    
    public void setCustname(String custname) {
        this.custname = custname;
    }

    
    @Column(name="custphone", nullable=false, length=45)
    public String getCustphone() {
        return this.custphone;
    }
    
    public void setCustphone(String custphone) {
        this.custphone = custphone;
    }

    
    @Column(name="email", nullable=false, length=45)
    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    
    @Column(name="custaddress", nullable=false, length=450)
    public String getCustaddress() {
        return this.custaddress;
    }
    
    public void setCustaddress(String custaddress) {
        this.custaddress = custaddress;
    }

    
    @Column(name="image", nullable=false, length=45)
    public String getImage() {
        return this.image;
    }
    
    public void setImage(String image) {
        this.image = image;
    }




}


