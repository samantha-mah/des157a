(function () {

    'use strict';

    // add script here
    'use strict';
    document.querySelector("#submit").addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = "showing";
        document.querySelector('.animals').className = "animals animals-animate";
    });

    document.querySelector(".close").addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = "hidden";    
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            document.getElementById('overlay').className = "hidden";
        }
    })
})();