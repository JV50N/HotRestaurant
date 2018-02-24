// In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
    $(".submit").on("click", function(){
        // Here we grab the form elements
        var newReservation = {
            customerName: $('#reserve_name').val().trim(),
            phoneNumber: $('#reserve_phone').val().trim(),
            customerEmail: $('#reserve_email').val().trim(),
            customerID: $('#reserve_uniqueID').val().trim()
        };
        console.log(newReservation);
        // This line is the magic. It's very similar to the standard ajax function we used.
        // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
        // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
        // depending on if a tables is available or not.
        // Here we get the location of the root page.
        // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
        var currentURL = window.location.origin;
        $.post(currentURL + "/api/tables", newReservation,
        function(data){
            // If a table is available... tell user they are booked.
            if(data == true){
                alert("Yay! You are officially booked!")
            }
            // If a table is available... tell user they on the waiting list.
            if(data == false){
                alert("Sorry you are on the wait list")
            }
            // Clear the form when submitting
            $('#reserve_name').val("");
            $('#reserve_phone').val("");
            $('#reserve_email').val("");
            $('#reserve_uniqueID').val("");
        });
return false;
});