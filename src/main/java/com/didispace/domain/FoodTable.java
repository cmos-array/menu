package com.didispace.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class FoodTable{

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String foodName;

    @Column(nullable = false)
    private String foodDetail;

    @Column(nullable = false)
    private String foodClass;

    @Column(nullable = false)
    private String date1;

    @Column(nullable = false)
    private String date2;

    @Column(nullable = false)
    private String delivery;

    @Column(nullable = false)
    private int packCost;

    @Column(nullable = false)
    private int sendCost;

    @Column(nullable = false)
    private String shopName;

    @Column(nullable = false)
    private String shopAddress;

    @Column(nullable = false)
    private Long shopId;

    @Column(nullable = false)
    private int volume;

    @Column(nullable = false)
    private String score;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getFoodDetail() {
        return foodDetail;
    }

    public void setFoodDetail(String foodDetail) {
        this.foodDetail = foodDetail;
    }

    public String getFoodClass() {
        return foodClass;
    }

    public void setFoodClass(String foodClass) {
        this.foodClass = foodClass;
    }

    public String getDate1() {
        return date1;
    }

    public void setDate1(String date1) {
        this.date1 = date1;
    }

    public String getDate2() {
        return date2;
    }

    public void setDate2(String date2) {
        this.date2 = date2;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public int getPackCost() {
        return packCost;
    }

    public void setPackCost(int packCost) {
        this.packCost = packCost;
    }

    public int getSendCost() {
        return sendCost;
    }

    public void setSendCost(int sendCost) {
        this.sendCost = sendCost;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public void setShopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }
}
