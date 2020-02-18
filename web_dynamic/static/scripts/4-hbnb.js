$(document).ready(function () {
  console.log('#### SCRIPT LOADED ####');
  const dataDict = {};
  //* detects if amenities checkbox is changed
  $('.amenities input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      console.log('#### Box checked! ####');

      // add key/value to dict if id not already in it
      if (!($(this).attr('data-id') in dataDict)) {
        dataDict[$(this).attr('data-id')] = $(this).attr('data-name');
      }
    } else {
      console.log('#### Box UNchecked! ####');

      // remove key/value from dict if id is a duplicate
      delete dataDict[$(this).attr('data-id')];
      delete dataDict[$(this).attr('data-name')];
    }

    // appends dict values as stringified list to html
    $('.amenities').find('h4').text('');
    $('.amenities').find('h4').append(Object.values(dataDict).join(', '));
  });

  /*
    ####################################################
  */

  // requests api's status on port :5001, updates html
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log('#### API Status ####');
    if (data.status === 'OK') {
      console.log('API OK!!!!');
      $('#api_status').addClass('available');
    } else {
      console.log('API NOT OK :-(');
      $('#api_status').removeClass('available');
    }
  });

  /*
    ####################################################
  */

  // POST request to api/v1/places_search/ endpoint
  const posting = $.ajax({
    type: "POST",
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log('#### POST Success! ####');
      console.log('#### Data ####');
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error, status = " + textStatus + ", " + "error thrown: " + errorThrown
		 );
    }
  });
});
  // // appending data from POST query to html page
  // posting.done(function(data) {
  //   $('section.places').text('#### INSIDE PLACES SECTION ####');
  //   console.log('#### Peeling JSON onion ####')
  //   $.each(data, function (i, val) {
  //     console.log(val);
  //   });
  // });
  //   // $('section.places').append('<article>' + content + '</article>');
function searchButton () {
    $('button').click(function () {
	console.log("button clicked");
    });
}

$(window).on('load', function () {
    searchButton();
});
