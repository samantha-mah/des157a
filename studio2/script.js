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
            case pageTop < pageWidth / 4:
                camera.setAttribute('src', 'images/camera.png');
                break;

            case pageTop < pageWidth / 3.5:
                camera.style.opacity = '1';
                camera.setAttribute('src', 'images/hydrangeas.png');
                break;

            case pageTop < pageWidth / 2.75:
                camera.style.opacity = '0';
                camera.style.transition = 'all 1s';
                break;

            case pageTop < pageWidth / 2:
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

        const nodeList = document.querySelectorAll('section');
        const sections = Array.prototype.slice.call(nodeList);


        for(const eachSection of sections) {
            eachSection.addEventListener('mouseover', function(event) {
                // alert(event.target.id);

                const thisMouseoverSection = event.target.id;
                const mouseoverSectionNumber = thisMouseoverSection.charAt(thisMouseoverSection.length - 1);

                console.log(mouseoverSectionNumber)

                const thisCaption = document.querySelector(`#hover${mouseoverSectionNumber}`).style.opacity = '1';

            });

            eachSection.addEventListener('mouseout', function(event) {
                    
                const thisMouseoutSection = event.target.id;
                const mouseoutSectionNumber = thisMouseoutSection.charAt(thisMouseoutSection.length - 1);

                document.querySelector(`#hover${mouseoutSectionNumber}`).style.opacity = '0';            
            });
        }

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