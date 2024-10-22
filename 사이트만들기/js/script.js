addEventListener('load', function() {
  const menuIcon = document.querySelector('.menu-icon');
  

  menuIcon.addEventListener('click', function() {
    console.log("1")
    this.classList.toggle('active');
  });

  
  menuIcon.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
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