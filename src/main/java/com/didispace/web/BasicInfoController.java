package com.didispace.web;

import com.didispace.domain.BasicInfo;
import com.didispace.service.BasicInfoServiceImpl;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@RestController
@RequestMapping(value="/basicinfo")
public class BasicInfoController {

    @Autowired
    BasicInfoServiceImpl basicinfoservice;

    @ApiOperation(value="获取用户基本信息列表", notes="根据传过来的BasicInfo的root信息来获取用户基本信息列表")
    @ApiImplicitParam(name = "root", value = "用户名", required = true, dataType = "String", paramType = "path")
    @RequestMapping(value="/{root}", method=RequestMethod.GET)
    public List<BasicInfo> getSellerTableList(@PathVariable String root) {
        List<BasicInfo> r = basicinfoservice.getAllTableDatas(root);
        return r;
    }

}