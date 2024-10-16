//로딩에서 화면으로 이동
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

//문서가 전부 load되면 구문 실행
addEventListener('load', () => {
  //로딩 중(회색 스크린) : 서서히 사라짐
  loadingAreaGrey.animate(
    {
      //동작
      opacity: [1, 0],
      visibility: 'hidden'
    },
    {
      //옵션
      duration:2000,
      delay:1200,
      easing: 'ease',
      fill: 'forwards'
    }
  );

  //로딩 중(연녹색 스크린) : 아래에서 위로 이동
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards'
    }
  )

  //로딩 중 텍스트(offset으로 타이밍 조정)
  //duration이 80% 될때까지 opacity가 1이고 80%~100%까지 opacity가 0으로 변경
  loadingText.animate(
    [
      {
        opacity:1,
        offset:.8 //80%
      },
      {
        opacity:0,
        offset:1 //100%
      }
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards'
    }
  )
})

//섬네일 이미지에 커서를 올리면 큰 이미지가 나타나는 애니메이션
//이미지 갤러리
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
//썸네일 이미지에 mouseover이벤트 리스너 추가
thumbImages.forEach(thumbImage => thumbImage.addEventListener('mouseover', (e) => {
  //메인 이미지의 src속성을 이벤트가 발생된 요소의 src속성값으로 적용
  mainImage.src = e.target.src;
  //메인 이미지의 opacity를 0에서 1로 0.5초동안 변경
  mainImage.animate({opacity:[0, 1]}, 500);
}))

//슬라이드 메뉴
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');

//애니메이션 옵션 설정
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards'
}

//메뉴 열기
menuOpen.addEventListener('click', () => {
  //화면 오른쪽 밖에서 화면 안쪽으로 패널을 이동
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions)

  //링크를 하나씩 순서대로 표시
  menuItems.forEach((menuItem, idx) => menuItem.animate(
    {
      opacity:[0, 1],
      translate:['2rem', 0]
    },
    {
      duration: 2400,
      delay: 300*idx, //인덱스를 가져와서 순서대로 딜레이를 따로 설정
      easing: 'ease',
      fill: 'forwards'
    }
  ))
})

//메뉴 닫기
menuClose.addEventListener('click', () => {
  //메뉴 패널을 오른쪽 밖으로 이동시킴
  menuPanel.animate({translate:[0, '100vw']}, menuOptions);
  //메뉴 리스트는 한번에 동시에 서서히 사라지게함
  menuItems.forEach(menuItem => menuItem.animate({opacity:[1,0]}, menuOptions))
})