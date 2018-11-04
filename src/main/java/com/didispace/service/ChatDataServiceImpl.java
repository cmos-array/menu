package com.didispace.service;

import com.didispace.domain.ChatData;
import com.didispace.domain.ChatDataMapper;
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
public class ChatDataServiceImpl implements ChatDataService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createChat(String date, Integer accessNum, Integer orderNum, Double orderRate) {
        jdbcTemplate.update("insert into CHATDATA(date, accessNum, orderNum, orderRate) values(?, ?, ?, ?)", date, accessNum, orderNum, orderRate);
    }

    @Override
    public void deleteByDate(String date) {

    }

    @Override
    public List<ChatData> getAllChatDatas() {
        String sql = "select * from CHATDATA";
        List<ChatData> result = jdbcTemplate.query(sql, new ChatDataMapper());
        return result;
    }

    @Override
    public void deleteAllDates() {

    }
}
