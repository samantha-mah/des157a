(function () {

    // add script here
    'use strict';

    console.log('reading js');

    const form = document.querySelector("#form");
    const madlib = document.querySelector("#madlib");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const q1 = document.querySelector('#question1').value;
        const q2 = document.querySelector('#question2').value;
        const q3 = document.querySelector('#question3').value;
        const q4 = document.querySelector('#question4').value;
        const q5 = document.querySelector('#question5').value;
        const q6 = document.querySelector('#question6').value;
        const q7 = document.querySelector('#question7').value;
        const q8 = document.querySelector('#question8').value;
        const q9 = document.querySelector('#question9').value;

        let myText = "";

        if(q1 == "") {
            myText = "Please provide a number";
            document.querySelector("#question1").focus();
        }
        else if(q2 == "") {
            myText = "Please provide a food";
            document.querySelector("#question2").focus();
        }
        else if(q3 == "") {
            myText = "Please provide a food";
            document.querySelector("#question3").focus();
        }
        else if(q4 == "") {
            myText = "Please provide a food";
            document.querySelector("#question4").focus();
        }
        else if(q5 == "") {
            myText = "Please provide an adverb";
            document.querySelector("#question5").focus();
        }
        else if(q6 == "") {
            myText = "Please provide a noun";
            document.querySelector("#question6").focus();
        }
        else if(q7 == "") {
            myText = "Please provide a number";
            document.querySelector("#question7").focus();
        }
        else if(q8 == "") {
            myText = "Please provide a number";
            document.querySelector("#question8").focus();
        }
        else if(q9 == "") {
            myText = "Please provide an adjective";
            document.querySelector("#question9").focus();
        }
        else {
            // mySentence = document.getElementById("#mySentence");

            myText = `<p>My best friend is turning ${q1} years old, and I want to bake them a cake. After mixing ${q2}, ${q3}, and ${q3} ${q4}, I put it in the ${q5} to bake at ${q6} degrees for ${q7} minutes. My friend said that the cake is very ${q8}!</p>`;

            const textFields = document.querySelectorAll('input[type=text]');
        }

        for(const eachField of textFields) {
            eachField.value = "";
        }

        madlib.innerHTML = myText;
        
    });

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
    });
    
})();