package com.didispace.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.annotations.ApiIgnore;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
@Controller
public class HelloController {

    @ApiIgnore
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello() {
        return "Hello World";
    }

    @RequestMapping("/aaa")
    public String test() {
     //   map.addAttribute("host", "http://blog.didispace.com");
        return "test";
    }

    @RequestMapping("/bbb")
    public String index() {
        //   map.addAttribute("host", "http://blog.didispace.com");
        return "index";
    }

}