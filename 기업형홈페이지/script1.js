document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll(".bo");
  const overlay = document.querySelector('.overlay');
  
  boxes.forEach((bo, idx) => {
    bo.addEventListener('mouseover', (event) => {
      const boRect = bo.getBoundingClientRect(); // .bo 요소의 화면상 위치와 크기 정보 가져오기
      overlay.style.opacity = 1;
      overlay.style.width = `${boRect.width}px`; // .bo 요소에 맞게 overlay 크기 조정
      overlay.style.height = `${boRect.height}px`;
      overlay.style.transform = `translateX(${boRect.left}px)`; // 마우스 위치에 맞춰 overlay 이동
    });
    bo.addEventListener('mouseout', () => {
      overlay.style.opacity = 0;
      overlay.style.transform = "translateX(0px)"; // 기본 위치로 돌아가게 설정
    });
  });



  
});