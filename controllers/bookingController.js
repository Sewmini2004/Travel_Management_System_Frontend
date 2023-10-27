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
        dataType: "json", //please convert the response into JSON
        success: function (resp) {
            console.log(resp);


            for (const student of resp.data) {
                let row = `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.address}</td><td>${student.salary}</td></tr>`;
                $("#tblStudentJson").append(row);

            }
            bindClickEvents();
            clearForm();
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
                alert("Customer Successfully deleted");
                loadAllUser();
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

    var userData = {
        packageId: $("#packageId").val(),
        package_cate: $("#package_cate").val(),
        hotel_Category: $("#hotel_Category").val(),
        email: $("#email2").val(),
        address: $("#address").val(),
        nic: $("#nic").val(),
        gender: $("#gender").val(),
        remarks: $("#remarks").val(),
        nic_image_front: $("#nic-image").val(),
        nic_image_back: $("#nic-imag3").val(),

    }


    $.ajax({
        url: baseurl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(userData),
        success: function (res) {
            if (res.code == 200) { //process is ok
                alert("Successfully Updated");
                loadAllUser();
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
    var userId = $("#input-search-bookingd").val();
    $.ajax({
        url: baseurl+"/"+userId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var user = res.data;

                $("#userId").val(user.id);
                $("#username").val(user.name);
                $("#password").val(user.password);
                $("#email2").val(user.email);
                $("#address").val(user.address);
                $("#nic").val(user.nic);
                $("#gender").val(user.gender);
                $("#remarks").val(user.remarks);
                $("#nic-image").val(user.nic_image_front);
                $("#nic-imag3").val(user.nic_image_back);

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
    $("#userId").val("");
    $("#username").val("");
    $("#password").val("");
    $("#email2").val("");
    $("#address").val("");
    $("#nic").val("");
    $("#gender").val("");
    $("#remarks").val("");
    $("#nic-image").val("");
    $("#nic-imag3").val("");
    $("#userId").focus();

}