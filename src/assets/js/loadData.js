//Get email in the url
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var email = queries.join();
//Substring to get de final email
var emailFinal = email.substr(6, email.length);
//Proxy to allow CORS
var proxy = "https://cors-anywhere.herokuapp.com/";
var api = "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=";
var theurl= proxy+api+emailFinal;

//HttpRequest with XMLHttpRequest window object
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() { 
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
    aCallback(anHttpRequest.responseText);
    }
    anHttpRequest.open( "GET", aUrl, true ); 
    anHttpRequest.send( null ); 
    }
}
//Display data in card result
function GetElements(url){
    var client = new HttpClient();
    client.get(url, function(response) { 
    var response1 = JSON.parse(response);
    document.getElementById("name").innerHTML = response1.first_name + " " +response1.last_name;
    document.getElementById("description").innerHTML = response1.description;
    document.getElementById("description_address").innerHTML = response1.address;
    document.getElementById("description_email").innerHTML = response1.email;
    document.getElementById("description_numbers").innerHTML = response1.phone_numbers[0] + '</br>' + response1.phone_numbers[1]+  '</br>' + response1.phone_numbers[2];
    document.getElementById("description_relatives").innerHTML = response1.relatives[0] + '</br>' + response1.relatives[1];
   });
 }

GetElements(theurl);

var btn = document.getElementById("btn");
var input = document.getElementById("search");
var label = document.getElementById("email");

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Search in results
btn.addEventListener("click", function(){
    var email = input.value.toLowerCase().trim();
    if(validateEmail(email)){
        var theurl= proxy+api+email;
        GetElements(theurl);
        input.attributeStyleMap.clear();
        label.attributeStyleMap.clear();
        label.innerHTML = "EMAIL";
        input.value = "";
    }else{
        label.innerHTML = "Please add a valid email address";
        label.style.color = "#DC0015";
        label.style.fontFamily = "HelveticaNeue";
        input.style.border = '2px solid #DC0015';
        label.style.top = '-15px'; 
  }
})