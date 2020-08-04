(function(){   

    var form = document.email_form,
        elements = form.elements,
        element = elements[0],
        label = document.getElementById("label");

    var send = function(e){
        if (element.value.type != "email" || element.value.length <= 0 ) {
            label.className = "label active error";
            label.innerHTML = "Please add a valid email address";
            console.log('Falto validar los Input');
            //e.preventDefault();
        }
    };
    
    
    var focusInput = function(){
            this.parentElement.children[1].className = "label active";
    };
    
    var blurInput = function(){
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
        }
    };
    
    // --- Eventos ---
    //form.addEventListener("submit", send);


    element.addEventListener("focus", focusInput);
    element.addEventListener("blur", blurInput);

}())