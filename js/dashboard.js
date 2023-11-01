/* pages */
$(document).ready(function () {
    allNoneDashB();
    dashboard();

    $("#btn-admin-home").click(function () {
        allNoneDashB();
        homePage();
        about();
        tourPackages();
        contact();
    });


    $('#btn-admin-travel').click(function () {
        allNoneDashB();
        travelPage();
    });



    $('#btn-admin-hotel').click(function () {
        allNoneDashB();
        HotelPage();

    });



    $('#btn-admin-transport').click(function () {
        allNoneDashB();
      transportPage();


    });




    $('#admin-hotel-reg-form').click(function () {
        allNoneDashB();
        console.log("All none")
        hotelsForm();
        console.log("hotel")
    });



    $('#admin-vehicle-reg-form').click(function () {
        allNoneDashB();
        console.log("all none")
        vehicleForm();
        console.log("vehicle")

    });

    $('#admin-booking-reg-form').click(function () {
        allNoneDashB();
        adminBookingForm();

    });



    $('#admin-guide-reg-form').click(function () {
        allNoneDashB();
        guideForm();

    });
//ok

    $('#admin-guide-reg-form').click(function () {
        allNoneDashB();
        guideForm();

    });





})


function allNoneDashB(){

    if($('#sec-booking-dash').hasClass('d-block')) $('#sec-booking-dash').removeClass('d-block');
    if($('#sec-hotel-dash').hasClass("d-block")) $('#sec-hotel-dash').removeClass('d-block');
    if($('#sec-guide-dash').hasClass("d-block")) $('#sec-guide-dash').removeClass('d-block');
    if($('#sec-vehicle-dash').hasClass("d-block")) $('#sec-vehicle-dash').removeClass('d-block');
    if($('#sec-admin-userRegister-dash').hasClass("d-block")) $('#sec-admin-userRegister-dash').removeClass('d-block');
    if($('#sec-adminBooking-dash').hasClass("d-block")) $('#sec-adminBooking-dash').removeClass('d-block');
    if($('.js-dashboard').hasClass("d-block")) $('.js-dashboard').removeClass('d-block');


    $('#sec-booking-dash').addClass('d-none');
    $('#sec-hotel-dash').addClass('d-none');
    $('#sec-guide-dash').addClass('d-none');
    $('#sec-vehicle-dash').addClass('d-none');
    $('#sec-admin-userRegister-dash').addClass('d-none');
    $('#sec-adminBooking-dash').addClass('d-none');
    $('.js-dashboard').addClass('d-none');
}







/* sec-view-hotel  */
function HotelPage() {
    let sec = $('#sec-view-hotel');
    sec.removeClass('d-none');
    sec.addClass('d-block');
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
    sec.removeClass('d-none');
    sec.addClass('d-block');
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
    if ($('#sec-contact').hasClass('d-none'))
        $('#sec-contact').removeClass('d-none')
    $('#sec-contact').add('d-block')
}




/* forms */

/* sec-booking-dash */

//mt html tkth pennko
function adminBookingForm() {
    let sec = $('#sec-adminBooking-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-adminBooking-dash').removeClass('d-none');
    }
    $('#sec-adminBooking-dash').addClass('d-block');
}



/* sec-hotel-dash */


function hotelsForm() {
    let sec = $('#sec-hotel-dash');
    if (sec.hasClass("d-none")) {
        sec.removeClass('d-none');
    }
    sec.addClass('d-block');
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
        sec.removeClass('d-none');
        console.log("Run")
    }
    sec.addClass('d-block');

}




/* Admin booking section */


function BookingForm() {
    let sec = $('#sec-booking-dash');
    if (sec.hasClass("d-none")) {
        $('#sec-booking-dash').removeClass('d-none');
    }
    $('#sec-booking-dash').addClass('d-block');
}


/* Admin js-dashboard */


function dashboard() {
    let sec = $('.js-dashboard');
    if (sec.hasClass("d-none")) {
        $('.js-dashboard').removeClass('d-none');
    }
    $('.js-dashboard').addClass('d-block');
}

