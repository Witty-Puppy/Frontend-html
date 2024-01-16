package com.wittypuppy.messenger.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/messenger")
public class MessengerController {
    @GetMapping("")
    public String messengerMain() {
        return "messenger/messenger_main";
    }
}
