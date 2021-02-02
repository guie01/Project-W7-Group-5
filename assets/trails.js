var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=nc&api_key=vLYmRUPhuQGHTx4RzNCKvg3aovxdPVYFBBIIjKBJ"

var state = $("#dropdown-content").val();

$.ajax({
    url: queryURL,
    method: "GET"

})
    .then(function (response) {
        console.log(queryURL);

        console.log(response);

        for (i = 0; i < 10; i++) {
            var parkInfoCont = $("<div>");
            var parkName = $("<p>");
            var parkAddress = $("<p>");
            var parkURL = $("<a>");
            //var parkHours = $("#parkHours");
            var parkDescription = $("<p>");
            var parkActivies = $("<p>");


            //Park Info
            $("#all-results").append(parkInfoCont);
            $("#all-results").attr("id", "adventure-results");


            //Park Name
            $("#adventure-results").append(parkName);
            parkName.attr("class", "card-title");
            parkName.text("Park Name: " + response.data[i].fullName);



            //Park Address Variables 

            var line1 = response.data[i].addresses[0].line1;
            var cityAddress = response.data[i].addresses[0].city;
            var zipCode = response.data[i].addresses[0].postalCode;
            var stateShort = response.data[i].addresses[0].stateCode;

            // Park Address 
            $("#adventure-results").append(parkAddress);
            parkAddress.attr("class", "address");
            parkAddress.text("Address: " + line1 + ". " + cityAddress + ", " + stateShort + ", " + zipCode);



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

            $("#adventure-results").append(parkDescription);
            parkDescription.attr("class", "description");
            parkDescription.text("Park Description: " + response.data[i].description);


            //Park Activities
            var activities = [];
            var arrActivities = response.data[i].activities;

            
            for (var j = 0; j < arrActivities.length; j++) {
                activities.push(arrActivities[j].name);
                if( j === 4) break;
            }

            if(activities[activities.length - 1] === " ") activities = activities.substr(1,activities.length - 2);
            $("#adventure-results").append(parkActivies);
                parkActivies.attr("class", "activities");
                parkActivies.text("Activities: " + activities.join(", ") + ".");

            //Park URL 

            $("#adventure-results").append(parkURL);
            parkURL.attr("class", "park-url");
            parkURL.attr("href", response.data[i].url);
            parkURL.attr("target", "_blank");
            parkURL.text(response.data[i].url);




            var latLong = response.data[i].latLong;
            console.log(latLong);
        }
    })