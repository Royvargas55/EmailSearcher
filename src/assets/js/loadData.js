//Page 2

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var email = queries.join();
var emailFinal = email.substr(6, email.length);

var theurl='https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+ emailFinal;


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

 function GetElements(url){
    var client = new HttpClient();
    client.get(url, function(response) { 
       var response1 = JSON.parse(response);
       document.getElementById("name").innerHTML = response1.first_name + " " +response1.last_name;
       document.getElementById("description").innerHTML = response1.description;
       document.getElementById("description_address").innerHTML = response1.address;
       document.getElementById("description_email").innerHTML = response1.email;
       document.getElementById("description_numbers").innerHTML = response1.phone_numbers[0] + '<br />' + response1.phone_numbers[1] + '<br />' + response1.phone_numbers[2];
       document.getElementById("description_relatives").innerHTML = response1.relatives[0] + '<br />' + response1.relatives[1];
   });
 }

GetElements(theurl);

var btn = document.getElementById("btn");
var input = document.getElementById("search");

btn.addEventListener('click', function(){
    var email = input.value.toLowerCase().trim();
    var theurl='https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+ email
    GetElements(theurl);
    input.value = "";
    input.placeholder="EMAIL";
})

