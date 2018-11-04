package com.didispace.web;

import com.didispace.domain.OrderTable;
import com.didispace.service.OrderTableServiceImpl;
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
@RequestMapping(value="/ordertable")
public class OrderTableController {

    @Autowired
    OrderTableServiceImpl orderTableService;

    @ApiOperation(value="获取订单列表", notes="")
    @RequestMapping(value={""}, method=RequestMethod.GET)
    public List<OrderTable> getSellerTableList() {
        List<OrderTable> r = orderTableService.getAllTableDatas();
        return r;
    }

}