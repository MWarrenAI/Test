(function() {
  var type  = document.getElementById('brand');// Type select box
  var model = document.getElementById('model');        // Model select box
  var Alfa = {                                      // Object stores cameras
    Alfa: 'Romeo Giulietta'
  };
  var Kia = {                                  // Store projectors
    Kia: 'Niro'
  };
  var Peugeot = {                                  // Store projectors
    Peugeot: '3008'
  };
  var Honda = {                                  // Store projectors
    Honda: 'Civic Type R GT'
  };
  var Lexus = {                                  // Store projectors
    Lexus: 'RX L'
  };
  var Toyota = {                                  // Store projectors
    Toyota: 'Prius'
  };
  
 /*  if model.value = ('Romeo Giulietta') {
	  Price.value = 15000;
  }
  
    if model.value = ('Niro') {
	  Price.value = 25000;
  }
  
    if model.value = ('3008') {
	  Price.value = 23000;
  }
  
    if model.value = ('Civic Type R GT') {
	  Price.value = 33500;
  }
    if model.value = ('RX L') {
	  Price.value = 47000;
  }
    if model.value = ('Prius') {
	  Price.value = 32000;
  }
  let Discount10 = 0.1 * Price;
  let Discount20 = 0.2 * Price;
  let Discount30 = 0.3 * Price;
   */

  // WHEN THE USER CHANGES THE TYPE SELECT BOX
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                // No selection made
      model.innerHTML = '<option>Please choose a type first</option>';
      return;                                     // No need to proceed further
    }
    var models = getModels(this.value);           // Select the right object

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = '<option>Please choose a model</option>';
    var key;
    for (key in models) {                     // Loop through models
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // If an option could contain a quote, key should be escaped (see pXXX)
    model.innerHTML = options;                    // Update select box
  });
	
  function getModels(brand) {
    if (brand === 'Alfa') {            // If type is cameras
      return Alfa;                             // Return cameras object
    } else if (brand === 'Kia') {  // If type is projectors
      return Kia;                          // Return projectors object
    } else if (brand === 'Peugeot') {  // If type is projectors
      return Peugeot;      
	} else if (brand === 'Honda') {  // If type is projectors
      return Honda;      
	} else if (brand === 'Lexus') {  // If type is projectors
      return Lexus;    
	} else if (brand === 'Toyota') {  // If type is projectors
      return Toyota;  
	}
  }
  
}());