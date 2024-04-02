
    // function splitScroll(){
    //   const controller = new ScrollMagic.Controller();

    //   new ScrollMagic.Scene({
    //     duration: "300%",
    //     triggerElement: '.setPin',
    //     triggerHook: 0
    //   })
    //   .setPin('.setPin')
    //   // .addIndicators()
    //   .addTo(controller);
    // }

    // splitScroll();



    // function splitScroll() {
    //     const controller = new ScrollMagic.Controller();

    //     // Calculate the height of the two columns
    //     const height = $('.right-content').height();

    //     // Set the duration to twice the height for both columns to reach the same height
    //     new ScrollMagic.Scene({
    //         duration: height / 1.37,
    //         triggerElement: '.setPin',
    //         triggerHook: 0
    //         // triggerHook: 'onLeave'
    //     })
    //     .setPin('.setPin')
    //     .addTo(controller);
    // }

    // splitScroll();



    var isBreakPoint = function (bp) {
    var bps = [999, 1280, 3840],
        w = $(window).width(),
        min, max
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0
        max = bps[i]
        break
      }
    }
    return w > min && w <= max
}

// ბიძგის გარეშე
if (isBreakPoint(1280)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the two columns
        const height = $('.right-content').height();

        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.348, // Duration will be the height of the container
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });
    }

    splitScroll();
}; // Breakpoint between 1000 and 1280

// ბიძგის გარეშე
if (isBreakPoint(3840)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the two columns
        const height = $('.right-content').height();

        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.372, // Duration will be the height of the container
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });
    }

    splitScroll();
} // Breakpoint between 1281 and 3840


