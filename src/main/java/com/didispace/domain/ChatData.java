package com.didispace.domain;

public class ChatData {

    private Long id;
    private String date;
    private Integer accessNum;
    private Integer orderNum;
    private Double orderRate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getAccessNum() {
        return accessNum;
    }

    public void setAccessNum(Integer accessNum) {
        this.accessNum = accessNum;
    }

    public Integer getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Integer orderNum) {
        this.orderNum = orderNum;
    }

    public Double getOrderRate() {
        return orderRate;
    }

    public void setOrderRate(Double orderRate) {
        this.orderRate = orderRate;
    }
}
