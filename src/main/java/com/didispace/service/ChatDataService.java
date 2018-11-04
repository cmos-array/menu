package com.didispace.service;

import com.didispace.domain.ChatData;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
    public interface ChatDataService {

    void createChat(String date, Integer accessNum, Integer orderNum, Double orderRate);

    void deleteByDate(String date);

    List<ChatData> getAllChatDatas();

    void deleteAllDates();


}
