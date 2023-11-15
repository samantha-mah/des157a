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
            case pageTop < pageWidth / 2:
                camera.setAttribute('src', 'images/camera.png');
                break;

            case pageTop < pageWidth / 1.5:
                camera.style.opacity = '1';
                camera.setAttribute('src', 'images/hydrangeas.png');
                break;

            case pageTop < pageWidth:
                camera.style.opacity = '0';
                camera.style.transition = 'all 1s';
                break;

            case pageTop < pageWidth * 1.25:
                bodyTag.style.backgroundColor = "#000";
                bodyTag.style.transition = 'all 1s';
                break;
             
            case pageTop < pageWidth * 5:
                bodyTag.style.backgroundColor = "#fff";
                bodyTag.style.transition = 'all 1s';
                break;

            default: bodyTag.className = "one";
            
        }
    });

    // checks for desktop or mobile
    // if mobile, captions will become visible on scroll
    // if desktop, captions will become visible on hover
    if(pageWidth > 600) {

        const sections = [document.querySelectorAll('section')];

        // const section1 = document.querySelector('#section1');
        // const hover1 = document.querySelector('#hover1');
    
        // const section2 = document.querySelector('#section2');
        // const hover2 = document.querySelector('#hover2');
    
        // const section3 = document.querySelector('#section3');
        // const hover3 = document.querySelector('#hover3');
    
        // const section4 = document.querySelector('#section4');
        // const hover4 = document.querySelector('#hover4');
    
        // const section5 = document.querySelector('#section5');
        // const hover5 = document.querySelector('#hover5');
    
        // const section6 = document.querySelector('#section6');
        // const hover6 = document.querySelector('#hover6');
    
        // const section7 = document.querySelector('#section7');
        // const hover7 = document.querySelector('#hover7');

        for(const eachSection of sections) {
            eachSection.addEventListener('mouseover', function(event) {

                const thisMouseoverSection = event.target.id;
                const mouseoverSectionNumber = thisMouseoverSection.charAt(thisMouseoverSection.length - 1);

                document.querySelector(`#hover${mouseoverSectionNumber}`).style.opacity = '1';

            });

            eachSection.addEventListener('mouseout', function(event) {
                
                const thisMouseoutSection = event.target.id;
                const mouseoutSectionNumber = thisMouseoutSection.charAt(thisMouseSection.length - 1);

                document.querySelector(`#hover${mouseoutSectionNumber}`).style.opacity = '0';            
            });

        }
    
    
        // section1.addEventListener('mouseover', function() {
        //     hover1.style.opacity = '1';
        // });
        // section1.addEventListener('mouseout', function() {
        //     hover1.style.opacity = '0';
        // });
    
        // section2.addEventListener('mouseover', function() {
        //     hover2.style.opacity = '1';
        // });
        // section2.addEventListener('mouseout', function() {
        //     hover2.style.opacity = '0';
        // });
    
        // section3.addEventListener('mouseover', function() {
        //     hover3.style.opacity = '1';
        // });
        // section3.addEventListener('mouseout', function() {
        //     hover3.style.opacity = '0';
        // });
    
        // section4.addEventListener('mouseover', function() {
        //     hover4.style.opacity = '1';
        // });
        // section4.addEventListener('mouseout', function() {
        //     hover4.style.opacity = '0';
        // });
    
        // section5.addEventListener('mouseover', function() {
        //     hover5.style.opacity = '1';
        // });
        // section5.addEventListener('mouseout', function() {
        //     hover5.style.opacity = '0';
        // });
    
        // section6.addEventListener('mouseover', function() {
        //     hover6.style.opacity = '1';
        // });
        // section6.addEventListener('mouseout', function() {
        //     hover6.style.opacity = '0';
        // });
    
        // section7.addEventListener('mouseover', function() {
        //     hover7.style.opacity = '1';
        // });
        // section7.addEventListener('mouseout', function() {
        //     hover7.style.opacity = '0';
        // });

    }

    else {
        hover1.style.opacity = '1';
        hover2.style.opacity = '1';
        hover3.style.opacity = '1';
        hover4.style.opacity = '1';
        hover5.style.opacity = '1';
        hover6.style.opacity = '1';
        hover7.style.opacity = '1';
    }

});