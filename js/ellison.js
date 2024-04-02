// $(document).ready(function(){

// });


var swiper = new Swiper('.swiper', {
    // slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 2000,
    freeMode: true,
    slidesPerView: 1,
    slidesPerGroup: 4,
    // simulateTouch: false
});

var swiper1 = new Swiper('.swiper1', {
    // slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    speed: 3000,
    freeMode: true,
    slidesPerView: 1,
    slidesPerGroup: 5,
    // simulateTouch: false
});



// lightGallery(document.querySelector('.gallery'));




  $(".wrap-bt-menu").click(function(){
    $(".menu").toggleClass("menu-open");
    $(".search-wrapper").toggleClass("search-open");
    $(".menu__wrapper").toggleClass("menu__wrapper-open");
    $(".wrap-extra-main-menu").toggleClass("wrap-extra-main-menu-open");
    $(".overlay-menu").toggleClass("overlay-menu-open");
    $(".icon-menu").toggleClass("icon-menu-close");
    $(".nav").toggleClass("nav-border");
    $(".bottom").toggleClass("bottom-show");
    $("body").toggleClass("body-overflow");
  });

  $(".overlay-menu").click(function(){
    $(".menu-open, .overlay-menu, .wrap-extra-main-menu, .search-wrapper, .menu__wrapper, .icon-menu, body, .nav, .bottom").removeClass("menu-open overlay-menu-open wrap-extra-main-menu-open menu__wrapper-open icon-menu-close body-overflow search-open nav-border bottom-show");
  });




  var navigation = $(".trigger-container").height();
    $('a[href^="#trigger-icon').on("click", function(){
        var clickedElementAttrName = $(this).attr("href");
        var seciton = $(clickedElementAttrName);
        var scroToTop = seciton.offset().top - navigation;
        console.log(scroToTop, navigation);
        $("html,body").animate({
            scrollTop:scroToTop
        }, 500)
    });


baguetteBox.run(".galerea", {
    noScrollbars: false,
    buttons: true
});


const mediaQuery = window.matchMedia('(min-width: 1000px)')
if (mediaQuery.matches) {

    $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller();

        // define movement of panels
        var wipeAnimation = new TimelineMax()
            // .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
            .fromTo("div.panel.case-intro",    1, {x:  "-216px"}, {x: "-100%", ease: Linear.easeNone})  // in from right
            // .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

        // create scene to pin and link animation
        new ScrollMagic.Scene({
                triggerElement: "#pinContainer",
                triggerHook: "onLeave",
                duration: "300%"
            })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    });

}




// text-type animation
const text = "Bridging the gap between research and industry"; // Text to be animated
let index = 0; // Starting index of the text

function typeWriter() {
    // Append the next character to the text
    document.getElementById('typewriter').textContent += text.charAt(index);
    index++;

    // Check if all characters have been appended
    if (index < text.length) {
      // Schedule the next character to be appended after a short delay
      setTimeout(typeWriter, 60); // Adjust typing speed by changing the delay (in milliseconds)
    }
}

// Start the typewriter animation when the page loads
// window.onload = function() {
// typeWriter();
// };

// Delay the start of the typewriter animation by 4-5 seconds
  setTimeout(typeWriter, 5000); // Adjust delay time in milliseconds

// end of text-type animation

