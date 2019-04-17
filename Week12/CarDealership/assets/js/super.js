function init()
{
	if (localStorage.bookstored)
		bookstored = JSON.parse(localStorage.bookstored);
		for (let i = 0; i < userstored.length; i++) {
			let brand = userstored[i].brand;
			let model = userstored[i].model;
			let booktime = userstored[i].time;
			let bookdate = userstored[i].bookdate;
    }
}


function clear()
{
 	document.getElementById("brand").value= "";
	document.getElementById("model").value= "";
	document.getElementById("booktime").value= "";
	document.getElementById("bookdate").value= "";
}

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
	
	let newbook = {
		brand:document.getElementById("brand").value,
		model:document.getElementById("model").value,
		booktime:document.getElementById("booktime").value,
		bookdate:document.getElementById("bookdate").value,
	}
	bookstored.push(newbook);
	
	const BookBody = document.querySelector("#booktable > table");
	
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
	}
	
	function populateBookings (json) {
		console.log(json);
	}
	/* let tempArray = newbook.serialise();
		
	//let myJSON = JSON.stringify(newbook);
	let myJSON = JSON.stringify(tempArray);
	alert(myJSON);
	localStorage.setItem("../assets/json/book.json", myJSON);
		brand.innerHTML = brand;
		model.innerHTML = model;
		time.innerHTML = time;
		bookdate.innerHTML = bookdate; */
	
	console.warn('added', {bookstored} );
	let pre = document.querySelector('#msg pre');

	clear();
}

function clear()
{
 	document.getElementById("brand").value= "";
	document.getElementById("model").value= "";
	document.getElementById("booktime").value= "";
	document.getElementById("bookdate").value= "";
}

document.addEventListener("DOMContentLoaded", () => {loadBookings(),  } )