var searchedState = JSON.parse(localStorage.getItem("searchedState")) || [];
//Creating  buttons
function renderSearchedStates() {
    $("#historyRow").empty();

    console.log("before loop" + searchedState);
    for (var i = 0; i < searchedState.length; i++) {
        console.log(searchedState[i]);
        var btn = $("<button>");
        btn.addClass("state-btn waves-effect brown waves-light btn-small");
        btn.text(searchedState[i]);
        $("#historyRow").append(btn);
    }
}

function renderStateParkInfo(stateSelected) {

    $("#all-results").empty();
    var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSelected + "&api_key=vLYmRUPhuQGHTx4RzNCKvg3aovxdPVYFBBIIjKBJ";

    localStorage.setItem("searchedState", JSON.stringify(searchedState));


    $.ajax({
        url: queryURL,
        method: "GET"

    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);

            for (i = 0; i < 10; i++) {

                var parkName = $("<h5>");
                var parkAddress = $("<p>");
                var parkURL = $("<a>");
                var parkDescription = $("<p>");
                var parkActivities = $("<p>");

                var col = $("<div>").addClass("col s12 m12 center parkCol green darken-4")


                //Park Name

                parkName.text(response.data[i].fullName);
                col.append(parkName);
                $("#all-results").append(col);

                //Park Address Variables 

                var line1 = response.data[i].addresses[0].line1;
                var cityAddress = response.data[i].addresses[0].city;
                var zipCode = response.data[i].addresses[0].postalCode;
                var stateShort = response.data[i].addresses[0].stateCode;

                // Park Address 

                $("#adventure-results").append(parkAddress);
                parkAddress.attr("class", "address");
                parkAddress.text("Address: " + line1 + ". " + cityAddress + ", " + stateShort + ", " + zipCode);
                col.append(parkAddress);
                $("#all-results").append(col);


                //Park Description

                $("#adventure-results").append(parkDescription);
                parkDescription.attr("class", "description");
                parkDescription.text("Park Description: " + response.data[i].description);
                col.append(parkDescription);
                $("#all-results").append(col);

                //Park Activities
                var activities = [];
                var arrActivities = response.data[i].activities;


                for (var j = 0; j < arrActivities.length; j++) {
                    activities.push(arrActivities[j].name);
                    if (j === 4) break;
                }

                if (activities[activities.length - 1] === " ") activities = activities.substr(1, activities.length - 2);
                $("#adventure-results").append(parkActivities);
                parkActivities.attr("class", "activities");
                parkActivities.text("Activities: " + activities.join(", ") + ".");
                col.append(parkActivities);
                $("#all-results").append(col);

                //Park URL 

                $("#adventure-results").append(parkURL);
                parkURL.attr("class", "park-url");
                parkURL.attr("href", response.data[i].url);
                parkURL.attr("target", "_blank");
                parkURL.text(response.data[i].url);
                col.append(parkURL);
                $("#all-results").append(col);



                var latLong = response.data[i].latLong;
                console.log(latLong);
            }

        })
}

$("#historyRow").on("click", ".state-btn", function () {
    var stateSelected = $(this).text();
    renderStateParkInfo(stateSelected);
    console.log("clicked state button!");
    
})

$(".list-item").on("click", function () {
    

    var stateSelected = $(this).text();

    if (!searchedState.includes(stateSelected)) {
        searchedState.push(stateSelected);
        renderSearchedStates();
    };

    renderStateParkInfo(stateSelected);
});

renderSearchedStates();