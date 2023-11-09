(function () {
    'use strict';

    const hydrangeas = document.querySelector('#hydrangeas');
    const camera = document.querySelector('#camera');
    let pageTop;
    const bodyTag = document.querySelector('body');

    window.addEventListener('scroll', function() {

        pageTop = window.pageYOffset;

        switch(true) {
            case pageTop < 10: hydrangeas.className="start"; camera.className="start"; break;

            case pageTop < 500: bodyTag.className="one"; break;
             
            case pageTop < 5000: bodyTag.className="two"; hydrangeas.className="end"; camera.className="end"; break;

            default: bodyTag.className="one";
            
        }
        
    });

    function zoomIn(event) {
        event.preventDefault();

        const targetID = event.target.getAttribute('#camera');
        const targetAnchor = document.querySelector(targetID);

        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) / 100 + 1;

        
    }
}) ();