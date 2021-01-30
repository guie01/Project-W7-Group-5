var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=vLYmRUPhuQGHTx4RzNCKvg3aovxdPVYFBBIIjKBJ"

var state = $("#searchPlace").val();

    $.ajax({
        url: queryURL,
        method: "GET"

        })
    .then(function (response) {
        console.log(queryURL);

         console.log(response);

        var parkInfoCont = $("#adventure-results");
        var parkAddress = $("#address");
        var parkHours = $("#parkHours");
        var parkDescription = $("#description");
        var parkActivies = $("#activities");

        // Park Address 
        parkInfoCont.append(parkAddress);
        parkAddress.text(JSON.stringify(response.data[0].addresses[0]))
        $("#adventure-results").append(parkInfoCont);
        console.log(parkAddress);

        //Park Hours
        parkHours.text(JSON.stringify(response.data[0].operatingHours[0].standardHours));
        $("#adventure-results").append(parkHours);

        //Park Description
        parkDescription.text(response.data[0].description);
        $("#adventure-results").append(parkDescription);

        //Park Activities
        parkActivies.text(response.data[0].activities[0].name);
        $("#adventure-results").append(parkActivies);
        

        var latLong = response.data[0].latLong;
        console.log(latLong);
    })