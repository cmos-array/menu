package com.didispace.service;

import com.didispace.domain.SellerTable;

import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
public interface SellerTableService {

    void createTable(String name, String detail, String tel, int volume, String address, String score, String category, String date1, String date2, String delivery, String[] type, String resource, String format);

    void updateSellerTable(Long id, String name, String detail, String tel, int volume, String address, String score, String category);

    void deleteTableById(Long id);

    List<SellerTable> getAllTableDatas();

    void deleteAllTableDatas();

}
