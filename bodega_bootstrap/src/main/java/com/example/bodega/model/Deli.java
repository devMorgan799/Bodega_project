package com.example.bodega.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "deli")
public class Deli {


    @Id
    @GeneratedValue
    @Column(name = "deli_id")
    private long deliId;


    @Column(name = "deli_name")
    private String deliName;

    @Column(name = "deli_price")
    private int deliPrice;


    public Deli() {
        super();
    }

    public Deli(String deliName, int deliPrice) {
        super();
        this.deliName = deliName;
        this.deliPrice = deliPrice;
    }

    public long getDeliId() {
        return deliId;
    }

    public void setDeliId(long deliId) {
        this.deliId = deliId;
    }


    public String getDeliName() {
        return deliName;
    }

    public void setDeliName(String deliName) {
        this.deliName = deliName;
    }

    public int getDeliPrice() {
        return deliPrice;
    }

    public void setDeliPrice(int deliPrice) {
        this.deliPrice = deliPrice;
    }

}
