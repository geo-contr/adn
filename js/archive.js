// var swiper = new Swiper('.swiper', {
//     speed: 500,
//     freeMode: false,
//     initialSlide: 0,
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'fraction',
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         }
// });

// var swiper = new Swiper('.shenSwiper', {
//     speed: 500,
//     freeMode: false,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });
// var swiperFolies = new Swiper('.foliesSwiper', {
//     speed: 500,
//     freeMode: false,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });

// // Function to reset Swiper slider
// function shenSwiperReset() {
//     swiper.slideTo(0, 0); // Reset to first slide with speed 0
// }
// function foliesSwiperReset() {
//     swiperFolies.slideTo(0, 0); // Reset to first slide with speed 0
// }


// $(".project-shen").click(function(){
//     $(".module-gallery-shen").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
// });
// $(".project-folies").click(function(){
//     $(".module-gallery-folies").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
//     $(".module-gallery-shen").addClass("active-gallery");
// });
// $(".project-basque").click(function(){
//     $(".module-gallery-basque").addClass("active-gallery");
//     $(".module-gallery-folies").addClass("active-gallery");
//     $(".module-gallery-shen").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
// });
// $(".project-aarhus").click(function(){
//     $(".module-gallery-aarhus").addClass("active-gallery");
//     $(".module-gallery-basque").addClass("active-gallery");
//     $(".module-gallery-folies").addClass("active-gallery");
//     $(".module-gallery-shen").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
// });
// $(".close-gallery-btn").click(function(){
//     $(".module-gallery-shen, .module-gallery-folies, .module-gallery-basque, .module-gallery-aarhus").removeClass("active-gallery active-gallery-shen active-gallery-folies");
//     $("#AppWrapper").removeClass("page_pointer_none");
//     shenSwiperReset()
//     foliesSwiperReset()
// });


// $(".go-to-next-folies").click(function(){
//     $(".module-gallery-folies").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
//     shenSwiperReset()
//     foliesSwiperReset()
// });
// $(".go-to-next-basque").click(function(){
//     $(".module-gallery-basque").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
//     shenSwiperReset()
//     foliesSwiperReset()
// });
// $(".go-to-next-aarhus").click(function(){
//     $(".module-gallery-aarhus").addClass("active-gallery");
//     $("#AppWrapper").addClass("page_pointer_none");
//     shenSwiperReset()
//     foliesSwiperReset()
// });
// $(".go-to-prev-shen").click(function(){
//     $("#AppWrapper").addClass("page_pointer_none");
//     $(".module-gallery-shen").addClass("active-gallery-shen");
//     // $(".module-gallery-shen").removeClass("active-gallery");
//     $(".module-gallery-folies").removeClass("active-gallery");
//     $(".module-gallery-folies").removeClass("active-gallery-folies");
//     shenSwiperReset()
//     foliesSwiperReset()
// });
// $(".go-to-prev-folies").click(function(){
//     $("#AppWrapper").addClass("page_pointer_none");
//     $(".module-gallery-shen").addClass("active-gallery-shen");
//     $(".module-gallery-folies").addClass("active-gallery-folies");
//     // $(".module-gallery-folies").removeClass("active-gallery");
//     $(".module-gallery-shen").removeClass("active-gallery");
//     $(".module-gallery-basque").removeClass("active-gallery");
//     shenSwiperReset()
//     foliesSwiperReset()
// });
// $(".go-to-prev-basque").click(function(){
//     $("#AppWrapper").addClass("page_pointer_none");
//     $(".module-gallery-shen").addClass("active-gallery-shen");
//     $(".module-gallery-folies").addClass("active-gallery-folies");
//     $(".module-gallery-basque").addClass("active-gallery-folies");
//     // $(".module-gallery-folies").removeClass("active-gallery");
//     $(".module-gallery-shen").removeClass("active-gallery");
//     // $(".module-gallery-basque").removeClass("active-gallery");
//     $(".module-gallery-aarhus").removeClass("active-gallery");
//     shenSwiperReset()
//     foliesSwiperReset()
// });




var swiper = new Swiper('.shenSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperFolies = new Swiper('.foliesSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperBasque = new Swiper('.basqueSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperAarhus = new Swiper('.aarhusSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperCampus = new Swiper('.campusSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperMaersk = new Swiper('.maerskSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperMuseum = new Swiper('.museumSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperChurch = new Swiper('.churchSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperTrell = new Swiper('.trellSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var swiperNobel = new Swiper('.nobelSwiper', {
    speed: 500,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Function to reset Swiper slider
// function shenSwiperReset() {
//     swiper.slideTo(0, 0); // Reset to first slide with speed 0
// }
function shenSwiperReset() {
    setTimeout(function() {
        swiper.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function basqueSwiperReset() {
    setTimeout(function() {
        swiperBasque.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function foliesSwiperReset() {
    setTimeout(function() {
        swiperFolies.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function aarhusSwiperReset() {
    setTimeout(function() {
        swiperAarhus.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function campusSwiperReset() {
    setTimeout(function() {
        swiperCampus.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function maerskSwiperReset() {
    setTimeout(function() {
        swiperMaersk.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function churchSwiperReset() {
    setTimeout(function() {
        swiperChurch.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}
function nobelSwiperReset() {
    setTimeout(function() {
        swiperNobel.slideTo(0, 0); // Reset to first slide with speed 0
    }, 500); // Change 1000 to the desired delay in milliseconds (1 second in this case)
}

// function foliesSwiperReset() {
//     swiperFolies.slideTo(0, 0); // Reset to first slide with speed 0
// }





// Function to reset all galleries to their initial state
function resetGalleries() {
    $(".module-gallery-shen, .module-gallery-folies, .module-gallery-basque, .module-gallery-aarhus, .module-gallery-campus, .module-gallery-maersk, .module-gallery-museum, .module-gallery-church, .module-gallery-trell, .module-gallery-nobel, .swiper-overlay").removeClass("active-gallery active-gallery-shen active-gallery-folies active");
    $("#AppWrapper").removeClass("page_pointer_none");
}

$(".project-shen").click(function(){
    resetGalleries();
    $(".module-gallery-shen").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});

$(".project-folies").click(function(){
    resetGalleries();
    $(".module-gallery-folies").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});

$(".project-basque").click(function(){
    resetGalleries();
    $(".module-gallery-basque").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});

$(".project-aarhus").click(function(){
    resetGalleries();
    $(".module-gallery-aarhus").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-campus").click(function(){
    resetGalleries();
    $(".module-gallery-campus").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-maersk").click(function(){
    resetGalleries();
    $(".module-gallery-maersk").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-museum").click(function(){
    resetGalleries();
    $(".module-gallery-museum").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-church").click(function(){
    resetGalleries();
    $(".module-gallery-church").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-trell").click(function(){
    resetGalleries();
    $(".module-gallery-trell").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});
$(".project-nobel").click(function(){
    resetGalleries();
    $(".module-gallery-nobel").addClass("active-gallery");
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
});

$(".close-gallery-btn").click(function(){
    resetGalleries();
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
});

$(".go-to-next-folies").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-folies").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});

$(".go-to-next-basque").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-basque").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});

$(".go-to-next-aarhus").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-aarhus").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-campus").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-campus").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-maersk").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-maersk").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-museum").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-museum").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-church").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-church").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-trell").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-trell").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-next-nobel").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-nobel").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});

$(".go-to-prev-shen").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-shen").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});

$(".go-to-prev-folies").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-folies").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});

$(".go-to-prev-basque").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-basque").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-aarhus").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-aarhus").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-campus").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-campus").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-maersk").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-maersk").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-museum").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-museum").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-church").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-church").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});
$(".go-to-prev-trell").click(function(){
    resetGalleries();
    $("#AppWrapper").addClass("page_pointer_none");
    $(".swiper-overlay").addClass("active");
    shenSwiperReset()
    foliesSwiperReset()
    basqueSwiperReset()
    aarhusSwiperReset()
    campusSwiperReset()
    maerskSwiperReset()
    churchSwiperReset()
    nobelSwiperReset()
    setTimeout(function() {
        $(".module-gallery-trell").addClass("active-gallery");
    }, 500); // Adjust the delay as needed
});








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
