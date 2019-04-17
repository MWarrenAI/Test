	JSONuser = ("../assets/json/user.json");
	myJSON = JSON.stringify(userstored)
	var userstored = [];

function init()
{
	if (localStorage.userstored)
		userstored = JSON.parse(localStorage.userstored);
		for (let i = 0; i < userstored.length; i++) {
			let reguser = userstored[i].reguser;
			let fname = userstored[i].fname;
			let sname = userstored[i].sname;
			let password = userstored[i].password;
    }
}

function Register() 
{	
	let newuser = {
		reguser:document.getElementById("reguser").value,
		fname:document.getElementById("fname").value,
		sname:document.getElementById("sname").value,
		password:document.getElementById("password1").value
		
	}
	userstored.push(newuser);	
	myJSON = JSON.stringify(newuser);
	localStorage.setItem("user.json", myJSON);
		reguser.innerHTML = reguser;
		fname.innerHTML = fname;
		sname.innerHTML = sname;
		password.innerHTML = password;
	
	console.warn('added', {userstored} );
	let pre = document.querySelector('#msg pre');
}

function clear()
{
 	document.getElementById("reguser").value= "";
	document.getElementById("fname").value= "";
	document.getElementById("sname").value= "";
	document.getElementById("password1").value= "";
	document.getElementById("password2").value= "";
}

(function Showpass() {

  let password1 = document.getElementById('password1');     // Get password input
  let password2 = document.getElementById('password2');     // Get password input  
  let showpassy = document.getElementById('showpassy'); // Get checkbox

  addEvent(showpassy, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        password1.type = 'text';                      // Set pwd type to text
		password2.type = 'text';                      // Set pwd type to text
      } else {                                  // Otherwise
        password1.type = 'password';                  // Set pwd type to password
		password2.type = 'password';                      // Set pwd type to text
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  });
 }());