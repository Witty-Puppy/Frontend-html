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

    @GetMapping("/finished_doc")
    public String finishedDoc() { return "approval/finished_doc";}
    @GetMapping("/doc_detail")
    public String docDetail() { return "approval/doc_detail";}
    @GetMapping("/recieved_doc_detail")
    public String recieved_DocDetail() { return "approval/recieved_doc_detail";}
    @GetMapping("/rejected_list")
    public String rejectedList() {
        return "approval/rejected_list";
    }
    @GetMapping("/retrieved_list")
    public String retrievedList() {
        return "approval/retrieved_list";
    }
    @GetMapping("/saved_list")
    public String savedList() {
        return "approval/saved_list";
    }
    @GetMapping("/approved_list")
    public String approvedList() {
        return "approval/approved_list";
    }
    @GetMapping("/represent_list")
    public String representList() {
        return "approval/represent_list";
    }
    @GetMapping("/view_list")
    public String viewList() {
        return "approval/view_list";
    }
}
