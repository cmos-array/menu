package com.didispace.service;

import com.didispace.domain.FoodTable;

import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
public interface FoodTableService {

    void createTable(String foodName, String foodDetail, String foodClass, String date1, String date2, String delivery, int packCost, int sendCost, String shopName, String shopAddress, Long shopId);

    void updateFoodTable(Long id, String foodName, String foodDetail, String foodClass, String date1, String date2, String delivery, int packCost, int sendCost, String shopName, String shopAddress, Long shopId);

    void updateFoodTableByShop(Long shopId, String shopName, String shopAddress);

    void deleteTableById(Long id);

    List<FoodTable> getAllTableDatas();

    void deleteAllTableDatas();

}
