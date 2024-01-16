package com.wittypuppy.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login(){

        return "login/login";
    }


    @GetMapping("/searchpwd")
    public String searchpwd(){

        return "login/searchpwd";
    }
}
