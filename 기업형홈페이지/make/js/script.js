document.addEventListener('DOMContentLoaded', function () {
    const totalHolidays = Array(31).fill(0); // 각 날짜별 총 휴가자 수

    // 페이지 로드 시 날짜 헤더 자동 생성
    window.onload = function() {
        const dateHeader = document.getElementById('date-header');
        const totalRow = document.getElementById('total-row');

        // 현재 월과 연도를 기반으로 달력 생성
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // 0: 1월, 1: 2월, ...
        const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

        // 1일부터 31일까지 날짜와 요일 헤더 추가
        for (let i = 1; i <= 31; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const dayOfWeek = dayNames[date.getDay()]; // 요일 계산

            // 날짜 + 요일 형식으로 헤더 추가
            dateHeader.innerHTML += `<th>${monthNames[currentMonth]} ${i}일 (${dayOfWeek})</th>`;
            totalRow.innerHTML += `<td id="total-${i}">0</td>`;
        }
    }

    function addLeave() {
        const name = document.getElementById('name').value;
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);
        const leaveType = document.querySelector('input[name="leave-type"]:checked').value; // 연가 or 포상휴가 선택

        if (!name || isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate > endDate) {
            alert("유효한 이름과 날짜를 입력해주세요.");
            return;
        }

        // 새로운 사용자 행 생성
        const vacationBody = document.getElementById('vacation-body');
        let existingRow = document.getElementById(`row-${name}`);

        if (!existingRow) {
            existingRow = document.createElement('tr');
            existingRow.id = `row-${name}`;
            existingRow.innerHTML = `<td>${name}</td>`;
            for (let i = 1; i <= 31; i++) {
                existingRow.innerHTML += `<td id="day-${name}-${i}"></td>`;
            }
            vacationBody.appendChild(existingRow);
        }

        // 각 날짜 칸을 추가하며 휴가에 해당하는 날짜에 "연가" 또는 "포상" 표시
        for (let i = 1; i <= 31; i++) {
            const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), i);

            if (currentDate >= startDate && currentDate <= endDate) {
                const dayCell = document.getElementById(`day-${name}-${i}`);
                dayCell.innerText = leaveType === '연가' ? '연가' : '포상휴가';
                dayCell.style.backgroundColor = leaveType === '연가' ? '#FFD700' : '#87CEFA'; // 연가는 금색, 포상휴가는 파란색 배경
                
                // 총합에 1 추가
                totalHolidays[i - 1] += 1; 
                document.getElementById(`total-${i}`).innerText = totalHolidays[i - 1]; // 총합 업데이트
            }
        }
    }

    // 휴가 추가 버튼 이벤트 리스너 등록
    document.getElementById('add-leave-btn').addEventListener('click', addLeave);
});