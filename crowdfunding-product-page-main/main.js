let menuBtn = document.getElementById('menuBtn');
let menu = document.querySelector('.nav-links');
let menuImg = document.getElementById('hamburger');

let isMenu = false;

function openMenu(){
  isMenu = true;
  if (isMenu == true) {
    menu.style.display = 'block';
    menuImg.src = 'images/icon-close-menu.svg';
    
  }
}

menuBtn.onclick = function(){
  if(isMenu == false){
  openMenu();
}else{
    menu.style.display = 'none';
    menuImg.src = 'images/icon-hamburger.svg';
    isMenu = false;
  }
}
