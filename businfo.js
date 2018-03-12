// Start of execution
$(document).ready( function(){
    // wait for document to be loaded
    console.log('document ready');
    updateInfo61W();
    updateInfo61E();
    setInterval(updateInfo61W, 30000);
    setInterval(updateInfo61E, 30000);

    });



function updateInfo61W(){
    console.log('1running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '11797';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('1minutes_Departure', minutes_Departure);
         if (data[nextbus].Actual==true){
              minutes_Departure=minutes_Departure.substring(0,minutes_Departure.indexOf(" "));  
        }
         else {
            d=new Date();
            var d_Hours = d.getHours();
            
            var time_Seconds = d_Hours*60*60+d.getMinutes()*60;

            var a = data[nextbus].DepartureText.split(':'); // split it at the colons
            console.log('a0 ',a[0]);
            if(a[0]<d_Hours) a[0]=parseInt(a[0])+12;

            console.log('a0+12 ',a[0]);
            
            var departure_Seconds = (a[0]) * 60 * 60 + (+a[1]) * 60; 
            
            minutes_Departure = Math.floor((departure_Seconds - time_Seconds)/60)
        }               
        console.log('minutes_Departure', minutes_Departure);
        console.log('data from ajax call', data);
        
        // Put on the web page
        $('h1').text(data[nextbus].Route);
        $('h2').text(data[nextbus].RouteDirection.substring(0,4));
        if(data[nextbus].DepartureText=='Due'){
            $('h3').text("Due");
        }
        else
        {
            $('h3').text(minutes_Departure+" minutes");
        }
    
        
    })
}

function updateInfo61E(){
    console.log('2running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '12382';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('2minutes_Departure', minutes_Departure);
         if (data[nextbus].Actual==true){
              minutes_Departure=minutes_Departure.substring(0,minutes_Departure.indexOf(" "));  
        }
         else {
            d=new Date();
            var d_Hours = d.getHours();
            
            var time_Seconds = d_Hours*60*60+d.getMinutes()*60;

            var a = data[nextbus].DepartureText.split(':'); // split it at the colons
            console.log('a0 ',a[0]);
            if(a[0]<d_Hours) a[0]=parseInt(a[0])+12;

            console.log('a0+12 ',a[0]);
            
            var departure_Seconds = (a[0]) * 60 * 60 + (+a[1]) * 60; 
            
            minutes_Departure = Math.floor((departure_Seconds - time_Seconds)/60)
        }               
        console.log('minutes_Departure', minutes_Departure);
        console.log('data from ajax call', data);
        
        // Put on the web page
        $('h1').text(data[nextbus].Route);
        $('h2').text(data[nextbus].RouteDirection.substring(0,4));
        if(data[nextbus].DepartureText=='Due'){
            $('h3').text("Due");
        }
        else
        {
            $('h3').text(minutes_Departure+" minutes");
        }
    
        
    })
}
