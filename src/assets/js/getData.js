//Get elements
var btn = document.getElementById('btn');
var label = document.getElementById('email');
var input = document.getElementById('search');

//Validate if input value is an email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event click in button
btn.addEventListener('click', function () {
  //Value textbox in minuscule and trim
  var value1 = document.getElementById('search').value.toLowerCase().trim();
  if(validateEmail(value1)){
    //Send email as param in the URL
    var queryString = "?email=" + value1;
    window.location.href = "result.html" + queryString;
    input.value = "";
  }else{
    //Show error
    label.innerHTML = "Please add a valid email address";
    label.style.color = "#DC0015";
    label.style.fontFamily = "HelveticaNeue";
    input.style.border = '2px solid #DC0015';
    label.style.top = '-15px'; 
  }

});