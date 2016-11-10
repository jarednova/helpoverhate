$(document).ready(function () {

	// Add US Phone Validation
	jQuery.validator.addMethod('phoneUS', function(phone_number, element) {
	    phone_number = phone_number.replace(/\s+/g, ''); 
	    return this.optional(element) || phone_number.length > 9 &&
	        phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	}, 'Whoops! We need a real phone number.');
	// Add US zip code Validation
	jQuery.validator.addMethod("zipcode", function(value, element) {
  return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
	}, "Uh oh! Make sure this is your zip code.");

    $('.contact-form').validate({ // initialize the plugin
        rules: {

    			name: "required",

    			url: {
      			required: true,
      			url: true
    			},

    			description: "required",

    			email: {
      			required: false,
      			email: true
    			},

    			phone: {
    				required: false,
    				phoneUS: true
    			},

          zip: {
            required: false,
						zipcode: true
          }
        }
    });
//hello this is a change
});