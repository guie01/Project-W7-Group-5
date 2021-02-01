var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=fl&api_key=vLYmRUPhuQGHTx4RzNCKvg3aovxdPVYFBBIIjKBJ"

var state = $("#searchPlace").val();

    $.ajax({
        url: queryURL,
        method: "GET"

        })
    .then(function (response) {
        console.log(queryURL);

         console.log(response);

        var parkName = $(".card-title");
        var parkInfoCont = $("#adventure-results");
        var parkAddress = $("#address");
        var parkURL = $("#parkHours");
        //var parkHours = $("#parkHours");
        var parkDescription = $("#description");
        var parkActivies = $("#activities");

        //Park Name
        parkInfoCont.append(parkName);
        parkName.text("Park Name: " + response.data[0].fullName);
        
        

        //Park Address Variables 

        var line1 = response.data[0].addresses[0].line1;
        var cityAddress = response.data[0].addresses[0].city;
        var zipCode = response.data[0].addresses[0].postalCode;

        // Park Address 
        parkInfoCont.append(parkAddress);
        parkAddress.text("Address: " + line1 + ". " + cityAddress + ", " + zipCode);


        
        // TO BE REVIEWED BELOW
        // // Park Hours Variables:

        // var monday1 = response.data[0].operatingHours[0].standardHours.monday;
        // var tuesday2 = response.data[0].operatingHours[0].standardHours.tuesday;
        // var wednesday3 = response.data[0].operatingHours[0].standardHours.wednesday;
        // var thursday4 = response.data[0].operatingHours[0].standardHours.thursday;
        // var friday5 = response.data[0].operatingHours[0].standardHours.friday;
        // var saturday6 = response.data[0].operatingHours[0].standardHours.saturday;
        // var sunday7 = response.data[0].operatingHours[0].standardHours.sunday;

        // //Park Hours
        // parkHours.text("Monday: " + monday1 + "; Tuesday: " + tuesday2 + "; Wednesday: " + wednesday3 + "; Thursday: " + thursday4 + "; Friday: " + friday5 + "; Saturday: " + saturday6 + "; Sunday: " + sunday7);
        // $("#adventure-results").append(parkHours);

        //TO BE REVIEWED ABOVE


        //Park Description
        parkDescription.text("Park Description: " + response.data[0].description);
        $("#adventure-results").append(parkDescription);

        //Park Activities
        parkActivies.text("Activities: " + response.data[0].activities[0].name);
        $("#adventure-results").append(parkActivies);
        
        //Park URL 
    
        parkURL.text(response.data[0].url);
        //parkURL.attr("href", JSON.stringify(parkURL));
        $("#adventure-results").append(parkURL);


        var latLong = response.data[0].latLong;
        console.log(latLong);
    })