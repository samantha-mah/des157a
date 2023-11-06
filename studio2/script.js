(function () {
    'use strict';

    let pageTop;
    const bodyTag = document.querySelector('body');
    const hydrangeas = document.querySelector('#hydrangeas');

    window.addEventListener('scroll', function() {

        pageTop = window.pageYOffset;

        switch(true) {
            case pageTop < 500: bodyTag.className="one"; break;
            case pageTop < 5000: bodyTag.className="two"; break;
            default: bodyTag.className="one";

            case pageTop < 500: hydrangeas.className="start"; break;
            case pageTop < 5000: hydrangeas.className="end"; break;
        }
        
    }) 
}) ();