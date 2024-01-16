document.addEventListener('DOMContentLoaded', function () {
    // Inbox
    var inboxTitleSection = document.querySelector('.inbox_title_section');
    var inboxMenuSection = document.querySelector('.inbox_menu_section');
    var inboxDropDownImg = inboxTitleSection.querySelector('.inbox_drop_down');
  
    inboxTitleSection.addEventListener('click', function () {
      inboxMenuSection.classList.toggle('collapsed');
      this.classList.toggle('clicked');
      inboxDropDownImg.src = this.classList.contains('clicked') ? '/images/approval/dropdown.png' : '/images/approval/opened_dropdown.png';
  
      // Inbox Section의 높이를 부드럽게 조절
      var inboxSection = document.querySelector('.inbox')
      inboxMenuSection.style.transition = 'height 0.3s ease-in-out';
      inboxMenuSection.style.height = this.classList.contains('clicked') ? '0px' : '300px';
      inboxSection.style.transition = 'height 0.3s ease-in-out';
      inboxSection.style.height = this.classList.contains('clicked') ? '45px' : '345px';
    });
  
    // Outbox
    var outboxTitleSection = document.querySelector('.outbox_title_section');
    var outboxMenuSection = document.querySelector('.outbox_menu_section');
    var outboxDropDownImg = outboxTitleSection.querySelector('.outbox_drop_down');
    
    outboxTitleSection.addEventListener('click', function () {
      outboxMenuSection.classList.toggle('collapsed');
      this.classList.toggle('clicked');
      outboxDropDownImg.src = this.classList.contains('clicked') ? '/images/approval/dropdown.png' : '/images/approval/opened_dropdown.png';
    
      // Outbox Section의 높이를 부드럽게 조절
      var outboxSection = document.querySelector('.outbox')
      outboxMenuSection.style.transition = 'height 0.3s ease-in-out';
      outboxMenuSection.style.height = this.classList.contains('clicked') ? '0px' : '180px';
      outboxSection.style.transition = 'height 0.3s ease-in-out';
      outboxSection.style.height = this.classList.contains('clicked') ? '45px' : '225px';
    });
    
  
    // View
    var viewTitleSection = document.querySelector('.view_title_section');
    var viewMenuSection = document.querySelector('.view_menu_section');
    var viewDropDownImg = viewTitleSection.querySelector('.view_drop_down');
  
    viewTitleSection.addEventListener('click', function () {
      viewMenuSection.classList.toggle('collapsed');
      this.classList.toggle('clicked');
      viewDropDownImg.src = this.classList.contains('clicked') ? '/images/approval/dropdown.png' : '/images/approval/opened_dropdown.png';
  
      // View Section의 높이를 부드럽게 조절
      var viewSection = document.querySelector('.view')
      viewMenuSection.style.transition = 'height 0.3s ease-in-out';
      viewMenuSection.style.height = this.classList.contains('clicked') ? '0px' : '60px';
      viewSection.style.transition = 'height 0.3s ease-in-out';
      viewSection.style.height = this.classList.contains('clicked') ? '45px' : '115px';
    });
  });
  