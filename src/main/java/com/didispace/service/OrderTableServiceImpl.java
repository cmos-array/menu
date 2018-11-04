package com.didispace.service;

import com.didispace.domain.OrderTable;
import com.didispace.domain.OrderTableMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@Service
public class OrderTableServiceImpl implements OrderTableService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createTable(String price, String status, String orderName, String orderAddress, String shopAddress, String shopName, Long shopId) {
        String sql = "insert into ORDERTABLE(PRICE, STATUS, ORDERNAME, ORDERADDRESS, SHOPADDRESS, SHOPNAME, SHOPID) values(?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, price, status, orderName, orderAddress, shopAddress, shopName, shopId);
    }

    @Override
    public void updateOrderTable(Long id, String price, String status, String orderName, String orderAddress, String shopAddress, String shopName, Long shopId) {
        String sql = "update ORDERTABLE set PRICE =?,STATUS=?,ORDERNAME=?,ORDERADDRESS=?,SHOPADDRESS=?,SHOPNAME=?,SHOPID=? where id = ?";
        jdbcTemplate.update(sql, price, status, orderName, orderAddress, shopAddress, shopName, shopId, id);
    }

    @Override
    public void updateOrderTableByShop(Long shopId, String shopName, String shopAddress) {
        String sql = "update ORDERTABLE set shopName =?,shopAddress=? where shopId = ?";
        jdbcTemplate.update(sql, shopName, shopAddress, shopId);
    }

    @Override
    public void deleteTableById(Long id) {
        String sql = "delete from ORDERTABLE where id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<OrderTable> getAllTableDatas() {
        String sql = "select * from ORDERTABLE";
        List<OrderTable> result = jdbcTemplate.query(sql, new OrderTableMapper());
        return result;
    }

    @Override
    public void deleteAllTableDatas() {
        String sql = "delete from ORDERTABLE";
        jdbcTemplate.update(sql);
    }
}
