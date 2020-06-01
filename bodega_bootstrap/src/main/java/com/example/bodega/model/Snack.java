package com.example.bodega.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "snack")
public class Snack {


    @Id
    @GeneratedValue
    @Column(name = "snack_id")
    private long snackId;


    @Column(name = "snack_name")
    private String snackName;

    @Column(name = "snack_price")
    private int snackPrice;


    public Snack() {
        super();
    }

    public Snack(String snackName, int snackPrice) {
        super();
        this.snackName = snackName;
        this.snackPrice = snackPrice;
    }

    public long getSnackId() {
        return snackId;
    }

    public void setSnackId(long snackId) {
        this.snackId = snackId;
    }


    public String getSnackName() {
        return snackName;
    }

    public void setSnackName(String snackName) {
        this.snackName = snackName;
    }

    public int getSnackPrice() {
        return snackPrice;
    }

    public void setSnackPrice(int snackPrice) {
        this.snackPrice = snackPrice;
    }

}
