package com.didispace.service;

import com.didispace.domain.SellerTable;
import com.didispace.domain.SellerTableMapper;
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
public class SellerTableServiceImpl implements SellerTableService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createTable(String name, String detail, String tel, int volume, String address, String score, String category, String date1, String date2, String delivery, String[] type, String resource, String format) {
        String typeStr = arrToStr(type);
        String sql = "insert into SELLERTABLE(NAME, DETAIL, TEL, VOLUME, ADDRESS, SCORE, CATEGORY, DATE1, DATE2, DELIVERY, TYPE, RESOURCE, FORMAT) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, name, detail, tel, volume, address, score, category, date1, date2, delivery, typeStr, resource, format);
    }

    @Override
    public void updateSellerTable(Long id, String name, String detail, String tel, int volume, String address, String score, String category) {
        String sql = "update SELLERTABLE set name =?,detail=?,tel=?,volume=?,address=?,score=?,category=? where id = ?";
        jdbcTemplate.update(sql, name, detail, tel, volume, address, score, category, id);
    }

    @Override
    public void deleteTableById(Long id) {
        String sql = "delete from SELLERTABLE where id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<SellerTable> getAllTableDatas() {
        String sql = "select * from SELLERTABLE";
        List<SellerTable> result = jdbcTemplate.query(sql, new SellerTableMapper());
        return result;
    }

    @Override
    public void deleteAllTableDatas() {
        String sql = "delete from SELLERTABLE";
        jdbcTemplate.update(sql);
    }

    public String arrToStr(String[] type) {
        String typeStr = null;
        List<String> list = new ArrayList<String>();
        for(String str : type){
            list.add(str);
        }
        typeStr = list.toString();
        typeStr = typeStr.replace("[","");
        typeStr = typeStr.replace("]","");
        return typeStr;
    }
}
