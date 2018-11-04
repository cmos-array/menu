package com.didispace.service;

import com.didispace.domain.OrderTable;

import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
public interface OrderTableService {

    void createTable(String price, String status, String orderName, String orderAddress, String shopAddress, String shopName, Long shopId);

    void updateOrderTable(Long id, String price, String status, String orderName, String orderAddress, String shopAddress, String shopName, Long shopId);

    void updateOrderTableByShop(Long shopId, String shopName, String shopAddress);

    void deleteTableById(Long id);

    List<OrderTable> getAllTableDatas();

    void deleteAllTableDatas();

}
