var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + state + "&api_key=vLYmRUPhuQGHTx4RzNCKvg3aovxdPVYFBBIIjKBJ"

var state = $("#searchPlace").val().trim();

    $.ajax({
        url: queryURL,
        method: "GET"

        })
    .then(function (response) {
        console.log(queryURL);

         console.log(response);

        var parkInfoCont = $("<div>");
        var parkAddress = $("<p>");
        var parkHours = $("<p>");
        var parkDescription = $("<p>");
        var parkActivies = $("<p>");

        // Park Address 
        parkInfoCont.append(parkAddress);
        parkAddress.text(JSON.stringify(response.data[0].addresses[0]))
        $("#container").append(parkInfoCont);
        console.log(parkAddress);

        //Park Hours
        parkHours.text(JSON.stringify(response.data[0].operatingHours[0].standardHours));
        $("#container").append(parkHours);

        //Park Description
        parkDescription.text(response.data[0].description);
        $("#container").append(parkDescription);

        //Park Activities
        parkActivies.text(response.data[0].activities[0].name);
        $("#container").append(parkActivies);
        

        var latLong = response.data[0].latLong;
        console.log(latLong);
    })