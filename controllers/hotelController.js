var baseurl="http://localhost:8084/api/hotelService";



// Search Hotel Event
$("#btn-search-hotel").click(function (event) {
    searchHotel();
})


// Save Hotel Event
$("#btn-save-hotel").click(function (event) {
    saveHotel();
})


// Update Hotel Event
$("#btn-update-hotel").click(function (event) {
    updateHotel();
})


//Delete Hotel Event
$("#btn-delete-hotel").click(function (event) {
    deleteHotel();
})




//Load All Hotel
function loadAllHotel() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const hotel of resp.data) {
                let row = `<tr><td>${hotel.hotelId}</td>
                           <td>${hotel.hotel_Name}</td>
                           <td>${hotel.hotel_Location}</td>
                           <td>${hotel.petsAllowed_or_not}</td>
                           <td>${hotel.hotel_Contact1}</td>
                           <td>${hotel.hotel_Contact2}</td>
                           <td>${hotel.hotel_Email}</td>
                           <td>${hotel.opt1}</td>
                           <td>${hotel.opt2}</td>
                           <td>${hotel.opt3}</td>
                           <td>${hotel.remarks_Hotel}</td></tr>`;
                $("#hotel-admin-table").append(row);

            }
            bindClickEvents();

        }

    });
}



//Save Hotel
function saveHotel() {
    var data = $("#hotel-form").serialize();
    $.ajax({
        url: baseurl,
        method:"POST",
        data: data,
        success: function (res) {

            if (res.code == 200) {
                alert("Successfully Saved ")
                loadAllHotel();
                clearForm();
            }    },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}



//Delete Hotel
function deleteHotel() {
    //Get the hotel id
    let hotelId= $("#hotelId").val();


    $.ajax({
        url: baseurl+"?id=" + hotelId,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                alert("Hotel Successfully deleted");
                loadAllHotel();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    });
}


//Update Hotel
function updateHotel() {
    // Json format

    var hotelData = {
        hotelId: $("#hotelId").val(),
        hotel_Name: $("#Hotel_Name").val(),
        hotel_Location: $("#Hotel_Location").val(),
        petsAllowed_or_not: $("#PetsAllowed_or_not").val(),
        hotel_Contact1: $("#Hotel_Contact1").val(),
        hotel_Contact2: $("#Hotel_Contact2").val(),
        hotel_Email: $("#Hotel_Email").val(),
        opt1: $("#opt1").val(),
        opt2: $("#opt2").val(),
        opt3: $("#opt3").val(),
        remarks_Hotel: $("#remarks_Hotel").val(),


    }


    $.ajax({
        url: baseurl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(hotelData),
        success: function (res) {
            if (res.code == 200) { //process is ok
                alert("Successfully Updated");
                loadAllHotel();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}


//Search Hotel
function searchHotel() {
    var hotelId = $("#input-search-hotel").val();
    $.ajax({
        url: baseurl+"/"+hotelId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var hotel= res.data;

                $("#hotelId").val(hotel.hotelId);
                $("#Hotel_Name").val(hotel.hotel_Name);
                $("#Hotel_Location").val(hotel.hotel_Location);
                $("#PetsAllowed_or_not").val(hotel.petsAllowed_or_not);
                $("#Hotel_Contact1").val(hotel.hotel_Contact1);
                $("#Hotel_Contact2").val(hotel.hotel_Contact2);
                $("#Hotel_Email").val(hotel.hotel_Email);
                $("#opt1").val(hotel.opt1);
                $("#opt2").val(hotel.opt2);
                $("#opt3").val(hotel.opt3);
                $("#remarks_Hotel").val(hotel.remarks_Hotel);

            }else {
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }

    })
}


//Clear Hotel Input Fields
function clearForm() {

    $("#hotelId").val("");
    $("#Hotel_Name").val("");
    $("#Hotel_Location").val("");
    $("#PetsAllowed_or_not").val("");
    $("#Hotel_Contact1").val("");
    $("#Hotel_Contact2").val("");
    $("#Hotel_Email").val("");
    $("#opt1").val("");
    $("#opt2").val("");
    $("#opt3").val("");
    $("#remarks_Hotel").val("");
    $("#hotelId").focus();

}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#hotel-admin-table>tr").click(function () {
        let hotelId = $(this).children().eq(0).text();
        let hotel_Name= $(this).children().eq(1).text();
        let hotel_Location= $(this).children().eq(2).text();
        let  petsAllowed_or_not = $(this).children().eq(3).text();
        let hotel_Contact1= $(this).children().eq(4).text();
        let hotel_Contact2 = $(this).children().eq(5).text();
        let  hotel_Email= $(this).children().eq(6).text();
        let opt1 = $(this).children().eq(7).text();
        let opt2 = $(this).children().eq(8).text();
        let opt3 = $(this).children().eq(9).text();
        let remarks_Hotel = $(this).children().eq(10).text();




        //Set values to the text-fields
        $("#hotelId").val(hotelId);
        $("#Hotel_Name").val(hotel_Name);
        $("#Hotel_Location").val(hotel_Location);
        $("#PetsAllowed_or_not").val(petsAllowed_or_not);
        $("#Hotel_Contact1").val(hotel_Contact1);
        $("#Hotel_Contact2").val( hotel_Contact2);
        $("#Hotel_Email").val(hotel_Email);
        $("#opt1").val( opt1);
        $("#opt2").val(opt2);
        $("#opt3").val(opt3);
        $("#remarks_Hotel").val(remarks_Hotel);


    });
}
