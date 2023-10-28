var baseurl="http://localhost:8085/api/travelService";



// Search booking Event
$("#btn-search-adminBooking").click(function (event) {
    searchBooking();
})


// Save Booking Event
$("#btn-save-adminBooking").click(function (event) {
    saveBooking();
})


// Update Booking Event
$("#btn-update-adminBooking").click(function (event) {
    updateBooking();
})


//Delete Booking Event
$("#btn-delete-adminBooking").click(function (event) {
    deleteBooking();
})


//Clear Booking Event
$("#btn-clear-adminBooking").click(function (event) {
   clearForm();
})




//Load All Booking
function loadAllBooking() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json",
        success: function (resp) {
        for (const booking of resp.data) {
                let row = `<tr><td>${booking.packageId2}</td>
                           <td>${booking.package_cate2}</td>
                           <td>${booking.hotel_Category2}</td>
                           <td>${booking.hotel_opt2}</td>
                           <td>${booking.vehicle_Category2}</td>
                           <td>${booking.start_date2}</td>
                           <td>${booking.end_date2}</td>
                           <td>${booking.days2}</td>
                           <td>${booking.travel_area2}</td>
                           <td>${booking.total_headcount2}</td>
                           <td>${booking.need_guide_or_no2}</td>
                           <td>${booking.hotel_fee2}</td>
                           <td>${booking.guide_fee2}</td>
                           <td>${booking.vehicle_fee2}</td></tr>`;
                $("#adminBooking_table").append(row);

            }
            bindClickEvents();

        }

    });
}



//Save Booking
function saveBooking() {
    var data = $("#user-adminBooking-form").serialize();  // query sring ekka hdanwa
    $.ajax({
        url: baseurl,
        method:"POST",
        data: data, // if we send data with the request
        success: function (res) {

            console.log(res)
            if (res.code == 200) {
                alert("Successfully Saved ")
                loadAllBooking();
                clearForm();
            }    },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}



//Delete Booking
function deleteBooking() {
    //Get the booking id
    let packageId = $("#packageId2").val();


    $.ajax({
        url: baseurl+"?id=" + packageId,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                alert("Booking Successfully deleted");
                loadAllBooking();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    });
}


//Update Booking
function updateBooking() {
    // Json format

    var bookingData = {
        packageId2: $("#packageId2").val(),
        package_cate2: $("#package_cate2").val(),
        hotel_Category2: $("#hotel_Category2").val(),
        hotel_opt2: $("#hotel_opt2").val(),
        vehicle_Category2: $("#Vehicle_Category2").val(),
        start_date2: $("#start_date2").val(),
        end_date2: $("#end_date2").val(),
        days2: $("#days2").val(),
        nights2: $("#nights2").val(),
        travel_area2: $("#travel_area2").val(),
        no_of_adults2: $("#no_of_adults2").val(),
        No_of_children2: $("#No_of_children2").val(),
        total_headcount2: $("#total_headcount2").val(),
        with_Pets_or_not2: $("#with_Pets_or_no2").val(),
        need_guide_or_no2: $("#need_guide_or_no2").val(),
        hotel_fee2: $("#hotel_fee2").val(),
        guide_fee2: $("#guide_fee2").val(),
        vehicle_fee2: $("#vehicle_fee2").val(),
        paid_value2: $("#paid_value2").val(),
        remarks: $("#remarks").val(),


    }


    $.ajax({
        url: baseurl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(bookingData),
        success: function (res) {
            if (res.code == 200) { //process is ok
                alert("Successfully Updated");
                loadAllBooking();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}


//Search Booking
function searchBooking() {
    var bookingId = $("#input-search-adminBooking").val();
    $.ajax({
        url: baseurl+"/"+bookingId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var booking = res.data;

                   $("#packageId2").val(booking.packageId2);
                   $("#package_cate2").val(booking.package_cate2);
                   $("#hotel_Category2").val(booking.hotel_Category2);
                   $("#hotel_opt2").val(booking.hotel_opt2);
                   $("#Vehicle_Category2").val(booking.Vehicle_Category2);
                   $("#start_date2").val(booking.start_date2);
                   $("#end_date2").val(booking.end_date2);
                   $("#days2").val(booking.days2);
                   $("#nights2").val(booking.nights2);
                   $("#travel_area2").val(booking.travel_area2);
                   $("#no_of_adults2").val(booking.no_of_adults2);
                   $("#No_of_children2").val(booking.No_of_children2);
                   $("#total_headcount2").val(booking.total_headcount2);
                   $("#with_Pets_or_no2").val(booking.with_Pets_or_not2);
                   $("#need_guide_or_no2").val(booking.need_guide_or_no2);
                   $("#hotel_fee2").val(booking.hotel_fee2);
                   $("#guide_fee2").val(booking.guide_fee2);
                   $("#vehicle_fee2").val(booking.vehicle_fee2);
                   $("#paid_value2").val(booking.paid_value2);
                   $("#remarks").val(booking.remarks);

            }else {
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }

    })
}


//Clear Booking Input Fields
function clearForm() {

    $("#packageId2").val("");
    $("#package_cate2").val("");
    $("#hotel_Category2").val("");
    $("#hotel_opt2").val("");
    $("#Vehicle_Category2").val("");
    $("#start_date2").val("");
    $("#end_date2").val("");
    $("#days2").val("");
    $("#nights2").val("");
    $("#travel_area2").val("");
    $("#no_of_adults2").val("");
    $("#No_of_children2").val("");
    $("#total_headcount2").val("");
    $("#with_Pets_or_no2").val("");
    $("#need_guide_or_no2").val("");
    $("#hotel_fee2").val("");
    $("#guide_fee2").val("");
    $("#vehicle_fee2").val("");
    $("#paid_value2").val("");
    $("#remarks").val("");
    $("#packageId2").focus("");

}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#adminBooking_table>tr").click(function () {
        let  packageId= $(this).children().eq(0).text();
        let package_cate= $(this).children().eq(1).text();
        let hotel_Category= $(this).children().eq(2).text();
        let hotel_opt = $(this).children().eq(3).text();
        let vehicle_Category= $(this).children().eq(4).text();
        let start_date = $(this).children().eq(5).text();
        let end_date = $(this).children().eq(6).text();
        let days = $(this).children().eq(7).text();
        let travel_area = $(this).children().eq(8).text();
        let total_headcount = $(this).children().eq(9).text();
        let  need_guide_or_no= $(this).children().eq(10).text();
        let hotel_fee = $(this).children().eq(11).text();
        let guide_fee = $(this).children().eq(12).text();
        let vehicle_fee = $(this).children().eq(13).text();

        //Set values to the text-fields
        $("#packageId2").val(packageId);
        $("#package_cate2").val(package_cate);
        $("#hotel_Category2").val(hotel_Category);
        $("#hotel_opt2").val(hotel_opt);
        $("#Vehicle_Category2").val(vehicle_Category);
        $("#start_date2").val(start_date);
        $("#end_date2").val(end_date);
        $("#days2").val(days);
        $("#travel_area2").val(travel_area);
        $("#total_headcount2").val(total_headcount);
        $("#need_guide_or_no2").val(need_guide_or_no);
        $("#hotel_fee2").val(hotel_fee);
        $("#guide_fee2").val(guide_fee);
        $("#vehicle_fee2").val(vehicle_fee);

    });
}