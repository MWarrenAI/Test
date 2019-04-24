(function showthis() {

  var thispassword = document.getElementById('thispassword');     // Get password input
  var chk = document.getElementById('showpass'); // Get checkbox

  addEvent(chk, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        thispassword.type = 'text';                      // Set pwd type to text
      } else {                                  // Otherwise
        thispassword.type = 'password';                  // Set pwd type to password
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  });
}());