package com.didispace.service;

import com.didispace.domain.BasicInfo;
import com.didispace.domain.BasicInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@Service
public class BasicInfoServiceImpl implements BasicInfoService {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static BasicInfoServiceImpl myuser;

    @PostConstruct
    public void init() {
        myuser = this;
        myuser.jdbcTemplate = this.jdbcTemplate;
    }

    @Override
    public void createTable(String regDate, String userName, String address, String root) {
        String sql = "insert into BASICINFO(REGDATE, USERNAME, ADDRESS, ROOT) values(?, ?, ?, ?)";
        myuser.jdbcTemplate.update(sql, regDate, userName, address, root);
    }

    @Override
    public void updateTable(Long id, String regDate, String userName, String address, String root) {
        String sql = "update BASICINFO set REGDATE =?,USERNAME=?,ADDRESS=?,ROOT=? where ID = ?";
        myuser.jdbcTemplate.update(sql, regDate, userName, address, root, id);
    }

    @Override
    public void deleteTableById(Long id) {
        String sql = "delete from BASICINFO where ID = ?";
        myuser.jdbcTemplate.update(sql, id);
    }

    @Override
    public List<BasicInfo> getAllTableDatas(String root) {
        String sql = "select * from BASICINFO where ROOT = ?";
        List<BasicInfo> result = myuser.jdbcTemplate.query(sql, new BasicInfoMapper(), root);
        return result;
    }

    @Override
    public void deleteAllTableDatas() {
        String sql = "delete from BASICINFO";
        myuser.jdbcTemplate.update(sql);
    }
}
