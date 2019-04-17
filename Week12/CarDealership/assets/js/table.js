function LoadBook() {
            var data_file = "../assets/json/book.json";
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