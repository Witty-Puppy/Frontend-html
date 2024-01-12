document.addEventListener("DOMContentLoaded", () => {
    const statusImageMap = {
        "office": "/images/working_status/office.png",
        "remote": "/images/working_status/remote.png",
        "vacation": "/images/working_status/vacation.png",
        "meeting": "/images/working_status/meeting.png",
        "away": "/images/working_status/clock_545308.png"
    };

    const statusImage = document.getElementById("status_img");
    statusImage.style.display = 'none';
    const statusDropdown = document.getElementById('status_dropdown');

    statusDropdown.addEventListener('change', (e) => {
        const status = e.target.value;
        if (status === 'none') {
            statusImage.style.display = 'none';
        } else {
            statusImage.style.display = '';
            statusImage.src = statusImageMap[status];
        }
    })
})