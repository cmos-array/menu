package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class FoodTableMapper implements RowMapper<FoodTable> {
    public FoodTable mapRow(ResultSet rs, int rowNum) throws SQLException {
        FoodTable foodTable = new FoodTable();
        foodTable.setId(rs.getLong("id"));
        foodTable.setFoodName(rs.getString("foodName"));
        foodTable.setFoodDetail(rs.getString("foodDetail"));
        foodTable.setFoodClass(rs.getString("foodClass"));
        foodTable.setDate1(rs.getString("date1"));
        foodTable.setDate2(rs.getString("date2"));
        foodTable.setDelivery(rs.getString("delivery"));
        foodTable.setPackCost(rs.getInt("packCost"));
        foodTable.setSendCost(rs.getInt("sendCost"));
        foodTable.setShopName(rs.getString("shopName"));
        foodTable.setShopAddress(rs.getString("shopAddress"));
        foodTable.setShopId(rs.getLong("shopId"));
        foodTable.setVolume(rs.getInt("volume"));
        foodTable.setScore(rs.getString("score"));
        return foodTable;
    }
}