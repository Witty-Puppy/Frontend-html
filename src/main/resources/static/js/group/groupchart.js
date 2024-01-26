// 여기부터 그룹웨어 조직도 js
// ,'check_callback': true

const orgData = [
    { "id": "wittywave", "parent": "#", "text": "Witty Wave", "state": { "opened": true }, "type": "dept"  },

    { "id": "관리본부", "parent": "wittywave", "text": "관리본부", "type": "dept"  },
    { "id": "관리본부장", "parent": "관리본부", "text": "홍길동 관리본부장"},
    { "id": "총무팀", "parent": "관리본부", "text": "총무팀", "type": "dept"  },
    { "id": "총무팀장1", "parent": "총무팀", "text": "총무팀장1" },
    { "id": "총무팀원1", "parent": "총무팀", "text": "총무팀원1" },
    { "id": "총무팀원2", "parent": "총무팀", "text": "총무팀원2" },
    { "id": "회계팀", "parent": "관리본부", "text": "회계팀", "type": "dept"  },
    { "id": "회계팀장1", "parent": "회계팀", "text": "회계팀장1" },
    { "id": "회계팀원1", "parent": "회계팀", "text": "회계팀원1" },
    { "id": "회계팀원2", "parent": "회계팀", "text": "회계팀원2" },

    { "id": "영업본부", "parent": "wittywave", "text": "영업본부", "type": "dept"  },
    { "id": "영업본부장", "parent": "영업본부", "text": "홍길동 영업본부장" },
    { "id": "영업팀", "parent": "영업본부", "text": "영업팀", "type": "dept"  },
    { "id": "영업팀장1", "parent": "영업팀", "text": "영업팀장1" },
    { "id": "영업팀원1", "parent": "영업팀", "text": "영업팀원1" },
    { "id": "영업팀원2", "parent": "영업팀", "text": "영업팀원2" },

    { "id": "개발본부", "parent": "wittywave", "text": "개발본부", "type": "dept" },
    { "id": "개발본부장", "parent": "개발본부", "text": "차윤하 개발본부장"},
    { "id": "IT운영팀", "parent": "개발본부", "text": "IT운영팀", "type": "dept"  },
    { "id": "IT운영팀장1", "parent": "IT운영팀", "text": "IT운영팀장1" },
    { "id": "IT운영팀원1", "parent": "IT운영팀", "text": "IT운영팀원1" },
    { "id": "IT운영팀원2", "parent": "IT운영팀", "text": "IT운영팀원2" },
    { "id": "개발팀", "parent": "개발본부", "text": "개발팀", "type": "dept"  },
    { "id": "연인지팀장", "parent": "개발팀", "text": "연인지 팀장" },
    { "id": "이준경", "parent": "개발팀", "text": "이준경" },
    { "id": "서보혜", "parent": "개발팀", "text": "서보혜" },
    { "id": "김성민", "parent": "개발팀", "text": "김성민" },


    { "id": "마케팅본부", "parent": "wittywave", "text": "마케팅본부", "type": "dept"  },
    { "id": "마케팅본부장", "parent": "마케팅본부", "text": "정지섭 마케팅본부장" },
    { "id": "마케팅팀", "parent": "마케팅본부", "text": "마케팅팀", "type": "dept"  },
    { "id": "마케팅팀장1", "parent": "마케팅팀", "text": "마케팅팀장1" },
    { "id": "마케팅팀원1", "parent": "마케팅팀", "text": "마케팅팀원1" },
    { "id": "마케팅팀원2", "parent": "마케팅팀", "text": "마케팅팀원2" },
    { "id": "마케팅팀원3", "parent": "마케팅팀", "text": "마케팅팀원3" },
    { "id": "마케팅팀원4", "parent": "마케팅팀", "text": "마케팅팀원4" },

]

// jsTree 초기화
$('#org-chart').jstree({
    'core': {
        'data': orgData,
        'check_callback': true,
    },
    'plugins': ['types'],
    'types': {
        'default': {
            'icon': '/images/group/user.png' // 사람 아이콘 지정
        },
        'dept': {
            'icon': '/images/group/group.png' // 부서 아이콘 지정
        }
    }
});

// 텍스트 클릭 시 노드 열기
$('#org-chart').on('click', '.jstree-anchor', function () {
    var nodeId = $(this).parent().attr('id');
    $('#org-chart').jstree('toggle_node', nodeId);
});

