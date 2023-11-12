window.addEventListener('load', function () {

    'use strict';

    let pageTop;
    const bodyTag = document.querySelector('body');
    const hydrangeas = document.querySelectorAll('.start');
    const camera = document.querySelector('#camera');

    // gets the width of the window
    const pageWidth = window.innerWidth;
    const pageHeight = document.querySelector('#long-div').offsetHeight;

    //sets the maximum size for the image
    const maxSize = pageWidth / 3;

    const firstImageEntryPoint = maxSize + 200;
    let breakpoints = [firstImageEntryPoint];
    let nextBreakpoint = Math.floor(((pageHeight - firstImageEntryPoint) / hydrangeas.length - 1) + firstImageEntryPoint);

    for(let i = 0; i < hydrangeas.length - 1; i++) {
        breakpoints.push(nextBreakpoint);
        nextBreakpoint = nextBreakpoint + Math.floor((pageHeight - firstImageEntryPoint) / hydrangeas.length - 1);
    }
    
    let counter = 0;
    let prevCounter = 0;
    let done = 0;

    window.addEventListener('scroll', function() {
        pageTop = window.scrollY;

        const ratio = (pageTop / 100) + 1;

        if(pageTop < maxSize) {
            camera.style.transform = `scale(${ratio}, ${ratio})`;
        }

        if(pageTop > breakpoints[counter]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        }

        else if(counter > 1 && pageTop < breakpoints[counter - 1]) {
            counter--;
            console.log(`scrolling up ${counter}`);
        } 

        else if(counter == 1 && pageTop < maxSize) {
            counter = 0;
            prevCounter = 0;
            done = 1;
        }

        if(counter != prevCounter) {
            if(counter > prevCounter) {
                if(counter > 1) {
                    hydrangeas[counter - 2].className = 'end';
                    
                    setTimeout(function() {
                        hydrangeas[counter - 1].className = 'middle';
                    }, 1000);
                }
                
                else {
                    hydrangeas[counter - 1].className = 'middle';
                }
    
                prevCounter = counter;
            }

            else {
                hydrangeas[counter].className = 'start';

                setTimeout(function() {
                    hydrangeas[counter - 1].className = 'middle';
                }, 1000);

                prevCounter = counter;
            }
        }

        else if(done) {
            hydrangeas[0].className = 'start';
            done = 0;
        }
    });

    window.addEventListener('scroll', function() {

        pageTop = window.pageYOffset;

        switch(true) {
            case pageTop < 500: bodyTag.className = "one"; camera.className = "showing"; break;
             
            case pageTop < 5000: bodyTag.className = "two"; camera.className = "hidden"; break;

            default: bodyTag.className = "one";
            
        }
        
    });
});
