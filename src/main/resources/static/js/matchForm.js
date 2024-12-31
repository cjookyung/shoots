function populateTimeOptions() {
    var select = document.getElementById('MATCH_TIME');
    for (var hour = 9; hour < 24; hour++) {
        for (var minute of [0, 30]) {
            var hourFormatted = hour.toString().padStart(2, '0');
            var minuteFormatted = minute.toString().padStart(2, '0');
            var time = hourFormatted + ":" + minuteFormatted;

            var option = document.createElement('option');
            option.value = time;
            option.textContent = time;

            select.appendChild(option);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateTimeOptions();

    document.matchForm.onsubmit = function(event) {
        var playerMin = parseInt(document.getElementById('PLAYER_MIN').value);
        var playerMax = parseInt(document.getElementById('PLAYER_MAX').value);
        var price = parseInt(document.getElementById('PRICE').value);

        if (playerMin > playerMax) {
            alert('최소 인원은 최대 인원보다 클 수 없습니다.');
            event.preventDefault();
            return;
        }

        if (price % 1000 !== 0) {
            alert('가격은 1000원 단위로 입력해야 합니다.');
            event.preventDefault();
            return;
        }

        if (price > 50000) {
            alert('가격은 50,000원 이하로 설정해야 합니다.');
            event.preventDefault();
            return;
        }
    };

    $('.backBtn').click(function() {
        location.href = "../matchs/list";
    });
});