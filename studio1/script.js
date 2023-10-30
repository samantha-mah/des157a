(function () {

    // add script here
    'use strict';

    console.log('reading js');

    const myForm = document.querySelector("#myForm");
    const textFields = document.querySelectorAll('input[type=text]');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("submitted");

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

        // let myText = "";

        if(q1 == "") {
            const error1 = document.querySelector("#error1");
            error1.innerHTML = "Please provide a number";
            error1.setAttribute("class", "error");
            document.querySelector("#question1").focus();
        }
        else if(q2 == "") {
            const error2 = document.querySelector("#error2");
            error2.innerHTML = "Please provide an emotion";
            error2.setAttribute("class", "error");            
            document.querySelector("#question2").focus();
        }
        else if(q2 == "") {
            const error3 = document.querySelector("#error3");
            error3.innerHTML = "Please provide a food";
            error3.setAttribute("class", "error");            
            document.querySelector("#question3").focus();
        }
        else if(q4 == "") {
            const error4 = document.querySelector("#error4");
            error4.innerHTML = "Please provide a food";
            error4.setAttribute("class", "error");            
            document.querySelector("#question4").focus();
        }
        else if(q5 == "") {
            const error5 = document.querySelector("#error5");
            error5.innerHTML = "Please provide a food";
            error5.setAttribute("class", "error");            
            document.querySelector("#question5").focus();
        }
        else if(q6 == "") {
            const error6 = document.querySelector("#error6");
            error6.innerHTML = "Please provide a kitchen appliance";
            error6.setAttribute("class", "error");            
            document.querySelector("#question6").focus();
        }
        else if(q7 == "") {
            const error7 = document.querySelector("#error7");
            error7.innerHTML = "Please provide a number";
            error7.setAttribute("class", "error");            
            document.querySelector("#question7").focus();
        }
        else if(q8 == "") {
            const error8 = document.querySelector("#error8");
            error8.innerHTML = "Please provide a color";
            error8.setAttribute("class", "error");            
            document.querySelector("#question8").focus();
        }
        else if(q9 == "") {
            const error9 = document.querySelector("#error9");
            error9.innerHTML = "Please provide an adjective";
            error9.setAttribute("class", "error");            
            document.querySelector("#question9").focus();
        }
        else {
            // myText = `<p>My best friend is turning ${q1} years old, and I want to bake them a cake to express my ${q2}. I gather all of my ingredients and follow the recipe to mix ${q3}, ${q4}, and ${q5}. I put it in the ${q6} to bake. After ${q7} minutes, the cake is done baking. It has to look as good as it tastes, so I add ${q8} frosting and sprinkles. My friend said that the cake is very ${q9}!</p>`;

            document.querySelector("#a1").innerHTML = q1;
            document.querySelector("#a1").className = ("user-input");

            document.querySelector("#a2").innerHTML = q2;
            document.querySelector("#a2").className = ("user-input");

            document.querySelector("#a3").innerHTML = q3;
            document.querySelector("#a3").className = ("user-input");

            document.querySelector("#a4").innerHTML = q4;
            document.querySelector("#a4").className = ("user-input");

            document.querySelector("#a5").innerHTML = q5;
            document.querySelector("#a5").className = ("user-input");

            document.querySelector("#a6").innerHTML = q6;
            document.querySelector("#a6").className = ("user-input");

            document.querySelector("#a7").innerHTML = q7;
            document.querySelector("#a7").className = ("user-input");

            document.querySelector("#a8").innerHTML = q8;
            document.querySelector("#a8").className = ("user-input");

            document.querySelector("#a9").innerHTML = q9;
            document.querySelector("#a9").className = ("user-input");

            // const a1 = document.querySelector('q1');
            // a1.className = "user-input";

            for(const eachField of textFields) {
                eachField.value = "";
            }
    
            // mySentence.innerHTML = myText;
            
            document.querySelector('#overlay').className = "showing";
            document.querySelector('.bear').className = "bear bear-appear";
        }
        
    });

    document.querySelector(".close").addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = "hidden";
        document.querySelector('.bear').className = "bear bear-disappear";
    
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            document.getElementById('overlay').className = "hidden";
            document.querySelector('.bear').className = "bear bear-disappear";
        }
    });

    for(const eachTextField of textFields) {
        eachTextField.addEventListener("change", function(event) {
            //alert(event.target.id);
            const thisField = event.target.id;
            const fieldNumber = thisField.charAt(thisField.length-1);

            document.querySelector(`#error${fieldNumber}`).innerHTML = '';
        });

    }


})();