package com.wittypuppy.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/attend")
public class AttendanceController {

    @GetMapping("/commute-main")
    public String commuteMain(){
        return "attendance/commuteMain";
    }


    @GetMapping("/commute-list")
    public String commuteList(){ return "attendance/commuteList";}
}






