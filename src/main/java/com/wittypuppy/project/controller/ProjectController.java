package com.wittypuppy.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/project")
public class ProjectController {
    @GetMapping("")
    public String projectMain() {
        return "project/project_main";
    }


}
