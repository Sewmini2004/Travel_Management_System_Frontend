var baseurl="http://localhost:8081/api/userService";



// Save  AdminUser Event
$("#btn-save-adminUser").click(function (event) {
    registerUser();
})


// Update  AdminUser Event
$("#btn-update-adminUser").click(function (event) {
    updateUser();
})


//Delete  AdminUser Event
$("#btn-delete-adminUser").click(function (event) {
    deleteUser();
})

//Search AdminUser Event
$("#btn-search-adminUserRegister").click(function (event) {
    searchUser();
})



//Load All  AdminUsers
function loadAllUser() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json", //please convert the response into JSON
        success: function (resp) {
            for (const adminUser of resp.data) {
                let row = `<tr><td>${adminUser.userId2}</td>
                           <td>${adminUser.username2}</td>
                           <td>${adminUser.email2}</td>
                           <td>${adminUser.address2}</td>
                           <td>${adminUser.nic2}</td>
                           <td>${adminUser.gender2}</td>
                           <td>${adminUser.remarks2}</td></tr>`;
                $("#admin_User-table").append(row);

            }
            bindClickEvents();
            }

    });
}



//Register AdminUser
function registerUser() {
    var data = $("#admin-UserReg-form").serialize();  // query sring ekka hdanwa
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



//Delete AdminUser
function deleteUser() {
    //Get the AdminUser id
    let userId = $("#userId2").val();

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


//Update AdminUser
function updateUser() {
    // Json format

    var userData = {
        id: $("#userId2").val(),
        name: $("#username2").val(),
        password: $("#password2").val(),
        email: $("#email2").val(),
        address: $("#address2").val(),
        nic: $("#nic2").val(),
        gender: $("#gender2").val(),
        remarks: $("#remarks2").val(),
        nic_image_front: $("#nic-image1").val(),
        nic_image_back: $("#nic-imag2").val(),

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


//Search AdminUser
function searchUser() {
    var userId = $("#input-search-adminUserRegister").val();
    $.ajax({
        url: baseurl+"/"+userId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var user = res.data;

                $("#userId2").val(user.id);
                $("#username2").val(user.name);
                $("#password2").val(user.password);
                $("#email2").val(user.email);
                $("#address2").val(user.address);
                $("#nic2").val(user.nic);
                $("#gender2").val(user.gender);
                $("#remarks2").val(user.remarks);
                $("#nic-image1").val(user.nic_image_front);
                $("#nic-image2").val(user.nic_image_back);


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
    $("#userId2").val("");
    $("#username2").val("");
    $("#password2").val("");
    $("#email2").val("");
    $("#address2").val("");
    $("#nic2").val("");
    $("#gender2").val("");
    $("#remarks2").val("");
    $("#nic-image1").val("");
    $("#nic-imag2").val("");
    $("#userId2").focus();




}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#admin_User-table>tr").click(function () {
        let  userId= $(this).children().eq(0).text();
        let username= $(this).children().eq(1).text();
        let password= $(this).children().eq(2).text();
        let email= $(this).children().eq(3).text();
        let  address = $(this).children().eq(4).text();
        let nic= $(this).children().eq(5).text();
        let gender = $(this).children().eq(6).text();
        let  remarks= $(this).children().eq(7).text();




        //Set values to the text-fields


        $("#userId2").val(userId);
        $("#username2").val(username);
        $("#password2").val(password);
        $("#email2").val(email);
        $("#address2").val(address);
        $("#nic2").val(nic);
        $("#gender2").val(gender);
        $("#remarks2").val(remarks);


    });
}