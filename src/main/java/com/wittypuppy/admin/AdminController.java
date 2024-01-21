package com.wittypuppy.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("admin-mail")
    public String showAdminMailWriter(){

        return "admin/admin_mail";
    }
    @GetMapping("/admin-mail/receive")
    public String showAdminMailReceive(){
        return "admin/admin_receive_mail";
    }
    @GetMapping("admin-approval")
    public String showAminApproval(){

        return "admin/admin_approval";
    }
    @GetMapping("admin-group")
    public String showAdminGroup(){

        return "admin/admin_group";
    }
    @GetMapping("admin-user-detail")
    public String showUserDetail(){

        return "admin/admin_user-detail";
    }
}
