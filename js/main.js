//--ACCORDIAN JQUERY UI --//
$(document).ready(function() {                      
    $("#accordion").accordion();
});


//--CYCLE TURN DOWN JQUERY PLUGIN--//
$(document).ready(function() {
    $('#slider').cycle({ 
    fx:      'turnDown', 
    delay:   -4000 
    });
});


//--JQUERY METHODS--//
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
 
 
//--GOOGLE MAP API 3RD PARTY API--//
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


 
//function save(){
//     var fieldValue = document.getElementById('textfield').value;
//     localStorage.setItem('text', fieldValue);
// }
//function load(){
//    var storedValue = localStorage.getItem('text');
//    if(storedValue){
//        document.getElementById('textfield').value = storedValue;
//    }
//}


//--CONTACT FORM VALIDATION--//
function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var number = document.getElementById('number').value;
    
    var userCheck = /^[A-Za-z. ]{3, 30}$/;
    var emailCheck = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var mobileCheck = /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/;
    
    
    if(username =='' && email == '' && number ==''){
        document.getElementById('usererror').innerHTML = "** Enter the name";
        document.getElementById('email').innerHTML = "** Enter Email";
        document.getElementById('number').innerHTML = "** Enter Phone";
    }
    
    else if(userCheck.test(username) && emailCheck.test(email) && mobileCheck.test(number)){
        alert('Form Submitted');
    }else{
        document.getElementById('usererror').innerHTML = "** Name is Invalid";
        document.getElementById('emailerror').innerHTML = "** Email is Invalid";
        document.getElementById('numbererror').innerHTML = "** Number is Invalid";
        return false;
    }
}
    
//    if(emailCheck.test(email)){
//        document.getElementById('emailerror').innerHTML = "";
//    }else{
//        document.getElementById('emailerror').innerHTML = "** EmailAddress is Invalid";
//        return false;
//    }
//    
//    if(mobileCheck.test(number)){
//        document.getElementById('mobileerror').innerHTML = "";
//    }else{
//        document.getElementById('mobileerror').innerHTML = "** Mobile Number is Invalid";
//        return false;
//    }


//--HTTP REQUEST OBJECT--//
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "./js/ajax_info.txt", true);
  xhttp.send();
}


