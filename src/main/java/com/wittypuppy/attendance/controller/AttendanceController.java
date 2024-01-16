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

    @GetMapping("/payment-approval")
    public String paymentApproval(){
        return "attendance/approvalPayment";
    }

    @GetMapping("/payment-waiting")
    public String paymentWaiting(){
        return "attendance/waitingPayment";
    }

    @GetMapping("/payment-reject")
    public String paymentReject(){
        return "attendance/rejectPayment";
    }

    @GetMapping("/my-approval")
    public String myApplyApproval(){
        return "attendance/myApplyApproval";
    }

    @GetMapping("/my-waiting")
    public String myApplyWaiting(){
        return "attendance/myApplyWaiting";
    }

    @GetMapping("/my-reject")
    public String myApplyReject(){
        return "attendance/myApplyReject";
    }
}






