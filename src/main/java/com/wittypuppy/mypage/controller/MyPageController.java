package com.wittypuppy.mypage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyPageController {

    @GetMapping("/mypage")
    public String mypage(){
        return "mypage/mypage";
    }

    @GetMapping("/mypagepassword")
    public String mypageInfo(){
        return "mypage/mypagePassword";
    }


    @GetMapping("/mypagevacation")
    public String mypagePassword(){
        return "mypage/mypageVacation";
    }


}
