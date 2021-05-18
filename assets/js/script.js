// Selecting DOM Elements
const body = document.querySelector('body')
const scrollBtn = document.querySelector('.scroll__to__top')
const checkBtn = document.querySelector('.checkbox')
const label = document.querySelector('label')
const darkModeToggle = document.querySelector('label');

// Scroll To Top
document.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        scrollBtn.classList.add('active')
    }else if(window.scrollY < 150){
        scrollBtn.classList.remove('active')
    }
})

document.addEventListener('click',function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})


// Dark Mode

let darkMode = localStorage.getItem('darkMode'); 

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('dark');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}
  
const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('dark');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
  }
  
  // When someone clicks the button
  darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });
