package com.didispace.service;

import com.didispace.domain.FoodTable;
import com.didispace.domain.FoodTableMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@Service
public class FoodTableServiceImpl implements FoodTableService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createTable(String foodName, String foodDetail, String foodClass, String date1, String date2, String delivery, int packCost, int sendCost, String shopName, String shopAddress, Long shopId) {
        String sql = "insert into FOODTABLE(FOODNAME, FOODDETAIL, FOODCLASS, DATE1, DATE2, DELIVERY, PACKCOST, SENDCOST, SHOPNAME, SHOPADDRESS, SHOPID) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, foodName, foodDetail, foodClass, date1, date2, delivery, packCost, sendCost, shopName, shopAddress, shopId);
    }

    @Override
    public void updateFoodTable(Long id, String foodName, String foodDetail, String foodClass, String date1, String date2, String delivery, int packCost, int sendCost, String shopName, String shopAddress, Long shopId) {
        String sql = "update FOODTABLE set foodName =?,foodDetail=?,foodClass=?,date1=?,date2=?,delivery=?,packCost=?,sendCost=?,shopName=?,shopAddress=?,shopId=? where id = ?";
        jdbcTemplate.update(sql, foodName, foodDetail, foodClass, date1, date2, delivery, packCost, sendCost, shopName, shopAddress, shopId, id);
    }

    @Override
    public void updateFoodTableByShop(Long shopId, String shopName, String shopAddress) {
        String sql = "update FOODTABLE set shopName =?,shopAddress=? where shopId = ?";
        jdbcTemplate.update(sql, shopName, shopAddress, shopId);
    }

    @Override
    public void deleteTableById(Long id) {
        jdbcTemplate.update("delete from FOODTABLE where id = ?", id);
    }

    @Override
    public List<FoodTable> getAllTableDatas() {
        String sql = "select * from FOODTABLE";
        List<FoodTable> result = jdbcTemplate.query(sql, new FoodTableMapper());
        return result;
    }

    @Override
    public void deleteAllTableDatas() {
        jdbcTemplate.update("delete from FOODTABLE");
    }
}