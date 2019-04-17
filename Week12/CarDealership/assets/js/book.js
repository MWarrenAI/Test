let globalbooks = 3;	
let bookstored = [];

var globalsessions = [
{ id: 0, date: "12 Apr 2019", start: "9:00am", isbooked: 0},
{ id: 1, date: "12 Apr 2019", start: "10:00am", isbooked: 0},
{ id: 2, date: "12 Apr 2019", start: "11:00am", isbooked: 0},
{ id: 3, date: "12 Apr 2019", start: "12:00pm", isbooked: 0},
{ id: 4, date: "12 Apr 2019", start: "1:00pm", isbooked: 0},
{ id: 5, date: "12 Apr 2019", start: "2:00pm", isbooked: 0},
{ id: 6, date: "12 Apr 2019", start: "3:00pm", isbooked: 0},
{ id: 7, date: "12 Apr 2019", start: "4:00pm", isbooked: 0},
{ id: 8, date: "12 Apr 2019", start: "5:00pm", isbooked: 0},
{ id: 9, date: "13 Apr 2019", start: "9:00am", isbooked: 0},
{ id: 10, date: "13 Apr 2019", start: "10:00am", isbooked: 0},
{ id: 11, date: "13 Apr 2019", start: "11:00am", isbooked: 0},
{ id: 12, date: "13 Apr 2019", start: "12:00pm", isbooked: 0},
{ id: 13, date: "13 Apr 2019", start: "1:00pm", isbooked: 0},
{ id: 14, date: "13 Apr 2019", start: "2:00pm", isbooked: 0},
{ id: 15, date: "13 Apr 2019", start: "3:00pm", isbooked: 0},
{ id: 16, date: "13 Apr 2019", start: "4:00pm", isbooked: 0},
{ id: 17, date: "13 Apr 2019", start: "5:00pm", isbooked: 0},
{ id: 18, date: "14 Apr 2019", start: "9:00am", isbooked: 0},
{ id: 19, date: "14 Apr 2019", start: "10:00am", isbooked: 0},
{ id: 20, date: "14 Apr 2019", start: "11:00am", isbooked: 0},
{ id: 21, date: "14 Apr 2019", start: "12:00pm", isbooked: 0},
{ id: 22, date: "14 Apr 2019", start: "1:00pm", isbooked: 0},
{ id: 23, date: "14 Apr 2019", start: "2:00pm", isbooked: 0},
{ id: 24, date: "14 Apr 2019", start: "3:00pm", isbooked: 0},
{ id: 25, date: "14 Apr 2019", start: "4:00pm", isbooked: 0},
{ id: 26, date: "14 Apr 2019", start: "5:00pm", isbooked: 0},
{ id: 27, date: "15 Apr 2019", start: "9:00am", isbooked: 0},
{ id: 28, date: "15 Apr 2019", start: "10:00am", isbooked: 0},
{ id: 29, date: "15 Apr 2019", start: "11:00am", isbooked: 0},
{ id: 30, date: "15 Apr 2019", start: "12:00pm", isbooked: 0},
{ id: 31, date: "15 Apr 2019", start: "1:00pm", isbooked: 0},
{ id: 32, date: "15 Apr 2019", start: "2:00pm", isbooked: 0},
{ id: 33, date: "15 Apr 2019", start: "3:00pm", isbooked: 0},
{ id: 34, date: "15 Apr 2019", start: "4:00pm", isbooked: 0},
{ id: 35, date: "15 Apr 2019", start: "5:00pm", isbooked: 0}
];

function LoadBook() {
            var data_file = "../assets/JSON/book.json";
            var http_request = new XMLHttpRequest();
            try{
               // Opera 8.0+, Firefox, Chrome, Safari
               http_request = new XMLHttpRequest();
            }catch (e) {
               // Internet Explorer Browsers
               try{
                  http_request = new ActiveXObject("Msxml2.XMLHTTP");
					
               }catch (e) {
				
                  try{
                     http_request = new ActiveXObject("Microsoft.XMLHTTP");
                  }catch (e) {
                     // Something went wrong
                     alert("Your browser broke!");
                     return false;
                  }
					
               }
            }
			
            http_request.onreadystatechange = function() {
			
               if (http_request.readyState == 4  ) {
                  // Javascript function JSON.parse to parse JSON data
                  var jsonObj = JSON.parse(http_request.responseText);

                  // jsonObj variable now contains the data structure and can
                  // be accessed as jsonObj.name and jsonObj.country.
                  document.getElementById("Appointment").innerHTML = jsonObj.Appointment;
                  document.getElementById("Brand").innerHTML = jsonObj.Brand;
				  document.getElementById("Model").innerHTML = jsonObj.Model;
				  document.getElementById("AppTime").innerHTML = jsonObj.AppTime;
				  document.getElementById("AppDate").innerHTML = jsonObj.AppDate;
               }
            }
			
            http_request.open("GET", data_file, true);
            http_request.send();
         }


/* function init()
{
		if (localStorage.newbook)
		newbook = JSON.parse(localStorage.newbook);
		for (let i = 0; i < newbook.length; i++) {
			let brand = userstored[i].brand;
			let model = userstored[i].model;
			let booktime = userstored[i].booktime;
			let bookdate = userstored[i].bookdate;
    }
} */

/* function write_name(){
	var welcome_parra = document.getElementById('welcome');
	var user = document.getElementById('user');
	
	welcome_parra.innerHTML = "Welcome " + user.value;
} */
// CLICK ON A SESSION TO LOAD THE DESCRIPTION
function desit(){
	echo ("Hello World");
/* 	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("model").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "descriptions.html", true);
  xhttp.send();  */
/* 		what = model;
		if (what === 'Romeo Giulietta') {            // If type is cameras
		$( "#result" ).load( "descriptions.html" );                           // Return cameras object
		} else if (what === 'Niro') {  // If type is projectors
		$( "#result" ).load( "descriptions.html" );                              // Return projectors object
		} else if (what === '3008') {  // If type is projectors
		$( "#result" ).load( "descriptions.html" );           
		} else if (what === 'Civic Type R GT') {  // If type is projectors
		$( "#result" ).load( "descriptions.html" );       
		} else if (what === 'RX L') {  // If type is projectors
		$( "#result" ).load( "descriptions.html" );        
		} else if (what === 'Prius') {  // If type is projectors
		$( "#result" ).load( "descriptions.html" );   
		} */
	}

function hidedes(){
	
}

function Book() 
{
	 var newbook = {
		brand:document.getElementById("brand").value,
		model:document.getElementById("model").value,
		booktime:document.getElementById("booktime").value,
		bookdate:document.getElementById("bookdate").value,
		
	 }
		bookstored.push(newbook);
		
		localStorage.newbook = JSON.stringify(newbook);
		
		brand.innerHTML = brand;
		model.innerHTML = model;
		booktime.innerHTML = booktime;
		bookdate.innerHTML = bookdate;
	
	console.warn('added', {userstored} );
	let pre = document.querySelector('#msg pre');
	
	/*  if (localStorage.bookstored)
		for (var i = 0; i < userstored.length; i++) {
			var brand = userstored[i].brand;
			var model = userstored[i].model;
			var booktime = userstored[i].time;
			var bookdate = userstored[i].bookdate;
		}
    }  */
	
	/* for (let q = 0; q < bookstored.length; q++)
		{
			let newRow = table.insertRow(table.length);
			for(let j = 0; j < table.rows[q].cells.length; j++)
			{
				let cell = newRow.insertCell(j);
				cell.innerHTML = array[q][j];
			}
		} */
	/* const BookBody = document.querySelector("#booktable > table");
	
	function loadBookings(){
		const request = new XMLHttpRequest ();
		
		request.open("get", "../assets/json/book.json");
		request.onload = () => {
			try {
				const json = JSON.parse(request.responseText);
				populateBookings(json);
			}	 catch (e) {
				console.warn("Could not load Bookings!");
			}
		};
		request.send();
	} */
	
/* 	function populateBookings (json) {
		console.log(json);
	}
	let tempArray = newbook.serialise();
		
	//let myJSON = JSON.stringify(newbook);
	let myJSON = JSON.stringify(tempArray);
	alert(myJSON);
	localStorage.setItem("../assets/json/book.json", myJSON);
		brand.innerHTML = brand;
		model.innerHTML = model;
		time.innerHTML = time;
		bookdate.innerHTML = bookdate;
	
	console.warn('added', {bookstored} );
	let pre = document.querySelector('#msg pre'); */

function clear()
{
	document.getElementById('bookform').reset();
}
}
/* $(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
}); */

function Users(username, fname, sname, password)
{

}
function show() {

  let password = document.getElementById('password');     // Get password input 
  let showpassy = document.getElementById('showPwd'); // Get checkbox

  addEvent(showpassy, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        password.type = 'text';                      // Set pwd type to text              // Set pwd type to text
      } else {                                  // Otherwise
        password.type = 'password';                  // Set pwd type to password                  // Set pwd type to text
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  
 
function login() {
	echo("hello");
}

});
}