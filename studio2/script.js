window.addEventListener('load', function () {

    'use strict';

    let pageTop;
    const bodyTag = document.querySelector('body');
    const hydrangeas = document.querySelector('#hydrangeas');
    const camera = document.querySelector('#camera');

    // gets the width of the window
    const pageWidth = window.innerWidth;
    const pageHeight = document.querySelector('#long-div').offsetHeight;

    //sets the maximum size for the image
    const maxSize = pageWidth / 2;

    window.addEventListener('scroll', function() {
        pageTop = window.scrollY;

        const ratio = (pageTop / 100) + 1;

        if(pageTop < maxSize) {
            camera.style.transform = `scale(${ratio}, ${ratio})`;
        }

    });

    window.addEventListener('scroll', function() {

        pageTop = window.pageYOffset;

        switch(true) {
            case pageTop < 500:
                camera.setAttribute('src', 'images/camera.png'); break;

            case pageTop < 750:
                bodyTag.style.backgroundColor = "#000";
                bodyTag.style.transition = 'all 1s';
                break;
             
            case pageTop < 5000:
                bodyTag.style.backgroundColor = "#fff";
                bodyTag.style.transition = 'all 1s';
                camera.remove();
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