let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}
/*text animation*/
const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})

// swiper food section 

 var swiper = new Swiper(".Gateaux-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        700: {
            slidesPerView: 2,
          },
        1000: {
            slidesPerView: 3,
          },
    },
  });

  // swiper cakes section 
  var swiper = new Swiper(".food-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        700: {
            slidesPerView: 2,
          },
        1000: {
            slidesPerView: 3,
          },
    },
  });

 
  // swiper drinks section 
  var swiper = new Swiper(".drinks-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        700: {
            slidesPerView: 2,
          },
        1000: {
            slidesPerView: 3,
          },
    },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();