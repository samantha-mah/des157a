(function () {
    'use strict';

    console.log('reading js');

    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const close = document.querySelector('#close');

    yes.addEventListener('click', function() {
        document.querySelector('#overlay').className = "showing";
    });

    close.addEventListener('click', function() {
        document.querySelector('#overlay').className = "hidden";
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            document.getElementById('overlay').className = "hidden";
        }
    });

}) ();