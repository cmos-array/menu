package com.didispace.web;

import com.didispace.domain.MyUser;
import com.didispace.service.BasicInfoServiceImpl;
import com.didispace.service.MyUserServiceImpl;
import com.didispace.service.TimeService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiImplicitParam;
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
@RequestMapping(value="/createuser")
public class MyUserController {

    @Autowired
    MyUserServiceImpl myuserserviceimpl;

    @Autowired
    BasicInfoServiceImpl basicinfoserviceimpl;

    @Autowired
    TimeService timeService;

    @ApiOperation(value="创建用户", notes="根据MyUser对象创建用户")
    @ApiImplicitParam(name = "myuser", value = "myuser", required = true, dataType = "MyUser")
    @RequestMapping(value="", method=RequestMethod.POST)
    public String postSellerTable(@RequestBody MyUser myuser) {
        String temp = "true";
        String root = "user";
        String realTime = timeService.getTime();
        String address = "未设置";
        myuserserviceimpl.createUser(myuser.getUserName(),myuser.getPassword(),root,temp,temp,temp,temp);
        basicinfoserviceimpl.createTable(realTime,myuser.getUserName(),address,root);
        return "success";
    }

}