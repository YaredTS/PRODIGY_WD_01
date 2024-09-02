let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
 
 document.addEventListener('DOMContentLoaded',function (){
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const sections = document.querySelectorAll('section');
    const activeColor = '#fff';
    const activeBgColor = '#008148';
    const defaultColor = '#1e3932';
    const defaultBgColor = 'transparent';
  
    function setActiveLink() {
        let index = sections.length;
    
        while (--index && window.scrollY + 10 < sections[index].offsetTop) {}
    
        navLinks.forEach((link) => {
          link.style.color = defaultColor;
          link.style.backgroundColor = defaultBgColor;
          link.classList.remove('active');
        });
    
        navLinks[index].style.color = activeColor;
        navLinks[index].style.backgroundColor = activeBgColor;
        navLinks[index].classList.add('active');
      }
    
      setActiveLink(); // Set active link on initial load
    
      window.addEventListener('scroll', setActiveLink);  

          
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
          link.style.color = '#008148'; // Change color on hover
        });
    
        link.addEventListener('mouseout', function () {
          link.style.color ='#1e3932'; // Revert color when not hovering
        });
      });
 });

 