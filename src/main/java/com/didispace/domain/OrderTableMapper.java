package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class OrderTableMapper implements RowMapper<OrderTable> {
    public OrderTable mapRow(ResultSet rs, int rowNum) throws SQLException {
        OrderTable ordertable = new OrderTable();
        ordertable.setId(rs.getLong("id"));
        ordertable.setPrice(rs.getString("price"));
        ordertable.setStatus(rs.getString("status"));
        ordertable.setOrderName(rs.getString("orderName"));
        ordertable.setOrderAddress(rs.getString("orderAddress"));
        ordertable.setShopAddress(rs.getString("shopAddress"));
        ordertable.setShopName(rs.getString("shopName"));
        ordertable.setShopId(rs.getLong("shopId"));
        return ordertable;
    }
}