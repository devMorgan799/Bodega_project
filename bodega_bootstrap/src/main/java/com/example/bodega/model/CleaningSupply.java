package com.example.bodega.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "cleaningsupply")
public class CleaningSupply {


    @Id
    @GeneratedValue
    @Column(name = "cleaningsupply_id")
    private long cleaningsupplyId;


    @Column(name = "cleaningsupply_name")
    private String cleaningsupplyName;

    @Column(name = "cleaningsupply_price")
    private int cleaningsupplyPrice;


    public CleaningSupply() {
        super();
    }

    public CleaningSupply(String cleaningsupplyName, int cleaningsupplyPrice) {
        super();
        this.cleaningsupplyName = cleaningsupplyName;
        this.cleaningsupplyPrice = cleaningsupplyPrice;
    }

    public long getCleaningSupplyId() {
        return cleaningsupplyId;
    }

    public void setCleaningSupplyId(long cleaningsupplyId) {
        this.cleaningsupplyId = cleaningsupplyId;
    }


    public String getCleaningSupplyName() {
        return cleaningsupplyName;
    }

    public void setCleaningSupplyName(String cleaningsupplyName) {
        this.cleaningsupplyName = cleaningsupplyName;
    }

    public int getCleaningSupplyPrice() {
        return cleaningsupplyPrice;
    }

    public void setCleaningSupplyPrice(int cleaningsupplyPrice) {
        this.cleaningsupplyPrice = cleaningsupplyPrice;
    }

}
