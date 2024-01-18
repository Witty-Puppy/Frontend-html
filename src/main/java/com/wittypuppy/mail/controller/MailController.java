package com.wittypuppy.mail.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MailController {
    @GetMapping("/mail")
    public String showMailHome(){
        return "mail/mail";
    }
    @GetMapping("/mail-writer")
    public String showMailWriter(){
        return "mail/mail_writer";
    }
}
