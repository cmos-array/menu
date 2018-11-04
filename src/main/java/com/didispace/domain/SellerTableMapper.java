package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class SellerTableMapper implements RowMapper<SellerTable> {
    public SellerTable mapRow(ResultSet rs, int rowNum) throws SQLException {
        SellerTable sellerTable = new SellerTable();
        sellerTable.setId(rs.getLong("id"));
        sellerTable.setName(rs.getString("name"));
        sellerTable.setDetail(rs.getString("detail"));
        sellerTable.setTel(rs.getString("tel"));
        sellerTable.setVolume(rs.getInt("volume"));
        sellerTable.setAddress(rs.getString("address"));
        sellerTable.setScore(rs.getString("score"));
        sellerTable.setCategory(rs.getString("category"));
        sellerTable.setDate1(rs.getString("date1"));
        sellerTable.setDate2(rs.getString("date2"));
        sellerTable.setDelivery(rs.getString("delivery"));
        sellerTable.setType(rs.getString("type").split(","));
        sellerTable.setResource(rs.getString("resource"));
        sellerTable.setFormat(rs.getString("format"));
        return sellerTable;
    }
}