$( document ).ready(function() {
	$ function() {
		var dateToday = new Date()
		var Bookeddate = $(#bookdate).datepicker({
			defaultDate: "+2d",
			minDate: dateToday,
			onSelect: function(selectedDate) {
				var option = this.id == "book-date",
				date = 
					$.datepicker.parseDate(instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat, selectedDate,
					instance.settings);
						dates.not(this).datepicker("option", option, date);
			}
		});
	});
});

