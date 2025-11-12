// Rolagem suave + animação simples no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 50 ? '#fff' : 'transparent';
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
        0:{ items:1 },
        768:{ items:2 }
      }
    });
  });
  