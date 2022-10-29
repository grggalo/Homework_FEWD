document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburger").addEventListener("click", function () {
      document.querySelector(".navigation").classList.toggle("showNav");
    });
  });
/*  
$('.hamburger').on('click', function( e ){
    e.preventDefault();
    $('.navigation').toggleClass('showNav');
});*/