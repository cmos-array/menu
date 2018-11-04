package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class ChatDataMapper implements RowMapper<ChatData> {
    public ChatData mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatData chatData = new ChatData();
        chatData.setId((long) rs.getInt("id"));
        chatData.setAccessNum(rs.getInt("accessNum"));
        chatData.setOrderNum(rs.getInt("orderNum"));
        chatData.setOrderRate(rs.getDouble("orderRate"));
        return chatData;
    }
}