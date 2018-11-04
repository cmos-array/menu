package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class BasicInfoMapper implements RowMapper<BasicInfo> {
    public BasicInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
        BasicInfo basicinfo = new BasicInfo();
        basicinfo.setId(rs.getLong("id"));
        basicinfo.setUserName(rs.getString("userName"));
        basicinfo.setRegDate(rs.getString("regDate"));
        basicinfo.setAddress(rs.getString("address"));
        basicinfo.setRoot(rs.getString("root"));
        return basicinfo;
    }
}