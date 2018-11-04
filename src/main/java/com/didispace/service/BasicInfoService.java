package com.didispace.service;

import com.didispace.domain.BasicInfo;

import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
public interface BasicInfoService {

    void createTable(String regDate, String userName, String address, String root);

    void updateTable(Long id, String regDate, String userName, String address, String root);

    void deleteTableById(Long id);

    List<BasicInfo> getAllTableDatas(String userName);

    void deleteAllTableDatas();

}
