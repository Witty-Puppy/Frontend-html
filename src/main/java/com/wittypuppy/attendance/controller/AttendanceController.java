package com.wittypuppy.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/attend")
public class AttendanceController {

    @GetMapping("/commute-main")
    public String commuteMain(){
        return "attendance/commute-main";
    }


    @GetMapping("/commute-list")
    public String commuteList(){ return "attendance/commute-list";}

    @GetMapping("/payment-approval")
    public String paymentApproval(){
        return "attendance/payment-approval";
    }

    @GetMapping("/payment-waiting")
    public String paymentWaiting(){
        return "attendance/payment-waiting";
    }

    @GetMapping("/payment-reject")
    public String paymentReject(){
        return "attendance/payment-reject";
    }

    @GetMapping("/my-approval")
    public String myApplyApproval(){
        return "attendance/my-approval";
    }

    @GetMapping("/my-waiting")
    public String myApplyWaiting(){
        return "attendance/my-waiting";
    }

    @GetMapping("/my-reject")
    public String myApplyReject(){
        return "attendance/my-reject";
    }

    @GetMapping("/team-commute-list")
    public String teamCommuteList(){
        return "attendance/team-commute-list";
    }
}






