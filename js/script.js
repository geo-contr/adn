// Swiper slider without click on img
// var isBreakPoint = function (bp) {
//     var bps = [320, 999, 3840],
//         w = $(window).width(),
//         min, max
//     for (var i = 0, l = bps.length; i < l; i++) {
//       if (bps[i] === bp) {
//         min = bps[i-1] || 0
//         max = bps[i]
//         break
//       }
//     }
//     return w > min && w <= max
// }


// if (isBreakPoint(3840)) { 
//     var swiper = new Swiper('.swiper', {
//         speed: 800,
//         freeMode: false,
//         slidesPerView: 'auto',
//         simulateTouch: false,
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'fraction',
//             renderFraction: function (currentClass, totalClass) {
//                 return '<span class="' + currentClass + '"></span>' +
//                     '<span class="separator">/</span>' +
//                     '<span class="' + totalClass + '"></span>';
//             },
//             formatFractionTotal: function (number) {
//                 // Subtract 1 from the total number of slides
//                 return number - 1;
//             },
//             formatFractionCurrent: function (number) {
//                 // Subtract 1 from the current slide index
//                 return number - 1;
//             },
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });

//     var slides = document.querySelectorAll('.swiper-slide');
//     var wrapper = document.querySelector('.swiper-wrapper');

//     swiper.on('slideChange', function () {
//         var activeIndex = swiper.activeIndex;
//         var transformValue = 'translateX(0)';

//         if (activeIndex === 1) {
//         transformValue = 'translateX(-60.33%)'; // Change this as needed
//       } else if (activeIndex === 2) {
//         transformValue = 'translateX(-160.66%)'; // Change this as needed
//       } else if (activeIndex === 3) {
//         transformValue = 'translateX(-260.66%)'; // Change this as needed
//       }

//       wrapper.style.transform = transformValue;

//       // Reset other slides
//       slides.forEach(function (slide, index) {
//         if (index !== activeIndex) {
//           slide.style.transform = 'translateX(0)';
//         }
//       });
//     });
   
// }; // Breakpoint between 1000 and 3840


// if (isBreakPoint(999)) { 
//     var swiper = new Swiper('.swiper', {
//         speed: 800,
//         freeMode: false,
//         slidesPerView: 'auto',
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'fraction',
//             renderFraction: function (currentClass, totalClass) {
//                 return '<span class="' + currentClass + '"></span>' +
//                     '<span class="separator">/</span>' +
//                     '<span class="' + totalClass + '"></span>';
//             },
//             formatFractionTotal: function (number) {
//                 // Subtract 1 from the total number of slides
//                 return number - 1;
//             },
//             formatFractionCurrent: function (number) {
//                 // Subtract 1 from the current slide index
//                 return number - 1;
//             },
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });

//     var slides = document.querySelectorAll('.swiper-slide');
//     var wrapper = document.querySelector('.swiper-wrapper');

//     swiper.on('slideChange', function () {
//         var activeIndex = swiper.activeIndex;
//         var transformValue = 'translateX(0)';

//         if (activeIndex === 1) {
//         transformValue = 'translateX(-95.33%)'; // Change this as needed
//       } else if (activeIndex === 2) {
//         transformValue = 'translateX(-195.66%)'; // Change this as needed
//       } else if (activeIndex === 3) {
//         transformValue = 'translateX(-295.66%)'; // Change this as needed
//       }

//       wrapper.style.transform = transformValue;

//       // Reset other slides
//       slides.forEach(function (slide, index) {
//         if (index !== activeIndex) {
//           slide.style.transform = 'translateX(0)';
//         }
//       });
//     });
    
// } // Breakpoint between 320 and 999
// End of Swiper slider without click on img


// Swiper slider with click on img
// Common function to set up the click-based slide control
function setupSlideClickNavigation(slides, swiper) {
    let isFirstClick = true; // Track if it's the first click

    slides.forEach(function(slide) {
        // Select the img element within each slide
        const slideImage = slide.querySelector('img');

        // Check if there's an img element to add the event listener to
        if (slideImage) {
            slideImage.addEventListener('click', function(event) {
                if (isFirstClick) {
                    // On the first click, always go to the next slide
                    swiper.slideNext();
                    isFirstClick = false; // Set the flag to false after the first click
                } else {
                    // Calculate the clicked position on the img element
                    const clickPosition = event.offsetX;
                    const imgWidth = slideImage.offsetWidth;

                    if (clickPosition < imgWidth / 2) {
                        // Clicked on the left side, go to the previous slide
                        swiper.slidePrev();
                    } else {
                        // Clicked on the right side, go to the next slide
                        swiper.slideNext();
                    }
                }
            });
        }
    });

    // Reset isFirstClick when slider returns to the initial slide
    swiper.on('slideChange', function () {
        if (swiper.activeIndex === 0) {
            isFirstClick = true;
        }
    });
}

// Your existing breakpoint detection and Swiper initialization code

var isBreakPoint = function (bp) {
    var bps = [320, 999, 3840],
        w = $(window).width(),
        min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
};

if (isBreakPoint(3840)) {
    var swiper = new Swiper('.swiper', {
        speed: 800,
        freeMode: false,
        slidesPerView: 'auto',
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="separator">/</span>' +
                    '<span class="' + totalClass + '"></span>';
            },
            formatFractionTotal: function (number) {
                return number - 1;
            },
            formatFractionCurrent: function (number) {
                return number - 1;
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var slides = document.querySelectorAll('.swiper-slide');
    setupSlideClickNavigation(slides, swiper);

    var wrapper = document.querySelector('.swiper-wrapper');
    swiper.on('slideChange', function () {
        var activeIndex = swiper.activeIndex;
        var transformValue = 'translateX(0)';

        if (activeIndex === 1) {
            transformValue = 'translateX(-60.33%)';
        } else if (activeIndex === 2) {
            transformValue = 'translateX(-160.66%)';
        } else if (activeIndex === 3) {
            transformValue = 'translateX(-260.66%)';
        }

        wrapper.style.transform = transformValue;

        slides.forEach(function (slide, index) {
            if (index !== activeIndex) {
                slide.style.transform = 'translateX(0)';
            }
        });
    });
}

if (isBreakPoint(999)) {
    var swiper = new Swiper('.swiper', {
        speed: 800,
        freeMode: false,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="separator">/</span>' +
                    '<span class="' + totalClass + '"></span>';
            },
            formatFractionTotal: function (number) {
                return number - 1;
            },
            formatFractionCurrent: function (number) {
                return number - 1;
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var slides = document.querySelectorAll('.swiper-slide');
    setupSlideClickNavigation(slides, swiper);

    var wrapper = document.querySelector('.swiper-wrapper');
    swiper.on('slideChange', function () {
        var activeIndex = swiper.activeIndex;
        var transformValue = 'translateX(0)';

        if (activeIndex === 1) {
            transformValue = 'translateX(-95.33%)';
        } else if (activeIndex === 2) {
            transformValue = 'translateX(-195.66%)';
        } else if (activeIndex === 3) {
            transformValue = 'translateX(-295.66%)';
        }

        wrapper.style.transform = transformValue;

        slides.forEach(function (slide, index) {
            if (index !== activeIndex) {
                slide.style.transform = 'translateX(0)';
            }
        });
    });
}
// End of Swiper slider with click on img





// var swiper = new Swiper('.swiper', {
//     speed: 800,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
          
// });


// var swiper = new Swiper('.swiper', {
//         pagination: {
//             el: '.swiper-pagination',
//                 type: 'fraction',
//                 renderFraction: function (currentClass, totalClass) {
//                     return '<span class="' + currentClass + '"></span>' +
//                         '<span class="separator">/</span>' +
//                         '<span class="' + totalClass + '"></span>';
//                 },
//                 formatFractionTotal: function (number) {
//                     // Subtract 1 from the total number of slides
//                     return number - 1;
//                 },
//                 formatFractionCurrent: function (number) {
//                     // Subtract 1 from the current slide index
//                     return number - 1;
//                 },
//         },
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//           speed: 800,
//           slidesPerView: 'auto', // Add this to make it responsive
//           initialSlide: 0, // Start from the last slide (adjust as needed)
// });







// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Get the elements
//     const swiperButton = document.querySelector(".swiper");
//     const bindingElement = document.querySelector(".binding");

//     // Add event listener for mouse entering (hovering)
//     swiperButton.addEventListener("mouseenter", function() {
//         // Add class when mouse enters
//         bindingElement.classList.add("ng-binding0");
//         bindingElement.classList.remove("binding");
//     });

//     // Add event listener for mouse leaving (hovering out)
//     // swiperButton.addEventListener("mouseleave", function() {
//     //     // Remove class when mouse leaves
//     //     bindingElement.classList.remove("ng-binding0");
//     // });
// });






// // // Function to remove the HTML tag
// // function removeElement() {
// //     var element = document.getElementById("body-img");
// //     var element1 = document.getElementById("logo-frontpage");
// //     element.parentNode.removeChild(element);
// //     element1.parentNode.removeChild(element1);
// // }

// // // Set a timeout to call the removeElement function after 5000 milliseconds (5 seconds)
// // setTimeout(removeElement, 3200);
// // // end of Function to remove the HTML tag

// // Function to remove the HTML tag with animation
// function removeElementWithAnimation() {
//   var element = document.getElementById("body-img");
//   var element1 = document.getElementById("logo-frontpage");

//   // Add the fade-out class to initiate the CSS transition
//   element.classList.add("fade-out");
//   element1.classList.add("fade-out");

//   // Set a timeout to remove the element after the transition ends
//   setTimeout(function() {
//     element.parentNode.removeChild(element);
//     element1.parentNode.removeChild(element1);
//   }, 0); // 1000ms (1 second) matches the transition duration
// }

// // Call the removeElementWithAnimation function after 3200 milliseconds (3.2 seconds)
// setTimeout(removeElementWithAnimation, 3200);

// // 3200


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



// filter
    // $(document).ready(function(){
    //     $('.filter-btn').click(function(){
    //         const value = $(this).attr('data-filter');
    //         if (value == 'all'){
    //             $('.itemBox').show();
    //         }
    //         else{
    //             $('.itemBox').not('.'+value).hide();
    //             $('.itemBox').filter('.'+value).show();
    //         }
    //     })
    //     $('.filter-btn').click(function(){
    //         $(this).addClass('active').siblings().removeClass('active');
    //     })
    // })


    $(document).ready(function(){
        $('.filter-btn').click(function(){
            const value = $(this).attr('data-filter');
            if (value == 'all'){
                $('.itemBox').fadeIn(0); // Use fadeIn for smoother transition
            } else {
                $('.itemBox').fadeOut(0, function() {
                    $('.itemBox').hide();
                    $('.itemBox.'+value).fadeIn(0); // Show only the filtered items
                });
            }
            $(this).addClass('active').siblings().removeClass('active');
        });
    });


    // $(document).ready(function(){
    //     $('.filter-btn').click(function(){
    //         const value = $(this).attr('data-filter');
    //         const container = $('.container-fluid');
    //         const scrollTop = container.scrollTop(); // Get current scroll position
            
    //         if (value == 'all'){
    //             $('.itemBox').fadeIn(0); // Use fadeIn for smoother transition
    //         } else {
    //             $('.itemBox').fadeOut(0, function() {
    //                 $('.itemBox').hide();
    //                 $('.itemBox.'+value).fadeIn(0); // Show only the filtered items
    //             });
    //         }
            
    //         // Maintain scroll position during animation
    //         container.css('padding-bottom', 1000); // Prevent scrolling
    //         setTimeout(function() {
    //             container.scrollTop(scrollTop); // Set scroll position back after animation
    //             container.css('padding-bottom', 0); // Allow scrolling again
    //         }, 1000); // Adjust this timeout to match the animation duration
            
    //         $(this).addClass('active').siblings().removeClass('active');
    //     });
    // });
// end of filter




const mediaQuery1 = window.matchMedia('(min-width: 1000px)')
if (mediaQuery1.matches) {


    $(".swiper-button-next").click(function(){
        $(".binding").removeClass("binding");
        $(".ng-bind").addClass("ng-binding0");
    });

    // // add/remove class on touch 
    // function myFunction(event) {
    //     $(".binding").removeClass("binding");
    //     $(".swiper-slide").addClass("opacity");
    // }


    // // add/remove class on hover
    // document.addEventListener("DOMContentLoaded", function() {
    //     // Get the elements
    //     const swiperButton = document.querySelector(".swiper-slide");

    //     // Delay the addition of event listener
    //     setTimeout(() => {
    //         // Add event listener for mouse entering (hovering)
    //         swiperButton.addEventListener("mouseenter", function() {
    //             // Get all elements with class "binding"
    //             const elements = document.querySelectorAll(".binding");

    //             // Loop through each element and remove the class
    //             elements.forEach(function(element) {
    //                 element.classList.remove("binding");
    //                 element.classList.add("ng-binding0");
    //             });
    //         });

    //         // Add event listener for mouse leaving (hovering out)
    //         // swiperButton.addEventListener("mouseleave", function() {
    //         //     // Get all elements with class "ng-binding0"
    //         //     const elements = document.querySelectorAll(".ng-binding0");

    //         //     // Loop through each element and remove the class
    //         //     elements.forEach(function(element) {
    //         //         element.classList.remove("ng-binding0");
    //         //         element.classList.add("binding");
    //         //     });
    //         // });
    //     }, 4000); // Delay in milliseconds (4 seconds)
    // });





    // // Function to remove the HTML tag
    // function removeElement() {
    //     var element = document.getElementById("body-img");
    //     var element1 = document.getElementById("logo-frontpage");
    //     element.parentNode.removeChild(element);
    //     element1.parentNode.removeChild(element1);
    // }

    // // Set a timeout to call the removeElement function after 5000 milliseconds (5 seconds)
    // setTimeout(removeElement, 3200);
    // // end of Function to remove the HTML tag

    // Function to remove the HTML tag with animation
    function removeElementWithAnimation() {
      var element = document.getElementById("body-img");
      var element1 = document.getElementById("logo-frontpage");

      // Add the fade-out class to initiate the CSS transition
      element.classList.add("fade-out");
      element1.classList.add("fade-out");

      // Set a timeout to remove the element after the transition ends
      setTimeout(function() {
        element.parentNode.removeChild(element);
        element1.parentNode.removeChild(element1);
      }, 0); // 1000ms (1 second) matches the transition duration
    }

    // Call the removeElementWithAnimation function after 3200 milliseconds (3.2 seconds)
    setTimeout(removeElementWithAnimation, 3200);

    // 3200



    // Function to add a class to an element
    function addClassAfterDelay() {
      // Get the element
      var element = document.getElementById("super-img_hover2");
      
      // Add a class after 2000 milliseconds (2 seconds)
      setTimeout(function() {
        element.classList.add("super-img_hover2_left");
      }, 4000);
    }

    // Call the function to add class after delay
    addClassAfterDelay();
}



const mediaQuery = window.matchMedia('(max-width: 999px)')
if (mediaQuery.matches) {

    // // Function to remove the HTML tag
    // function removeElement() {
    //     var element = document.getElementById("body-img");
    //     var element1 = document.getElementById("logo-frontpage");
    //     element.parentNode.removeChild(element);
    //     element1.parentNode.removeChild(element1);
    // }

    // // Set a timeout to call the removeElement function after 5000 milliseconds (5 seconds)
    // setTimeout(removeElement, 3200);
    // // end of Function to remove the HTML tag

    // Function to remove the HTML tag with animation
    function removeElementWithAnimation() {
      var element = document.getElementById("body-img");
      var element1 = document.getElementById("logo-frontpage");

      // Add the fade-out class to initiate the CSS transition
      element.classList.add("fade-out");
      element1.classList.add("fade-out");

      // Set a timeout to remove the element after the transition ends
      setTimeout(function() {
        element.parentNode.removeChild(element);
        element1.parentNode.removeChild(element1);
      }, 200); // 1000ms (1 second) matches the transition duration
    }

    // Call the removeElementWithAnimation function after 3200 milliseconds (3.2 seconds)
    setTimeout(removeElementWithAnimation, 3000);
    // setTimeout(removeElementWithAnimation, 4600);

    // 3200



    $(".filter_wrapper").click(function(){
        // $(".categories-list").toggleClass("categories-list_open");
        $(".categories-list").slideToggle(300);
    });


    // add/remove class on touch 
    // function myFunction(event) {
    //     $(".binding").removeClass("binding");
    //     $(".swiper-slide").addClass("opacity");
    // }
}







// $(function () { // wait for document ready
//     // init
//     var controller = new ScrollMagic.Controller();

//     // define movement of panels
//     var wipeAnimation = new TimelineMax()
//         // .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
//         .fromTo("div.panel.case-intro",    1, {x:  "-12%"}, {x: "-100.45%", ease: Linear.easeNone})  // in from right
//         // .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//             triggerElement: "#pinContainer",
//             triggerHook: "onLeave",
//             duration: "300%"
//         })
//         .setPin("#pinContainer")
//         .setTween(wipeAnimation)
//         // .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// });



      // $(".ng-binding").click(function(){
      //   $(".project-list").fadeToggle(0);
      // });

  // how to remove an HTML class at a specific time

// let element = document.getElementById("body-img");

// // show after 2 seconds
// // RECOMMENDATION: use window.setTimeout instead of setTimeout
// // NOTE: use a callback function, not an embedded named function

// window.setTimeout(function() {
//      element.classList.add("body-img");
// }, 2000);

// // hide after 3 seconds
// window.setTimeout(function() {
//      element.classList.remove("body-img");
// }, 2500);

// end of how to remove an HTML class at a specific time



// Search
// without totalResults

// $(document).ready(function() {
//     // Function to handle search
//     function handleSearch() {
//         var searchTerm = $('#searchInput').val().toLowerCase();
//         var $itemsToSearch = $('.news, .projects, .profile, .career, .archive, .people, .lasted-information, .related-news, .related-news-box, .discover, .cookSet, .cookPol, .featPro, .dacposter, .footer'); // Update this selector with the items you want to search through

//         $itemsToSearch.each(function() {
//             var $item = $(this);
//             var text = $item.text().toLowerCase();

//             if (text.includes(searchTerm)) {
//                 $item.show(); // Show the item if it matches
//             } else {
//                 $item.hide(); // Hide the item if it doesn't match
//             }
//         });

//         // Show "No results found" message if no items match
//         var $noResultsMessage = $('#noResultsMessage');
//         if ($itemsToSearch.filter(':visible').length === 0) {
//             $noResultsMessage.show();
//         } else {
//             $noResultsMessage.hide();
//         }
//     }

//     // Event listener for search input
//     $('#searchInput').on('input', function() {
//         handleSearch();
//     });

//     // Initial search on page load
//     handleSearch();
// });


// $(document).ready(function() {
//     // Function to handle search
//     function handleSearch() {
//         var searchTerm = $('#searchInput').val().toLowerCase();
//         var $itemsToSearch = $('.news, .projects, .profile, .career, .archive, .people, .lasted-information, .related-news, .related-news-box, .discover, .cookSet, .cookPol, .featPro, .dacposter, .footer'); // Update this selector with the items you want to search through

//         var totalResults = 0; // Variable to count total results

//         $itemsToSearch.each(function() {
//             var $item = $(this);
//             var text = $item.text().toLowerCase();

//             if (text.includes(searchTerm)) {
//                 $item.show(); // Show the item if it matches
//                 totalResults++; // Increment total results
//             } else {
//                 $item.hide(); // Hide the item if it doesn't match
//             }
//         });

//         // Show total results message only if there are results
//         var $totalResultsMessage = $('#totalResults');
//         if (searchTerm !== '') {
//             if (totalResults > 0) {
//                 $totalResultsMessage.text('Search results in total for "' + searchTerm + '": ' + totalResults).show();
//             } else {
//                 $totalResultsMessage.text('No results found for "' + searchTerm + '"').hide();
//             }
//         } else {
//             $totalResultsMessage.hide();
//         }

//         // Show "No results found" message if no items match
//         var $noResultsMessage = $('#noResultsMessage');
//         if (totalResults === 0 && searchTerm !== '') {
//             $noResultsMessage.show();
//         } else {
//             $noResultsMessage.hide();
//         }
//     }

//     // Event listener for search input
//     $('#searchInput').on('input', function() {
//         handleSearch();
//     });

//     // Initial search on page load
//     handleSearch();
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.querySelector(".search-item");
//     const searchResults = document.getElementById("searchResults");

//     // Event listener for input
//     searchInput.addEventListener("input", function() {
//         const searchTerm = searchInput.value.toLowerCase().trim();
//         displaySearchResults(searchTerm);
//     });

//     // Function to filter and display search results
//     function displaySearchResults(searchTerm) {
//         // Get all elements you want to search through
//         const itemsToSearch = document.querySelectorAll(".module-module_a, .module-module_b");

//         // Clear previous results
//         searchResults.innerHTML = "";

//         itemsToSearch.forEach(function(item) {
//             const title = item.querySelector("h2, h4");
//             const text = item.querySelector(".text");

//             if (title && text) {
//                 const titleText = title.textContent.toLowerCase();
//                 const contentText = text.textContent.toLowerCase();

//                 // Check if title or content contains search term
//                 if (titleText.includes(searchTerm) || contentText.includes(searchTerm)) {
//                     // Clone the item and append to results
//                     const clone = item.cloneNode(true);
//                     searchResults.appendChild(clone);
//                 }
//             }
//         });

//         // If no results found
//         if (searchResults.innerHTML === "") {
//             searchResults.innerHTML = "<p>No results found.</p>";
//         }
//     }
// });

// ამას ვიყენებ
// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.querySelector(".search-item");
//     const searchResults = document.getElementById("searchResults");
//     const wrapBtMenu = document.querySelector(".wrap-bt-menu");

//     // Event listener for input
//     searchInput.addEventListener("input", function() {
//         const searchTerm = searchInput.value.toLowerCase().trim();
//         displaySearchResults(searchTerm);
//     });

//     // Function to filter and display search results
//     function displaySearchResults(searchTerm) {
//         // Get all elements you want to search through
//         const itemsToSearch = document.querySelectorAll(".module-module_a, .module-module_b, .related-news1");

//         // Clear previous results
//         searchResults.innerHTML = "";

//         itemsToSearch.forEach(function(item) {
//             const title = item.querySelector("h2, h4");
//             const text = item.querySelector(".text, .text1");

//             if (title && text) {
//                 const titleText = title.textContent.toLowerCase();
//                 const contentText = text.textContent.toLowerCase();

//                 // Check if title or content contains search term
//                 if (titleText.includes(searchTerm) || contentText.includes(searchTerm)) {
//                     // Clone the item and append to results
//                     const clone = item.cloneNode(true);
//                     searchResults.appendChild(clone);
//                 }
//             }
//         });

//         // If no results found
//         if (searchResults.innerHTML === "") {
//             searchResults.innerHTML = "<p>No results found.</p>";
//         }
//     }

//     // Event listener to cancel search on wrap-bt-menu click
//     wrapBtMenu.addEventListener("click", function() {
//         cancelSearch();
//     });

//     // Event listener to cancel search on search cancel button (::-webkit-search-cancel-button) click
//     searchInput.addEventListener("search", function() {
//         // Check if search input is empty
//         if (!searchInput.value.trim()) {
//             cancelSearch();
//         }
//     });

//     // Function to cancel search
//     function cancelSearch() {
//         searchInput.value = ""; // Clear search input
//         searchResults.innerHTML = ""; // Clear search results
//     }
// });



    // // Function to perform search
    // function performSearch() {
    //     // Get the search query
    //     var query = document.getElementById("searchInput").value.toLowerCase().trim();
    //     var resultsContainer = document.getElementById("searchResults");
    //     resultsContainer.innerHTML = ""; // Clear previous results

    //     // Loop through all the elements with class "ng-binding" to find matches
    //     var elements = document.querySelectorAll(".inner-page, .bottom, .wrap-extra-main-menu, .main-block");
    //     var matchesFound = false;
    //     for (var i = 0; i < elements.length; i++) {
    //         var elementText = elements[i].innerText.toLowerCase();
    //         if (elementText.includes(query)) {
    //             // Create a new div for each match and append to results container
    //             var matchDiv = document.createElement("div");
    //             matchDiv.textContent = elements[i].textContent;
    //             resultsContainer.appendChild(matchDiv);
    //             matchesFound = true;
    //         }
    //     }

    //     // If no matches found, display a message
    //     if (!matchesFound) {
    //         var noResultsDiv = document.createElement("div");
    //         noResultsDiv.textContent = "No results found";
    //         resultsContainer.appendChild(noResultsDiv);
    //     }
    // }

    // // Handle form submission
    // document.getElementById("search-form").addEventListener("submit", function(event) {
    //     event.preventDefault(); // Prevent form submission
    //     performSearch(); // Call the search function
    // });



// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.getElementById("searchInput");
//     const searchResults = document.getElementById("searchResults");

//     searchInput.addEventListener("input", function (event) {
//         const searchText = event.target.value.toLowerCase();
//         const filteredResults = filterResults(searchText);

//         displayResults(filteredResults);
//     });

//     function filterResults(searchText) {
//         const allLinks = document.querySelectorAll(".inner-page a, .trtr");
//         const filteredLinks = Array.from(allLinks).filter((link) => {
//             return link.textContent.toLowerCase().includes(searchText);
//         });

//         return filteredLinks;
//     }

//     function displayResults(results) {
//         searchResults.innerHTML = "";

//         if (results.length === 0) {
//             searchResults.innerHTML = "<li>No results found.</li>";
//         } else {
//             results.forEach((result) => {
//                 const li = document.createElement("li");
//                 const a = document.createElement("a");
//                 a.textContent = result.textContent;
//                 a.href = result.href;
//                 li.appendChild(a);
//                 searchResults.appendChild(li);
//             });
//         }
//     }
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.querySelector(".search-item");
//   const searchResultsContainer = document.getElementById("searchResults");

//   // Function to perform search
//   function performSearch(searchTerm) {
//     // Get all elements where you want to search
//     const elementsToSearch = document.querySelectorAll(".searchable");

//     let results = [];

//     // Loop through each element
//     elementsToSearch.forEach((element) => {
//       const textContent = element.textContent.toLowerCase();
//       // Check if element's text content contains the search term
//       if (textContent.includes(searchTerm.toLowerCase())) {
//         results.push(element.innerHTML);
//       }
//     });

//     // Display search results
//     if (results.length > 0) {
//       searchResultsContainer.innerHTML = results.join("<hr>");
//     } else {
//       searchResultsContainer.innerHTML = "No results found.";
//     }
//   }

//   // Event listener for search input
//   searchInput.addEventListener("input", function (event) {
//     const searchTerm = event.target.value.trim();
//     if (searchTerm.length > 0) {
//       performSearch(searchTerm);
//     } else {
//       searchResultsContainer.innerHTML = ""; // Clear results if search term is empty
//     }
//   });
// });







// end of Search





