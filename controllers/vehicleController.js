var baseurl="http://localhost:8082/api/vehicleService";



// Search Vehicle Event
$("#btn-search-vehicle").click(function (event) {
    searchVehicle();
})


// Save Vehicle Event
$("#btn-save-vehicle").click(function (event) {
    saveVehicle();
})


// Update Vehicle Event
$("#btn-update-vehicle").click(function (event) {
    updateVehicle();
})


//Delete Vehicle Event
$("#btn-delete-vehicle").click(function (event) {
    deleteVehicle();
})




//Load All Vehicle
function loadAllVehicle() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const vehicle of resp.data) {
                let row = `<tr><td>${vehicle.vehicleId}</td>
                           <td>${vehicle.vehicle_brand}</td>
                           <td>${vehicle.fuel_type}</td>
                           <td>${vehicle.hybrid_or_Non_Hybrid}</td>
                           <td>${vehicle.fuel_usage}</td>
                           <td>${vehicle.transmission_type}</td>
                           <td>${vehicle.driver_Contact}</td>
                           <td>${vehicle.driver_Name}</td>
                           <td>${vehicle.seat_capacity}</td>
                           <td>${vehicle.remarks_Vehicle}</td></tr>`;
                $("#Vehicle-admin-table").append(row);

            }
            bindClickEvents();

        }

    });
}



//Save Vehicle
function saveVehicle() {
    var data = $("#vehicle-form").serialize();
    $.ajax({
        url: baseurl,
        method:"POST",
        data: data,
        success: function (res) {

            console.log(res)
            if (res.code == 200) {
                alert("Successfully Saved ")
                loadAllVehicle();
                clearForm();
            }    },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}



//Delete Vehicle
function deleteVehicle() {
    //Get the guide id
    let vehicleId = $("#vehicleId").val();


    $.ajax({
        url: baseurl+"?id=" + vehicleId,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                alert("Booking Successfully deleted");
                loadAllVehicle();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    });
}


//Update Vehicle
function updateVehicle() {
    // Json format

    var vehicleData = {
        vehicleId: $("#vehicleId").val(),
        vehicle_brand: $("#Vehicle_brand").val(),
        fuel_type: $("#Fuel_type").val(),
        hybrid_or_Non_Hybrid: $("#Hybrid_or_Non-Hybrid").val(),
        fuel_usage: $("#Fuel_usage").val(),
        transmission_type: $("#Transmission_type").val(),
        license_Image_front: $("#license_Image_front").val(),
        license_Image_back: $("#license_Image_back").val(),
        driver_Contact: $("#Driver_Contact").val(),
        driver_Name: $("#Driver_Name").val(),
        images_vehicle_front: $("#Images_vehicle_front").val(),
        images_vehicle_back: $("#Images_vehicle_back").val(),
        seat_capacity: $("#Seat_capacity").val(),
        remarks_Vehicle: $("#remarks_Vehicle").val(),


    }


    $.ajax({
        url: baseurl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(vehicleData),
        success: function (res) {
            if (res.code == 200) { //process is ok
                alert("Successfully Updated");
                loadAllVehicle();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}


//Search Vehicle
function searchVehicle() {
    var vehicleId = $("#input-search-vehicle").val();
    $.ajax({
        url: baseurl+"/"+vehicleId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var vehicle= res.data;

                $("#vehicleId").val(vehicle.vehicleId);
                $("#Vehicle_brand").val(vehicle.vehicle_brand);
                $("#Fuel_type").val(vehicle.fuel_type);
                $("#Hybrid_or_Non-Hybrid").val(vehicle.hybrid_or_Non_Hybrid);
                $("#Fuel_usage").val(vehicle.fuel_usage);
                $("#Transmission_type").val(vehicle.transmission_type);
                $("#license_Image_front").val(vehicle.license_Image_front);
                $("#license_Image_back").val(vehicle.license_Image_back);
                $("#Driver_Contact").val(vehicle.driver_Contact);
                $("#Driver_Name").val(vehicle.driver_Name);
                $("#Images_vehicle_front").val(vehicle.images_vehicle_front);
                $("#Images_vehicle_back").val(vehicle.images_vehicle_back);
                $("#Seat_capacity").val(vehicle.seat_capacity);
                $("#remarks_Vehicle").val(vehicle.remarks_Vehicle);

            }else {
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }

    })
}


//Clear Vehicle Input Fields
function clearForm() {

    $("#vehicleId").val("");
    $("#Vehicle_brand").val("");
    $("#Fuel_type").val("");
    $("#Hybrid_or_Non-Hybrid").val("");
    $("#Fuel_usage").val("");
    $("#Transmission_type").val("");
    $("#license_Image_front").val("");
    $("#license_Image_back").val("");
    $("#Driver_Contact").val("");
    $("#Driver_Name").val("");
    $("#Images_vehicle_front").val("");
    $("#Images_vehicle_back").val("");
    $("#Seat_capacity").val("");
    $("#remarks_Vehicle").val("");
    $("#vehicleId").focus("");

}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#Vehicle-admin-table>tr").click(function () {

        let vehicleId= $(this).children().eq(0).text();
        let vehicle_brand= $(this).children().eq(1).text();
        let fuel_type= $(this).children().eq(2).text();
        let  hybrid_or_Non_Hybrid = $(this).children().eq(3).text();
        let fuel_usage= $(this).children().eq(4).text();
        let transmission_type = $(this).children().eq(5).text();
        let  driver_Contact= $(this).children().eq(6).text();
        let driver_Name = $(this).children().eq(7).text();
        let seat_capacity = $(this).children().eq(8).text();
        let remarks_Vehicle = $(this).children().eq(9).text();



        //Set values to the text-fields

        $("#vehicleId").val(vehicleId);
        $("#Vehicle_brand").val(vehicle_brand);
        $("#Fuel_type").val(fuel_type);
        $("#Hybrid_or_Non-Hybrid").val(hybrid_or_Non_Hybrid);
        $("#Fuel_usage").val(fuel_usage);
        $("#Transmission_type").val(transmission_type);
       $("#Driver_Contact").val(driver_Contact);
        $("#Driver_Name").val(driver_Name);
        $("#Seat_capacity").val(seat_capacity);
        $("#remarks_Vehicle").val(remarks_Vehicle);



    });
}