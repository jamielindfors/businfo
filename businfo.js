// Start of execution
$(document).ready( function(){
    // wait for document to be loaded
    console.log('document ready');
    updateInfo61W();
    updateInfo61E();
    updateInfo64W();
    updateInfo64E();
    setInterval(updateInfo61W, 30000);
    setInterval(updateInfo61E, 30000);
    setInterval(updateInfo64W, 30000);
    setInterval(updateInfo64E, 30000);

    });



function updateInfo61W(){
    console.log('running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '13806';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('minutes_Departure', minutes_Departure);
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
        $('p1').text(data[nextbus].Route+data[nextbus].RouteDirection.substring(0,1));
        if(data[nextbus].DepartureText=='Due'){
            $('p2').text("Due");
        }
        else
        {
            $('p2').text(minutes_Departure+" min");
        }
    
        
    })
}
function updateInfo61E(){
    console.log('running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '12382';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('minutes_Departure', minutes_Departure);
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
       $('p3').text(data[nextbus].Route+data[nextbus].RouteDirection.substring(0,1));
       if(data[nextbus].DepartureText=='Due'){
           $('p4').text("Due");
       }
       else
       {
           $('p4').text(minutes_Departure+" min");
       }
    
        
    })
}
function updateInfo64W(){
    console.log('running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '11798';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('minutes_Departure', minutes_Departure);
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
        $('p5').text(data[nextbus].Route+data[nextbus].RouteDirection.substring(0,1));
        if(data[nextbus].DepartureText=='Due'){
            $('p6').text("Due");
        }
        else
        {
            $('p6').text(minutes_Departure+" min");
        }
    
        
    })
}
function updateInfo64E(){
    console.log('running...');
     // Load data from metro transit api
     var metroTransitAPI = 'https://svc.metrotransit.org/NexTrip/' + '11797';
     $.getJSON( metroTransitAPI, { format: 'json' }).done(function( data ) {
         var nextbus=0; //Pick which coming bus to display, 0=1st.
         var minutes_Departure=data[nextbus].DepartureText;
         console.log('minutes_Departure', minutes_Departure);
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
        $('p7').text(data[nextbus].Route+data[nextbus].RouteDirection.substring(0,1));
        if(data[nextbus].DepartureText=='Due'){
            $('p8').text("Due");
        }
        else
        {
            $('p8').text(minutes_Departure+" min");
        }
    
        
    })
}
