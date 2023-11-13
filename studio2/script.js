window.addEventListener('load', function () {

    'use strict';

    let pageTop;
    const bodyTag = document.querySelector('body');
    const hydrangeas = document.querySelector('#hydrangeas');
    const camera = document.querySelector('#camera');

    // gets the width of the window
    const pageWidth = window.innerWidth;
    const pageHeight = document.querySelector('#long-div').offsetHeight;

    //sets the maximum size for the camera
    const maxSize = pageWidth / 2;

    // as user scrolls, camera gets larger, but stops at max size
    window.addEventListener('scroll', function() {
        pageTop = window.scrollY;

        const ratio = (pageTop / 100) + 1;

        if(pageTop < maxSize) {
            camera.style.transform = `scale(${ratio}, ${ratio})`;
        }

    });

    // when user reaches certain length down the page, background color switches from white to black and vice versa
    // image src switches from camera to image of hydrangeas after reaching max size
    // image is removed after page turns white
    window.addEventListener('scroll', function() {

        pageTop = window.pageYOffset;

        switch(true) {
            case pageTop < 300:
                camera.setAttribute('src', 'images/camera.png');
                break;

            case pageTop < 500:
                camera.setAttribute('src', 'images/hydrangeas.png');
                break;

            case pageTop < 650:
                camera.style.opacity = '0';
                camera.style.transition = 'all 1s';
                break;

            case pageTop < 750:
                bodyTag.style.backgroundColor = "#000";
                bodyTag.style.transition = 'all 1s';
                break;
             
            case pageTop < 5000:
                bodyTag.style.backgroundColor = "#fff";
                bodyTag.style.transition = 'all 1s';
                break;

            default: bodyTag.className = "one";
            
        }
        
    });
});

(function () {
    'use strict';

    const section1 = document.querySelector('#section1');
    const hover1 = document.querySelector('#hover1');

    section1.addEventListener('mouseover', function() {
        hover1.className = "hidden";
    });

    section1.addEventListener('mouseout', function() {
        hover1.className = "showing";
    });
}) ();