const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 80);
})

let menu = Document.querySelector('#menu-icon');
let navlist = Document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.about-text',{delay:300});

sr.reveal ('.review-contact, contact',{delay:300});
