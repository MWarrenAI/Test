// CLICK ON A SESSION TO LOAD THE DESCRIPTION
function getDesc(model){
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("model").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "descriptions.html", true);
  xhttp.send(); 
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