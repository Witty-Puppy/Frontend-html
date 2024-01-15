package com.wittypuppy.group.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GroupController {
    @GetMapping("/group")
    public String group(){
        return "group/group";
    }

    @GetMapping("groupchart")
    public String groupchart(){
        return "group/groupchart";
    }


}
