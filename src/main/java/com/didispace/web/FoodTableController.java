package com.didispace.web;

import com.didispace.domain.FoodTable;
import com.didispace.service.FoodTableServiceImpl;
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
@RequestMapping(value="/foodtable")
public class FoodTableController {

    @Autowired
    FoodTableServiceImpl foodTableService;

    @ApiOperation(value="获取食物列表", notes="")
    @RequestMapping(value={""}, method=RequestMethod.GET)
    public List<FoodTable> getFoodTableList() {
        List<FoodTable> r = foodTableService.getAllTableDatas();
        return r;
    }

    @ApiOperation(value="创建食物", notes="根据FoodTable对象创建食物")
    @ApiImplicitParam(name = "foodtable", value = "foodtable", required = true, dataType = "FoodTable")
    @RequestMapping(value="", method=RequestMethod.POST)
    public String postFoodTable(@RequestBody FoodTable foodtable) {
        foodTableService.createTable(foodtable.getFoodName(), foodtable.getFoodDetail(), foodtable.getFoodClass(), foodtable.getDate1(), foodtable.getDate2(), foodtable.getDelivery(), foodtable.getPackCost(), foodtable.getSendCost(), foodtable.getShopName(), foodtable.getShopAddress(), foodtable.getShopId());
        return "success";
    }

    @ApiOperation(value="更新食物详细信息", notes="根据传过来的foodtable的id信息来更新食物详细信息")
    @ApiImplicitParam(name = "foodtable", value = "食物详细实体foodtable", required = true, dataType = "FoodTable")
    @RequestMapping(value="", method=RequestMethod.PUT)
    public String putFoodTable( @RequestBody FoodTable foodtable) {
        foodTableService.updateFoodTable(foodtable.getId(), foodtable.getFoodName(), foodtable.getFoodDetail(), foodtable.getFoodClass(), foodtable.getDate1(), foodtable.getDate2(), foodtable.getDelivery(), foodtable.getPackCost(), foodtable.getSendCost(), foodtable.getShopName(), foodtable.getShopAddress(), foodtable.getShopId());
        return "success";
    }

    @ApiOperation(value="删除食物详细信息", notes="根据传过来的foodtable的id信息来删除食物对象")
    @ApiImplicitParam(name = "id", value = "食物ID", required = true, dataType = "Long", paramType = "path")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public String deleteFoodTable(@PathVariable Long id) {
        foodTableService.deleteTableById(id);
        return "success";
    }

}