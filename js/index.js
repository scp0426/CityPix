// // Wait for DOM to load before executing
$(document).ready(function() {

// // prevent submit from refreshing page	
$('#submit-btn').click(function(){
    event.preventDefault();


// get value of city type and make lowercase
 var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

// If user inputs NYC, change class to NYC
if(city == 'new york city' || city == 'nyc' || city == 'new york') {
	$('body').addClass('nyc');
}

else if(city == 'sf' || city == 'san francisco' || city == 'bay area') {
	$('body').addClass('sf');
}

// if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
else if (city == 'los angeles' || city == 'la' || city == 'lax') {
    $('body').addClass('la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'

else if (city == 'sydney' || city == 'syd') {
    $('body').addClass('sydney');
    }
	
	});
});



