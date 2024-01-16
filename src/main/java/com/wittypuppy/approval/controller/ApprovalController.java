package com.wittypuppy.approval.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/approval")
public class ApprovalController {
    @GetMapping("/form")
    public String projectMain() {
        return "approval/on_leave_form";
    }

}
