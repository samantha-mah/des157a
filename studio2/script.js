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
                camera.style.opacity = '1';
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

    const section1 = document.querySelector('#section1');
    const hover1 = document.querySelector('#hover1');

    const section2 = document.querySelector('#section2');
    const hover2 = document.querySelector('#hover2');

    const section3 = document.querySelector('#section3');
    const hover3 = document.querySelector('#hover3');

    const section4 = document.querySelector('#section4');
    const hover4 = document.querySelector('#hover4');

    const section5 = document.querySelector('#section5');
    const hover5 = document.querySelector('#hover5');

    const section6 = document.querySelector('#section6');
    const hover6 = document.querySelector('#hover6');

    const section7 = document.querySelector('#section7');
    const hover7 = document.querySelector('#hover7');

    section1.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });

    section2.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });

    section1.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });

    section1.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });

    section1.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });

    section1.addEventListener('mouseover', function() {
        hover1.style.opacity = '1';
    });
    section1.addEventListener('mouseout', function() {
        hover1.style.opacity = '0';
    });


});