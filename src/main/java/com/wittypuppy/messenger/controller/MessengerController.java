package com.wittypuppy.messenger.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/messenger")
public class MessengerController {
    @GetMapping("")
    public String messengerIcon() {
        return "messenger/messenger_icon";
    }

    @GetMapping("/main")
    public String messengerMain() {
        return "messenger/messenger_main";
    }

    @GetMapping("/option")
    public String messengerOption() {
        return "messenger/messenger_option";
    }

    @GetMapping("/create")
    public String messengerCreate() {
        return "messenger/messenger_create";
    }

    @GetMapping("/chatroom")
    public String messengerChatRoom() {
        return "messenger/messenger_chatroom";
    }

    @GetMapping("/chatroom/option")
    public String messengerChatroomOption() {
        return "messenger/messenger_chatroom_option";
    }

    @GetMapping("/chatroom/invite")
    public String messengerChatroomInvite() {
        return "messenger/messenger_chatroom_invite";
    }
}
