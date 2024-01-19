
//메일 쓰기, 내게 쓰기 버튼을 눌렀을 때 페이지 이동하는 거
const mailWrite = document.getElementById('mail-write-button');
const mailWriteForMe = document.getElementById('mail-write-button-to-me');

mailWrite.addEventListener('click',()=>{
    window.location.href='./sidemenu.html';
});
mailWriteForMe.addEventListener('click',()=>{
    window.location.href='./sidemenu.html';
});

//메일 함에 마우스 올리면 전체 행 글씨 굵게하는 거
document.querySelectorAll('tr td').forEach(td => {
    td.addEventListener('mouseover', function() {
        this.parentNode.classList.add('highlight');
    });

    td.addEventListener('mouseout', function() {
        this.parentNode.classList.remove('highlight');
    });
});

//메일 함 최 상단에 체크 박스 체크하면 전체 메일 체크되는 거
const selectAllCheckbox = document.getElementById('selectAll');
const checkboxes = document.querySelectorAll('.boardList tbody input[type="checkbox"]');

selectAllCheckbox.addEventListener('change', function() {
    const selectAllCheckbox = document.getElementById('selectAll');

    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});