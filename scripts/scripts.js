//Page loader
var start = document.getElementById("startup");                     //Get startup element.

start.onload = function() {                                         //Onload start function myLoader.

  function myLoader() {                                                        
    var length = setTimeout(showPage, 1100);                        //Declare variable and set timer to 1.1 sec.
  }

  function showPage() {
    var sLoader = document.getElementById("loader");                //Get loader element.
    var sLoad = document.getElementById("load");                    //get load element.

    sLoader.style.display = "none";                                 //loader Element not to be displayed.
    sLoad.style.display = "block";                                  //load Element to be displayed.
  }
  myLoader();													    //Function call.
}


/* Scroll to the top */
window.onscroll = function() {                                      //Window object function.

  function scrollDown() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {  
        document.getElementById("tttBtn").style.display = "block";  //If the body or element is scrolled 150px from the top display tttBtn element.                 
    } else {
        document.getElementById("tttBtn").style.display = "none";   //Else do not display tttBtn element.
    }
  }
  var elscrollDown = document.getElementById("tttBtn");
  elscrollDown.addEventListener("click", toTheTop, false);          //Event listener for toTheTop function.

  function toTheTop() {                                             // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 
  scrollDown();  													//Function call.
}


//Greetings
function greetings() {
  var time = new Date().getHours();                                 //Declare variables.
  var timeOfDay;                                                    //Declare undefined variable.
  var txtdisplay = document.getElementById("display");              //Get display element.

  if (time < 12) {
    timeOfDay = "Good Morning";                                     //If before 12am, display Good Morning.
  } else if (time >= 12 && time < 18) {
    timeOfDay = "Good Afternoon";                                   //If after 12am and before 6pm, display Good Afternoon. 
  } else {
    timeOfDay = "Good Evening";                                     //Any other time display Good Evening.
  }
  txtdisplay.textContent = timeOfDay;                               //Add timeOfDay to display element.
}
greetings();                                                        //Function call.

//Signup! blink

var blink_speed = 500;                                              //Sets variable for half a second.
var interval = setInterval(function () {                            //Declare variable & function.
  var ele = document.getElementById("blink");                       //Get blink element.
  
  if (ele.style.visibility == "hidden") {                           
      ele.style.visibility = "";                                    //If element is hidden, show element.
  } else {
	    ele.style.visibility = "hidden";                            //If element is shown, hide element.
  }
}, blink_speed);                                                    //Blink every 500ms.


//SlideShow
var carousel = (function() {
	
  var index = 0;                                                    //Declare variable.
  var image = [                                                     //Declare an array.
    "images/image1.jpg", 
	"images/image2.jpg", 
	"images/image3.jpg"
	];                                                 

  function slideShow() {
	var img = document.getElementById("slide");                     //Get slide element.   
	img.src = image[index];                                         //Add images.
	  
	if(index < image.length - 1) {
	  index++;                                                      //If index is less than the amount of images(3), increment by 1.
	} else { 
	  index = 0;                                                    //Triggered when index = false.
	}
  }
  setInterval(slideShow,3000);                   			 	    //Image changes every 4 seconds.
}());


// Responsive Navigation
function mobNav() {
    var deskNav = document.getElementById("myNav");                 //Get myNav element.
	
  if (deskNav.className === "nav") {								//If the className is equal to nav, set to className is equal to responsive. 
      deskNav.className += " responsive";
  } else {															//Else className is nav.
      deskNav.className = "nav";
  }
}
var elmobNav = document.getElementById("mobNav");
elmobNav.addEventListener("click", mobNav, false);                  //Event listener for toTheTop function.


//Google Maps
function initMap() {
  var myLatLng = {lat: 54.969, lng: -1.605};                        //Declare variable.

  var map = new google.maps.Map                                     //Declare variable.
  (document.getElementById("map"), {                                //Get map element.
    zoom: 12,                                                       //Zoom by 12.
    center: myLatLng,                                               //Center Lat & Long.
    gestureHandling: 'cooperative'                                  //Gesture using 2 fingers.
  });

  var marker = new google.maps.Marker({                             //Declare variable.
    position: myLatLng,                                             //Show position of marker for Lat & Long.
    map: map,                                                       //Map.
    title: 'The Farmhouse'                                          //Name of place on marker.
  });
} 


function loadScript() {
  var script = document.createElement('script');                    // Get script element.
  script.src = "https://maps.googleapis.com/maps/api/js?&callback=initMap"  //Google maps.
  document.body.appendChild(script);                                // Add the script element.
}
loadScript();                                                       //Calls the function


//Characters left in textarea
function charCount(e) {               
  var char;                                                         // Declare undefined variable.                     			 
  var textEntered, charDisplay, counter;                            // Declare variables.
  
  textEntered = document.getElementById('message').value;           // User's text.
  charDisplay = document.getElementById('charactersLeft');          // Counter element.
  counter = (150 - (textEntered.length)+ " characters");            // Number of characters left.
  charDisplay.textContent = counter;                                // Show characters left.
}
char = document.getElementById('message');                          // Get message element.
char.addEventListener('keyup', charCount, false);                   // keyup -call charCount.


//sessionStorage for booking form
var session = (function() {
	
  if (window.sessionStorage) {
    var txtfName = document.getElementById("fName");                //Get fName element.
	var txtlName = document.getElementById("lName");                //Get lName element.
	var txtEmail = document.getElementById("email");                //Get email element.
	var txtPhone = document.getElementById("phone");                //Get phone element.
	var txtMessage = document.getElementById("message");            //Get message element.
		
		
	txtfName.value = sessionStorage.getItem("fName");               //Elements populated by sessionStorage.
	txtlName.value = sessionStorage.getItem("lName");               //Elements populated by sessionStorage.
	txtEmail.value = sessionStorage.getItem("email");               //Elements populated by sessionStorage.
	txtPhone.value = sessionStorage.getItem("phone");               //Elements populated by sessionStorage.
	txtMessage.value = sessionStorage.getItem("message");           //Elements populated by sessionStorage.
		
		
	txtfName.addEventListener("input", function() {
	  sessionStorage.setItem("fName", txtfName.value);              //Save data
	}, false);	
	txtlName.addEventListener("input", function() {
	  sessionStorage.setItem("lName", txtlName.value);              //Save data
	}, false);
		
	txtEmail.addEventListener("input", function() {
  	  sessionStorage.setItem("email", txtEmail.value);              //Save data
	}, false);
		
	txtPhone.addEventListener("input", function() {
	  sessionStorage.setItem("phone", txtPhone.value);              //Save data
	}, false);
		
	txtMessage.addEventListener("input", function() { 
	  sessionStorage.setItem("message", txtMessage.value);          //Save data
	}, false);
  }
}());


//Form submission
var submission = (function() {
  var form = document.getElementById("bkForm");                     //Get bkform element.

  form.onsubmit = function() {                                         
    var fName = document.getElementById("fName").value;             //Get fName element value.
    sessionStorage.clear();                                         //Clears storage after submit.
  
    return window.confirm("Thank you for your booking.\r\nWe look forward to seeing you " + fName + "."); //Returns the value.
  }
}());
