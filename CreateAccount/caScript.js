;(function(){
    "use strict";

    const form = document.getElementById("caForm")
    const userNameInput = document.getElementById("caNameInput");
    const emailInput = document.getElementById("caEmailInput");
    const passwordInput = document.getElementById("caPasswordInput");
    const passwordConfirmationInput = document.getElementById("caPasswordConfirmation");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        checkInputs()
    })

    function checkInputs(){
        let getUsername = userNameInput.value;
        let getEmail = emailInput.value;
        let getPassword = passwordInput.value;
        let getCheckPassword = passwordConfirmationInput.value;
        

        if(getUsername === ""){
            itIsWrong(userNameInput, "You must write a username")
        } else if(!isNaN(getUsername)){
            itIsWrong(userNameInput, "You cannot use numbers as username")
        }
        else{
            itIsCorrect(userNameInput, "")
        }
        

        if(getEmail === ""){
            itIsWrong(emailInput, "You must write an email");

        } else if(!checkEmail(getEmail)){
            itIsWrong(emailInput, "The email seems to be wrong");

        } else{
            itIsCorrect(emailInput, "");

        }

        if(getPassword === ""){
            itIsWrong(passwordInput, "You must enter a password");
        } else if(getPassword.length < 6){
            itIsWrong(passwordInput, "The password must have at least 6 characters");
        } else{
            itIsCorrect(passwordInput, "");
        }

        if(getCheckPassword === ""){
            itIsWrong(passwordConfirmationInput, "The passwords are not the same");
        } else if(getCheckPassword !== getPassword){
            itIsWrong(passwordConfirmationInput, "The passwords are not the same");
        } else{
            itIsCorrect(passwordConfirmationInput, "");
        }
            
    }

    function itIsCorrect(input, message){
        const inputParent = input.parentElement;
        const textOutput = inputParent.querySelector("#textOutput")
        
        textOutput.innerHTML = message;
        inputParent.classList.add("correct");
        inputParent.classList.remove("wrong");
    }

    function itIsWrong(input, message){
        const inputParent = input.parentElement;
        const textOutput = inputParent.querySelector("#textOutput")
        
        textOutput.innerHTML = message;
        inputParent.classList.add("wrong");
        inputParent.classList.remove("correct");
    }

    function checkEmail(emailInput) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
    }

})()