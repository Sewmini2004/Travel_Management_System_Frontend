var baseurl="http://localhost:8083/api/guideService";



// Search Guide Event
$("#btn-search-guide").click(function (event) {
    searchGuide();
})


// Save Guide Event
$("#btn-save-guide").click(function (event) {
    saveGuide();
})


// Update Guide Event
$("#btn-update-guide").click(function (event) {
    updateGuide();
})


//Delete Booking Event
$("#btn-delete-guide").click(function (event) {
    deleteGuide();
})




//Load All Guide
function loadAllGuide() {
    $.ajax({
        url:baseurl,
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const guide of resp.data) {
                let row = `<tr><td>${guide.guideId}</td>
                           <td>${guide.guide_Name}</td>
                           <td>${guide.guide_Address}</td>
                           <td>${guide.gender_gui}</td>
                           <td>${guide.guide_Contact}</td>
                           <td>${guide.experience}</td>
                           <td>${guide.man_day_value}</td>
                           <td>${guide.remarks_Gu}</td></tr>`;
                $("#guide_table").append(row);

            }
            bindClickEvents();

        }

    });
}



//Save Guide
function saveGuide() {
    var data = $("#Guide-form").serialize();
    $.ajax({
        url: baseurl,
        method:"POST",
        data: data,
        success: function (res) {

            console.log(res)
            if (res.code == 200) {
                alert("Successfully Saved ")
                loadAllGuide();
                clearForm();
            }    },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}



//Delete Guide
function deleteGuide() {
    //Get the guide id
    let guideId = $("#GuideId").val();


    $.ajax({
        url: baseurl+"?id=" + guideId,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                alert("Booking Successfully deleted");
                loadAllGuide();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    });
}


//Update Guide
function updateGuide() {
    // Json format

    var guideData = {
        guideId: $("#GuideId").val(),
        guide_Name: $("#Guide_Name").val(),
        guide_Address: $("#Guide_Address").val(),
        gender_gui: $("#Gender_gui").val(),
        guide_Contact: $("#Guide_Contact").val(),
        nic_image_guide_f: $("#nic-image_guide_f").val(),
        nic_image_guide_b: $("#nic-image_guide_b").val(),
        id_image_guide_f: $("#id-image_guide_f").val(),
        id_image_guide_b: $("#id-image_guide_b").val(),
        experience: $("#experience").val(),
        man_day_value: $("#Man-day_value").val(),
        remarks_Gu: $("#remarks_Gu").val(),

    }


    $.ajax({
        url: baseurl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(guideData),
        success: function (res) {
            if (res.code == 200) { //process is ok
                alert("Successfully Updated");
                loadAllGuide();
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }
    })
}


//Search Guide
function searchGuide() {
    var guideId = $("#input-search-guide").val();
    $.ajax({
        url: baseurl+"/"+guideId,
        method: "GET",

        success: function (res) {
            if (res.code==200) {
                var guide= res.data;


                    $("#GuideId").val(guide.guideId);
                    $("#Guide_Name").val(guide.guide_Name);
                    $("#Guide_Address").val(guide.guide_Address);
                    $("#Gender_gui").val(guide.gender_gui);
                    $("#Guide_Contact").val(guide.guide_Contact);
                    $("#nic-image_guide_f").val(guide.nic_image_guide_f);
                    $("#nic-image_guide_b").val(guide.nic_image_guide_b);
                    $("#id-image_guide_f").val(guide.id_image_guide_f);
                    $("#id-image_guide_b").val(guide.id_image_guide_b);
                    $("#experience").val(guide.experience);
                    $("#Man-day_value").val(guide.man_day_value);
                    $("#remarks_Gu").val(guide.remarks_Gu);

            }else {
                clearForm();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);


        }

    })
}


//Clear Guide Input Fields
function clearForm() {


    $("#GuideId").val("");
    $("#Guide_Name").val("");
    $("#Guide_Address").val("");
    $("#Gender_gui").val("");
    $("#Guide_Contact").val("");
    $("#nic-image_guide_f").val("");
    $("#nic-image_guide_b").val("");
    $("#id-image_guide_f").val("");
    $("#id-image_guide_b").val("");
    $("#experience").val("");
    $("#Man-day_value").val("");
    $("#remarks_Gu").val("");
    $("#GuideId").focus();

}



//bind click events to the table row
function bindClickEvents() {
    //Get values from the selected row
    $("#booking_table>tr").click(function () {
        let  guideId= $(this).children().eq(0).text();
        let guide_Name= $(this).children().eq(1).text();
        let guide_Address= $(this).children().eq(2).text();
        let  gender_gui = $(this).children().eq(3).text();
        let guide_Contact= $(this).children().eq(4).text();
        let experience = $(this).children().eq(5).text();
        let  man_day_value= $(this).children().eq(6).text();
        let remarks_Gu = $(this).children().eq(7).text();



        //Set values to the text-fields


        $("#GuideId").val(guideId);
        $("#Guide_Name").val(guide_Name);
        $("#Guide_Address").val(guide_Address);
        $("#Gender_gui").val(gender_gui);
        $("#Guide_Contact").val(guide_Contact);
        $("#experience").val(experience);
        $("#Man-day_value").val(man_day_value);
        $("#remarks_Gu").val(remarks_Gu);

    });
}