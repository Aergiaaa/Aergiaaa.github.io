//toogle class active
const navbarNav= document.querySelector
('.navbar-nav');

//Hamburger start
//hamburger click
document.querySelector('#hamburger-menu')
.onclick= ()=> {
  navbarNav.classList.toggle('active');
};
//without hamburger click(close)
const hamburger= document.querySelector
('#hamburger-menu');
document.addEventListener('click', function(e){
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
//Hamburger end


