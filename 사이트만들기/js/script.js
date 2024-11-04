addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const hide = document.querySelector('.hide');
  const start = this.document.querySelector('.start')

  menuIcon.addEventListener('click', function() {
    console.log("1")
    this.classList.toggle('active');
    hide.classList.toggle('active');

  });


  hide.addEventListener('mouseleave', function() {
    hide.classList.remove('active'); });
  
  menuIcon.addEventListener('mouseleave', function() {
    this.classList.remove('active');

    
  
  });
  
  addEventListener("scroll", (e) => {
    let wsY = window.scrollY;
    console.log(wsY)
    const menu = document.querySelector('.menu');
    if(wsY >= 100){
      menu.style.top = "-100%";
    }else{
      menu.style.top = "0%";
    }
  })
  
  
  
  let count = 0;
  function updateRotation() {
    const carrousel = document.querySelector(".content-carrousel");
    //캐러셀의 rotatey값을 COUNT값으로 설정
    carrousel.style.transform = `rotateY(${count}deg)`;
  }
  
  //1초에 60번 COUNT를 0.2만큼 증가시키고, updateRotation함수를 호출하여 회전을 업데이트하는 타이머를 설정
  let timer = setInterval(() => {
    count += 0.2;
    updateRotation();
  }, 1000 / 60);
  
  const slideshow = document.querySelector(".slideshow");
  
  slideshow.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });
  
  slideshow.addEventListener("mouseleave", () => {
    
    timer = setInterval(() => {
      count += 0.2;
      updateRotation();
    }, 1000 / 60);
  });
  
  //왼쪽 화살표 버튼 클릭시
  document.querySelector('.right-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    //카운트를 가장 가까운 40의 배수로 반올림한 후 40일 더하고 업데이트로테이션함수를 호출하여 회전을 업데이트 합니다?
    count = Math.round(count /40) * 40 + 40;
    updateRotation();
  })
  
  //오른쪽 화살표 버튼 클릭시
  document.querySelector('.left-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    //카운트를 가장 가까운 40의 배수로 반올림한 후 40을 빼고 업데이트로테이션함수를 호출하여 회전을 업데이트 합니다?
    count = Math.round(count /40) * 40 - 40;
    updateRotation();
  })
  
  
  



  
  
});


const count1 = document.getElementById("count1"); // 대상 섹션의 ID

window.onscroll = function () {
  if (count1) { // count1 요소가 존재할 때만 offsetTop과 offsetHeight을 사용
    const sectionTop = count1.offsetTop;
    const sectionHeight = count1.offsetHeight;

    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      console.log("섹션에 도달했습니다!");
      // 여기서 원하는 동작 추가
    }
  } else {
    console.log("섹션에도달했습니다.");
  }
};


addEventListener('load', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const hide = document.querySelector('.hide');
  const start = this.document.querySelector('.start')

  menuIcon.addEventListener('click', function() {
    console.log("1")
    this.classList.toggle('active');
    hide.classList.toggle('active');

  });


  hide.addEventListener('mouseleave', function() {
    hide.classList.remove('active'); });
 
  menuIcon.addEventListener('mouseleave', function() {
    this.classList.remove('active');

   
 
  });
 
  addEventListener("scroll", (e) => {
    let wsY = window.scrollY;
    console.log(wsY)
    const menu = document.querySelector('.menu');
    if(wsY >= 100){
      menu.style.top = "-100%";
    }else{
      menu.style.top = "0%";
    }
  })
 
 
 
  let count = 0;
  function updateRotation() {
    const carrousel = document.querySelector(".content-carrousel");
    //캐러셀의 rotatey값을 COUNT값으로 설정
    carrousel.style.transform = `rotateY(${count}deg)`;
  }
 
  //1초에 60번 COUNT를 0.2만큼 증가시키고, updateRotation함수를 호출하여 회전을 업데이트하는 타이머를 설정
  let timer = setInterval(() => {
    count += 0.2;
    updateRotation();
  }, 1000 / 60);
 
  const slideshow = document.querySelector(".slideshow");
 
  slideshow.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });
 
  slideshow.addEventListener("mouseleave", () => {
   
    timer = setInterval(() => {
      count += 0.2;
      updateRotation();
    }, 1000 / 60);
  });
 
  //왼쪽 화살표 버튼 클릭시
  document.querySelector('.right-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    //카운트를 가장 가까운 40의 배수로 반올림한 후 40일 더하고 업데이트로테이션함수를 호출하여 회전을 업데이트 합니다?
    count = Math.round(count /40) * 40 + 40;
    updateRotation();
  })
 
  //오른쪽 화살표 버튼 클릭시
  document.querySelector('.left-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    //카운트를 가장 가까운 40의 배수로 반올림한 후 40을 빼고 업데이트로테이션함수를 호출하여 회전을 업데이트 합니다?
    count = Math.round(count /40) * 40 - 40;
    updateRotation();
  })
 
});



addEventListener('DOMContentLoaded', () => {

  let count1Completed = false; // count1이 완료되었는지 확인하는 플래그
  let count2Completed = false; // count2이 완료되었는지 확인하는 플래그

  // 스크롤 이벤트 리스너 추가
  addEventListener("scroll", () => {
    let wsY = window.scrollY;
    console.log(wsY); // 현재 스크롤 위치 확인용

    // 특정 스크롤 위치 이상일 때 카운트 애니메이션 실행
    if (wsY >= 1600) {

      // count1 카운트 애니메이션 (한 번만 실행)
      if (!count1Completed) { // 플래그가 false일 때만 실행
        const countElement1 = document.getElementById('count1');
        const targetCount1 = parseInt(countElement1.getAttribute('count-data1'));
        let currentCount1 = 0;

        const counter1 = setInterval(() => {
          currentCount1++;
          countElement1.textContent = currentCount1;

          if (currentCount1 >= targetCount1) {
            clearInterval(counter1); // 목표 값에 도달하면 중지
            count1Completed = true; // 플래그를 true로 설정해 다시 실행되지 않도록 함
          }
        }, 35); // 35ms 간격
      }

      // count2 카운트 애니메이션 (한 번만 실행)
      if (!count2Completed) { // 플래그가 false일 때만 실행
        const countElement2 = document.getElementById('count2');
        const targetCount2 = parseInt(countElement2.getAttribute('count-data2'));
        let currentCount2 = 0;

        const counter2 = setInterval(() => {
          currentCount2++;
          countElement2.textContent = currentCount2;

          if (currentCount2 >= targetCount2) {
            clearInterval(counter2); // 목표 값에 도달하면 중지
            count2Completed = true; // 플래그를 true로 설정해 다시 실행되지 않도록 함
          }
        }, 17); // 10ms 간격
      }
    }
  });
});





gsap.to(".canvas1", {
  scrollTrigger: {
    trigger: ".canvas1", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,
    markers: true
  },
  y: -10, // Y축으로 10px 위로 이동
  opacity: 1, // opacity 1로 변경
  duration: 0.5 // 애니메이션의 지속 시간 1초
});

gsap.to(".canvas2", {
  scrollTrigger: {
    trigger: ".canvas2", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,
    markers: true
  },
  y: -10, // Y축으로 10px 위로 이동
  opacity: 1, // opacity 1로 변경
  duration: 0.5 // 애니메이션의 지속 시간 1초
});
gsap.to(".canvas3", {
  scrollTrigger: {
    trigger: ".canvas3", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,
    markers: true
  },
  y: -10, // Y축으로 10px 위로 이동
  opacity: 1, // opacity 1로 변경
  duration: 0.5 // 애니메이션의 지속 시간 1초
});