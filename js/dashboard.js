$(document).ready(function () {
    allNoneDash();
/*    dashBoardPage();*/

    $("#btn-admin-home").click(function () {
        allNoneDash();
        homePage();
        about();
        tourPackages();
        contact();
    });


    $('#btn-admin-travel').click(function () {
        allNoneDash();
        travelPage();
    });



    $('#btn-admin-hotel').click(function () {
        allNoneDash();
        HotelPage();
    });



    $('#btn-admin-transport').click(function () {
        allNoneDash();
        transportPage();
    });




    $('#admin-hotel-reg-form').click(function () {
        allNoneDash();
        hotelsForm();
    });



    $('#admin-vehicle-reg-form').click(function () {
        allNoneDash();
        vehicleForm();
    });


    $('#admin-booking-reg-form').click(function () {
        allNoneDash();
        bookingForm();
    });



    $('#admin-guide-reg-form').click(function () {
        allNoneDash();
        guideForm();
    });



    $('#btn-admin-dashboard').click(function () {
        allNoneDash();
      /*  dashBoardPage();*/
    });


})





function allNoneDash(){

    $('#sec-home').addClass('d-none');
    $('#sec-about-page').addClass('d-none');
    $('#sec-tour-Packages').addClass('d-none');
    $('#sec-contact').addClass('d-none');
    $('#sec-travel-Visit').addClass('d-none');
    $('#sec-view-hotel').addClass('d-none');
    $('#sec-vehicle-page').addClass('d-none');
    $('#sec-guide').addClass('d-none');
    $('#sec-bookingTour').addClass('d-none');
    $('#sec-admin-register').addClass('d-none');
    $('#sec-admin-hotel').addClass('d-none');
    $('#sec-user-register').addClass('d-none');
    $('#login-page').addClass('d-none');
    $('#sec-booking-dash').addClass('d-none');
    $('#sec-hotel-dash').addClass('d-none');
    $('#sec-guide-dash').addClass('d-none');
    $('#sec-vehicle-dash').addClass('d-none');
  /*  $('#sec-admin-dashBoard').addClass('d-none');

*/
}

/* pages */




/* sec-view-hotel  */
function HotelPage() {
    let sec = $('#sec-view-hotel');
    if (sec.hasClass("d-none")) {
        $('#sec-view-hotel').removeClass('d-none');
    }
    $('#sec-view-hotel').addClass('d-block');
}



/* sec-travel-Visit */
function travelPage() {
    let sec = $('#sec-travel-Visit');
    if (sec.hasClass("d-none")) {
        $('#sec-travel-Visit').removeClass('d-none');
    }
    $('#sec-travel-Visit').addClass('d-block');
}




/* sec-vehicle-page -*/
function transportPage() {
    let sec = $('#sec-vehicle-page');
    if (sec.hasClass("d-none")) {
        $('#sec-vehicle-page').removeClass('d-none');
    }
    $('#sec-vehicle-page').addClass('d-block');
}








/* home page */
function homePage() {
    if ($('#sec-home').hasClass('d-none')) $('#sec-home').removeClass('d-none')
    $('#sec-home').add('d-block')
}


function about() {
    if ($('#sec-about-page').hasClass('d-none')) $('#sec-about-page').removeClass('d-none')
    $('#sec-about-page').add('d-block')
}



function tourPackages() {
    if ($('#sec-tour-Packages').hasClass('d-none')) $('#sec-tour-Packages').removeClass('d-none')
    $('#sec-tour-Packages').add('d-block')
}



function contact() {
    if ($('#sec-contact').hasClass('d-none')) $('#sec-contact').removeClass('d-none')
    $('#sec-contact').add('d-block')
}




/* forms */

/* sec-booking-dash */


function bookingForm() {
    let sec = $('#sec-booking-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-booking-dash').removeClass('d-none');
    }
    $('#sec-booking-dash').addClass('d-block');
}



/* sec-hotel-dash */


function hotelsForm() {
    let sec = $('#sec-hotel-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-hotel-dash').removeClass('d-none');
    }
    $('#sec-hotel-dash').addClass('d-block');
}



/* sec-hotel-dash */


function guideForm() {
    let sec = $('#sec-guide-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-guide-dash').removeClass('d-none');
    }
    $('#sec-guide-dash').addClass('d-block');
}




/* sec-vehicle-dash */


function vehicleForm() {
    let sec = $('#sec-vehicle-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-vehicle-dash').removeClass('d-none');
    }
    $('#sec-vehicle-dash').addClass('d-block');
}


/* sec-vehicle-dash */

/*

function dashBoardPage() {
    let sec = $('#sec-admin-dashBoard');
    if (sec.hasClass("d-none")) {
        $('#sec-admin-dashBoard').removeClass('d-none');
    }
    $('#sec-admin-dashBoard').addClass('d-block');
}*/
