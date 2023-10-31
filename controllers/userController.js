var baseurl="http://localhost:8081/api/userService";



// Save User Event
$("#btn-register").click(function (event) {
    registerUser();
})


// Update User Event
$("#btn-update").click(function (event) {
    updateUser();
})


//Delete User Event
$("#btn-delete").click(function (event) {
    deleteUser();
})


//Load All Users
function loadAllUser() {
    $.ajax({
        url:baseurl,
        method: "GET",
         dataType: "json", //please convert the response into JSON
        success: function (resp) {
            console.log(resp);

        }

    });
}



//Register User
function registerUser() {
    var data = $("#user-reg-form").serialize();  // query sring ekka hdanwa
    $.ajax({
        url: baseurl,
        method:"POST",
        data: data, // if we send data with the request
        success: function (res) {

            console.log(res)
            if (res.code == 200) {
                alert("Successfully Saved ")
                loadAllUser();
                clearForm();
            }    },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}



//Delete User
function deleteUser() {
    //Get the user id
    let userId = $("#userId").val();


    $.ajax({
        url: baseurl+"?id=" + userId,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                alert("User Successfully deleted");
                loadAllUser();
                clearForm();
            }
            },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    });
}


//Update User
function updateUser() {
    // Json format

    var userData = {
        id: $("#userId").val(),
        name: $("#username").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        nic: $("#nic").val(),
        gender: $("#gender").val(),
        remarks: $("#remarks_user").val(),
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


//Search User
function searchUser() {

    var userId = $("#userId").val();
    $.ajax({
        url: baseurl+"/"+userId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var user = res.data;

                $("#userId").val(user.id);
                $("#username").val(user.name);
                $("#password").val(user.password);
                $("#email").val(user.email);
                $("#address").val(user.address);
                $("#nic").val(user.nic);
                $("#gender").val(user.gender);
                $("#remarks_user").val(user.remarks);
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


//Clear User Input Fields
function clearForm() {
    $("#userId").val("");
    $("#username").val("");
    $("#password").val("");
    $("#email").val("");
    $("#address").val("");
    $("#nic").val("");
    $("#gender").val("");
    $("#remarks_user").val("");
    $("#nic-image").val("");
    $("#nic-imag3").val("");
    $("#userId").focus();
}