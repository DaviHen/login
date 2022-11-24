;(function(){
    "use strict";

    let formElement = document.getElementById("formElement");
    formElement.addEventListener("submit", submitForm)

    function submitForm(event){
        event.preventDefault();
        window.history.back();
    }
})()