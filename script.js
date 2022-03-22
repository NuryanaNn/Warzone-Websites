window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});


var swiper = new Swiper(".mySwiper",{
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints:{
        1024:{
            slidesPerView:1,
        }
    }
});

var swiper = new Swiper(".games",{
        loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".sponsor",{
        loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".say",{
        loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Ul Hidden Navbar Function function
let droped2 = document.querySelector('.droped2');
let droped3 = document.querySelector('.droped3');
let droped4 = document.querySelector('.droped4');
let droped5 = document.querySelector('.droped5');
let navs = document.querySelector('.navigator');
let navs2 = document.querySelector('.navigator2');
let navs3 = document.querySelector('.navigator3');
let navs4 = document.querySelector('.navigator4');
let navs5 = document.querySelector('.navigator5');

droped2.addEventListener('click', function(){
    navs2.classList.toggle('active');
})

droped3.addEventListener('click', function(){
    navs3.classList.toggle('active');
})

droped4.addEventListener('click', function(){
    navs4.classList.toggle('active');
})

droped5.addEventListener('click', function(){
    navs5.classList.toggle('active');
})

droped2.onclick = () =>{
    droped2.classList.toggle('fa-chevron-up');
    if(droped2.classList.contains('fa-chevron-up')){
        document.querySelector('#droped2').classList.add('active');
    }else{
        document.querySelector('#droped2').classList.remove('active');
    }
}


droped3.onclick = () =>{
    droped3.classList.toggle('fa-chevron-up');
    if(droped3.classList.contains('fa-chevron-up')){
        document.querySelector('#droped3').classList.add('active');
    }else{
        document.querySelector('#droped3').classList.remove('active');
    }
}

droped4.onclick = () =>{
    droped4.classList.toggle('fa-chevron-up');
    if(droped4.classList.contains('fa-chevron-up')){
        document.querySelector('#droped4').classList.add('active');
    }else{
        document.querySelector('#droped4').classList.remove('active');
    }
}

droped5.onclick = () =>{
    droped5.classList.toggle('fa-chevron-up');
    if(droped5.classList.contains('fa-chevron-up')){
        document.querySelector('#droped5').classList.add('active');
    }else{
        document.querySelector('#droped5').classList.remove('active');
    }
}

// Hidden Navbar Function
let burger = document.querySelector('.burger');
let hiddenNav = document.querySelector('.hiddenNav');
let header = document.querySelector('header');

burger.addEventListener('click', function(){
    hiddenNav.classList.toggle('active');
    header.classList.toggle('active');
});

