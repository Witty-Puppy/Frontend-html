package com.wittypuppy.mainpage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainPageController {

    @GetMapping("/mainpage")
    public String mainpae(){
        return "mainpage/mainpage";
    }




}
