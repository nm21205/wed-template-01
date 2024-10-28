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


const count1 = document.getElementById("count1"); // 대상 섹션의 ID

window.onscroll = function () {
  const sectionTop = count1.offsetTop;
  const sectionHeight = count1.offsetHeight;

  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
    console.log("섹션에 도달했습니다!");
    // 여기서 원하는 동작 추가
  }
};
