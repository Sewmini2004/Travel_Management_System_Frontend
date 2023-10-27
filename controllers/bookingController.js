var baseurl="http://localhost:8085/api/travelService";



// Search booking Event
$("#btn-search-booking").click(function (event) {
    searchBooking();
})


// Save Booking Event
$("#btn-save-booking").click(function (event) {
    saveBooking();
})


// Update Booking Event
$("#btn-update-booking").click(function (event) {
    updateBooking();
})


//Delete Booking Event
$("#btn-delete").click(function (event) {
    deleteBooking();
})




//Load All Booking
function loadAllBooking() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json",
        success: function (resp) {
        for (const booking of resp.data) {
                let row = `<tr><td>${booking.packageId}</td>
                           <td>${booking.package_cate}</td>
                           <td>${booking.hotel_Category}</td>
                           <td>${booking.hotel_opt}</td>
                           <td>${booking.vehicle_Category}</td>
                           <td>${booking.start_date}</td>
                           <td>${booking.end_date}</td>
                           <td>${booking.days}</td>
                           <td>${booking.travel_area}</td>
                           <td>${booking.total_headcount}</td>
                           <td>${booking.need_guide_or_no}</td>
                           <td>${booking.hotel_fee}</td>
                           <td>${booking.guide_fee}</td>
                           <td>${booking.vehicle_fee}</td></tr>`;
                $("#booking_table").append(row);

            }
            bindClickEvents();

        }

    });
}



//Save Booking
function saveBooking() {
    var data = $("#user-booking-form").serialize();  // query sring ekka hdanwa
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
    let packageId = $("#packageId").val();


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
        packageId: $("#packageId").val(),
        package_cate: $("#package_cate").val(),
        hotel_Category: $("#hotel_Category").val(),
        hotel_opt: $("#hotel_opt").val(),
        vehicle_Category: $("#Vehicle_Category").val(),
        start_date: $("#start_date").val(),
        end_date: $("#end_date").val(),
        days: $("#days").val(),
        nights: $("#nights").val(),
        travel_area: $("#travel_area").val(),
        no_of_adults: $("#no_of_adults").val(),
        No_of_children: $("#No_of_children").val(),
        total_headcount: $("#total_headcount").val(),
        with_Pets_or_not: $("#with_Pets_or_no").val(),
        need_guide_or_no: $("#need_guide_or_no").val(),
        hotel_fee: $("#hotel_fee").val(),
        guide_fee: $("#guide_fee").val(),
        vehicle_fee: $("#vehicle_fee").val(),
        paid_value: $("#paid_value").val(),
        remarks3: $("#remarks3").val(),


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
    var bookingId = $("#input-search-booking").val();
    $.ajax({
        url: baseurl+"/"+bookingId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var booking = res.data;

                   $("#packageId").val(booking.packageId);
                   $("#package_cate").val(booking.package_cate);
                   $("#hotel_Category").val(booking.hotel_Category);
                   $("#hotel_opt").val(booking.hotel_opt);
                   $("#Vehicle_Category").val(booking.Vehicle_Category);
                   $("#start_date").val(booking.start_date);
                   $("#end_date").val(booking.end_date);
                   $("#days").val(booking.days);
                   $("#nights").val(booking.nights);
                   $("#travel_area").val(booking.travel_area);
                   $("#no_of_adults").val(booking.no_of_adults);
                   $("#No_of_children").val(booking.No_of_children);
                   $("#total_headcount").val(booking.total_headcount);
                   $("#with_Pets_or_no").val(booking.with_Pets_or_not);
                   $("#need_guide_or_no").val(booking.need_guide_or_no);
                   $("#hotel_fee").val(booking.hotel_fee);
                   $("#guide_fee").val(booking.guide_fee);
                   $("#vehicle_fee").val(booking.vehicle_fee);
                   $("#paid_value").val(booking.paid_value);
                   $("#remarks3").val(booking.remarks3);

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

    $("#packageId").val("");
    $("#package_cate").val("");
    $("#hotel_Category").val("");
    $("#hotel_opt").val("");
    $("#Vehicle_Category").val("");
    $("#start_date").val("");
    $("#end_date").val("");
    $("#days").val("");
    $("#nights").val("");
    $("#travel_area").val("");
    $("#no_of_adults").val("");
    $("#No_of_children").val("");
    $("#total_headcount").val("");
    $("#with_Pets_or_no").val("");
    $("#need_guide_or_no").val("");
    $("#hotel_fee").val("");
    $("#guide_fee").val("");
    $("#vehicle_fee").val("");
    $("#paid_value").val("");
    $("#remarks3").val("");
    $("#packageId").focus("");

}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#booking_table>tr").click(function () {
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
        $("#packageId").val(packageId);
        $("#package_cate").val(package_cate);
        $("#hotel_Category").val(hotel_Category);
        $("#hotel_opt").val(hotel_opt);
        $("#Vehicle_Category").val(vehicle_Category);
        $("#start_date").val(start_date);
        $("#end_date").val(end_date);
        $("#days").val(days);
        $("#travel_area").val(travel_area);
        $("#total_headcount").val(total_headcount);
        $("#need_guide_or_no").val(need_guide_or_no);
        $("#hotel_fee").val(hotel_fee);
        $("#guide_fee").val(guide_fee);
        $("#vehicle_fee").val(vehicle_fee);

    });
}