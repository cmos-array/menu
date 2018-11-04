package com.didispace.domain;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class MyUserMapper implements RowMapper<MyUser> {
    public MyUser mapRow(ResultSet rs, int rowNum) throws SQLException {
        MyUser myuser = new MyUser();
        myuser.setId(rs.getLong("id"));
        myuser.setUserName(rs.getString("userName"));
        myuser.setPassword(rs.getString("password"));
        myuser.setUserRoot(rs.getString("userRoot"));
        myuser.setAccountNonExpired(rs.getBoolean("accountNonExpired"));
        myuser.setAccountNonLocked(rs.getBoolean("accountNonLocked"));
        myuser.setCredentialsNonExpired(rs.getBoolean("credentialsNonExpired"));
        myuser.setEnabled(rs.getBoolean("enabled"));
        return myuser;
    }
}