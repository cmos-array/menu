package com.didispace.service;

import com.didispace.domain.MyUser;
import com.didispace.domain.MyUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@Service
public class MyUserServiceImpl implements MyUserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static MyUserServiceImpl myuser;

    @PostConstruct
    public void init() {
        myuser = this;
        myuser.jdbcTemplate = this.jdbcTemplate;
    }

    @Override
    public void createUser(String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String passWordEncode = encoder.encode(password);
        String sql = "insert into USERINFO(USERNAME, PASSWORD, USERROOT, ACCOUNTNONEXPIRED, ACCOUNTNONLOCKED, CREDENTIALSNONEXPIRED, ENABLED) values(?, ?, ?, ?, ?, ?, ?)";
        myuser.jdbcTemplate.update(sql, userName, passWordEncode, userRoot, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled);
    }

    @Override
    public void updateUserInfoById(Long id, String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String passWordEncode = encoder.encode(password);
        String sql = "update USERINFO set USERNAME=?, PASSWORD=?, USERROOT=?, ACCOUNTNONEXPIRED=?, ACCOUNTNONLOCKED=?, CREDENTIALSNONEXPIRED=?, ENABLED=? where ID = ?";
        myuser.jdbcTemplate.update(sql, userName, passWordEncode, userRoot, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled, id);
    }

    @Override
    public void updateUserInfoByName(String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String passWordEncode = encoder.encode(password);
        String sql = "update USERINFO set PASSWORD=?, USERROOT=?, ACCOUNTNONEXPIRED=?, ACCOUNTNONLOCKED=?, CREDENTIALSNONEXPIRED=?, ENABLED=? where USERNAME = ?";
        myuser.jdbcTemplate.update(sql, passWordEncode, userRoot, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled, userName);
    }

    @Override
    public void deleteUserInfoByName(String userName) {
        String sql = "delete from USERINFO where USERNAME = ?";
        myuser.jdbcTemplate.update(sql, userName);
    }

    @Override
    public String getPassWordByName(String userName) {
        String sql = "SELECT PASSWORD FROM USERINFO WHERE USERNAME = ?";
        String password = myuser.jdbcTemplate.queryForObject(sql, new String[]{userName}, String.class);
        return password;
    }

    @Override
    public List<MyUser> getAllUserInfo() {
        String sql = "select * from USERINFO";
        List<MyUser> result = myuser.jdbcTemplate.query(sql, new MyUserMapper());
        return result;
    }

    @Override
    public void deleteAllUserInfo() {
        String sql = "delete from USERINFO";
        myuser.jdbcTemplate.update(sql);
    }
}