




$('#curent').on('click', function(){
var apiKey = "juFAItMvn2KGNERAtKAKlZ6KTYhI41vs78o8xaFE";
var selectDate = $('#curent').val()
var apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey +  '&date=' + selectDate ;

  $.ajax({
    url: apiURL,
    // Work with the response

    success: function( response ) {
      console.log( response.url ); // server response
      $('img').attr('src', response.url)
    },
    error: function(response){
      console.log('error')

    }
  });

 });
