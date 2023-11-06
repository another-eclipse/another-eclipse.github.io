
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
// const Swiper = new Swiper('.swiper', {
// autoplay: {
//   delay: 1000,
// },
// effect: 'fade',
// fadeEffect: {
//   crossFade: true
// },
// slideshow: true,
// loop: true,
// speed: 1000,
//   spaceBetween: 100
// });

// const Swiper = document.querySelector('.swiper').swiper;

function myFunction() {
    var empt = document.getElementById('result').innerHTML;
    if (empt !== null && empt !== "") {
        let idArray = document.getElementById("result-hidden").innerHTML;
    var lines = idArray.split("\n");
    var line = lines[Math.floor(Math.random()*(lines.length - 1))]
    if (line !== "" && line !== null){
     return document.getElementById("result").innerHTML = line;
    }
    }
    else{
        let message = "Please keep clicking, it scratches my back."
        return document.getElementById("result").innerHTML = message;
  }
  }

  jQuery(window).load(function() {
    jQuery.fn.lightspeedBox();
  });

  function dropDownFunction() {
    var x = document.getElementById('dropdown').style.display;
    
      document.getElementById('dropdown').style.display="flex";
      if(x == "flex"){
    
      document.getElementById('dropdown').style.display="none";
    }

  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }