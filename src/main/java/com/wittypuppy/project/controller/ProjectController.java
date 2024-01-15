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

    @GetMapping("/create")
    public String projectCreate() {
        return "project/project_create";
    }

    @GetMapping("/boards")
    public String projectBoard() {
        // 이 부분에 오른쪽 마우스 버튼 모달 기능도 추가되도록.
        return "project/project_boards";
    }

    @GetMapping("/boards/invite")
    public String projectBoardInvite() {
        return "project/project_boards_invite";
    }

    @GetMapping("/boards/detail")
    public String projectBoardDetail() {
        return "project/project_boards_detail";
    }

    @GetMapping("/boards/detail/invite")
    public String projectBoardDetailInvite() {
        return "project/project_boards_detail_invite";
    }
}
