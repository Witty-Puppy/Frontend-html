package com.wittypuppy.approval.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/approval")
public class ApprovalController {
    @GetMapping("/form")
    public String formList() {
        return "approval/form_list";
    }
    @GetMapping("/on_leave_form")
    public String onLeaveForm() {
        return "approval/on_leave_form";
    }
    @GetMapping("/overtime_form")
    public String overtimeForm() {
        return "approval/overtime_form";
    }
    @GetMapping("/away_form")
    public String awayForm() {
        return "approval/away_form";
    }
    @GetMapping("/business_trip_form")
    public String businessTripForm() {
        return "approval/business_trip_form";
    }
    @GetMapping("/wfh_form")
    public String wfhForm() {
        return "approval/wfh_form";
    }
    @GetMapping("/sw_form")
    public String swForm() {
        return "approval/sw_form";
    }

    @GetMapping("/writing")
    public String approvalWriting() {
        return "approval/writing_doc";
    }

    @GetMapping("/awaiting_list")
    public String awaitingList() {
        return "approval/awaiting_list";
    }

    @GetMapping("/on_process_list")
    public String onProcessList() { return "approval/on_process_list";}
}
