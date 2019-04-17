(function Show() {

  var password = document.getElementById('password');     // Get password input
  var chk = document.getElementById('showPwd'); // Get checkbox

  addEvent(chk, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        password.type = 'text';                      // Set pwd type to text
      } else {                                  // Otherwise
        password.type = 'password';                  // Set pwd type to password
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  });
}());