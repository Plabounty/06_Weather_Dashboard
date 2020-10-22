var APIKey = 'e7610467436ab1c59773adeceb236ff7'

    function weatherCall(city) {
        console.log(city)
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=' + APIKey + '&units=imperial';

        $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .then(function(response) {
                console.log(queryURL)
                console.log(response) 
                $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                $('.temp').text('Temperature: (F)' + response.main.temp)
                $('.humidity').text('Humidity:' + response.main.humidity)
                $('.windSpeed').text('Wind Speed:' + response.wind.speed)
                $('.clouds').text('Clouds:' + response.clouds.all)
                
                localStorage.setItem('.city', response)
            });
        }

        // function fiveDayCall(city) {
        //     console.log(city)
        // var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=' + APIKey;
    
        //     $.ajax({
        //         url: queryURL,
        //         method: 'GET'
        //         })
    
        //         .then(function(response) {
        //             console.log(queryURL)
        //             console.log(response) 
        //         });
        //     }

    
    $('#btn').on('click', function(){
       var search = $('#location').val()
       weatherCall(search)
    //    fiveDayCall(search)
       
    })
