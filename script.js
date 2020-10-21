var APIKey = 'e7610467436ab1c59773adeceb236ff7'

    function weatherCall(city) {
        console.log(city)
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=' + APIKey;

        $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .then(function(response) {
                console.log(queryURL)
                console.log(response) 
            });
        }

        function fiveDayCall(city) {
            console.log(city)
        var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=' + APIKey;
    
            $.ajax({
                url: queryURL,
                method: 'GET'
                })
    
                .then(function(response) {
                    console.log(queryURL)
                    console.log(response) 
                });
            }

    
    $('#btn').on('click', function(){
       var search = $('#location').val()
       weatherCall(search)
       fiveDayCall(search)
       
    })
