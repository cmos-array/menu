package com.didispace.web;

import com.didispace.domain.SellerTable;
import com.didispace.service.FoodTableServiceImpl;
import com.didispace.service.OrderTableServiceImpl;
import com.didispace.service.SellerTableServiceImpl;
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
@RequestMapping(value="/sellertable")
public class SellerTableController {

    @Autowired
    SellerTableServiceImpl sellerTableService;

    @Autowired
    FoodTableServiceImpl foodTableService;

    @Autowired
    OrderTableServiceImpl orderTableService;

    @ApiOperation(value="获取商家列表", notes="")
    @RequestMapping(value={""}, method=RequestMethod.GET)
    public List<SellerTable> getSellerTableList() {
        List<SellerTable> r = sellerTableService.getAllTableDatas();
        return r;
    }

    @ApiOperation(value="创建商家", notes="根据SellerTable对象创建商家")
    @ApiImplicitParam(name = "seller", value = "seller", required = true, dataType = "SellerTable")
    @RequestMapping(value="", method=RequestMethod.POST)
    public String postSellerTable(@RequestBody SellerTable seller) {
        sellerTableService.createTable(seller.getName(),seller.getDetail(),seller.getTel(),seller.getVolume(),seller.getAddress(),seller.getScore(),seller.getCategory(),seller.getDate1(),seller.getDate2(),seller.getDelivery(),seller.getType(),seller.getResource(),seller.getFormat());
        return "success";
    }

    @ApiOperation(value="更新商家详细信息", notes="根据传过来的seller的id信息来更新商家详细信息")
    @ApiImplicitParam(name = "seller", value = "商家详细实体seller", required = true, dataType = "SellerTable")
    @RequestMapping(value="", method=RequestMethod.PUT)
    public String putSellerTable( @RequestBody SellerTable seller) {
        sellerTableService.updateSellerTable(seller.getId(),seller.getName(),seller.getDetail(),seller.getTel(),seller.getVolume(),seller.getAddress(),seller.getScore(),seller.getCategory());
        foodTableService.updateFoodTableByShop(seller.getId(),seller.getName(),seller.getAddress());
        orderTableService.updateOrderTableByShop(seller.getId(), seller.getName(), seller.getAddress());
        return "success";
    }

    @ApiOperation(value="删除商家详细信息", notes="根据传过来的seller的id信息来删除商家对象")
    @ApiImplicitParam(name = "id", value = "商家ID", required = true, dataType = "Long", paramType = "path")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public String deleteSellerTable(@PathVariable Long id) {
        sellerTableService.deleteTableById(id);
        return "success";
    }

}