package com.example.bodega.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "beverage")
public class Beverage {


    @Id
    @GeneratedValue
    @Column(name = "beverage_id")
    private long beverageId;


    @Column(name = "beverage_name")
    private String beverageName;

    @Column(name = "beverage_price")
    private int beveragePrice;


    public Beverage() {
        super();
    }

    public Beverage(String beverageName, int beveragePrice) {
        super();
        this.beverageName = beverageName;
        this.beveragePrice = beveragePrice;
    }

    public long getBeverageId() {
        return beverageId;
    }

    public void setBeverageId(long beverageId) {
        this.beverageId = beverageId;
    }


    public String getBeverageName() {
        return beverageName;
    }

    public void setBeverageName(String beverageName) {
        this.beverageName = beverageName;
    }

    public int getBeveragePrice() {
        return beveragePrice;
    }

    public void setBeveragePrice(int beveragePrice) {
        this.beveragePrice = beveragePrice;
    }

}
