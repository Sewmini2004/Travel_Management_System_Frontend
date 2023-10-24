$(document).ready(function () {
    allNone();
    homePage();
    about();
    tourPackages();
    contact();


    $("#btnSignUp").click(function () {
        allNone();
        signUpPage();
    });

    $('#btn-booking').click(function () {
        allNone();
        bookingPage();
    });


    $("#linkHome").click(function () {
        allNone();
        homePage();
        about();
        tourPackages();
        contact();
    });


    $('#linkVehicle').click(function () {
        allNone();
        transportPage();
    });


    $('#linkHotel').click(function () {
        allNone();
        HotelPage();
    });



    $('#linktravelPlace').click(function () {
        allNone();
        travelPage();
    });


    $('#btn-location').click(function () {
        allNone();
        travelPage();
    });

    $('#btn-transport').click(function () {
        allNone();
        transportPage();
    });

    $('#btn-hotel').click(function () {
        allNone();
        HotelPage();
    });

    $('#home-btn').click(function () {
        allNone();
        contactPage();
    });



    $('#btn-Booking-Nav').click(function () {
        allNone();
        bookingPage();
    });

})

function allNone() {

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
    $('#sec-admin-dashBoard').addClass('d-none');
    $('#sec-user-register').addClass('d-none');

}




/* sec-user-register */

function signUpPage() {
    let sec = $('#sec-user-register');
    if (sec.hasClass("d-none")) {
        $('#sec-user-register').removeClass('d-none');
    }
    $('#sec-user-register').addClass('d-block');
}



/* sec-bookingTour */
function bookingPage() {
    let sec = $('#sec-bookingTour');
    if (sec.hasClass("d-none")) {
        $('#sec-bookingTour').removeClass('d-none');
    }
    $('#sec-bookingTour').addClass('d-block');
}




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



/* sec-*/
function contactPage() {
    let sec = $('#sec-contact');
    if (sec.hasClass("d-none")) {
        $('#sec-contact').removeClass('d-none');
    }
    $('#sec-contact').addClass('d-block');
}



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







































//==================================
// navigate($(".sec-customer"));
//
// $("#btnCustomerNav").click(() => navigate($(".sec-customer")));
// $("#btnItemNav").click(() => navigate($(".sec-item")));
// $("#btnOrderNav").click(() => navigate($(".sec-placeOrder")));
//
// function navigate(location) {
//     var sections = $("main>section");
//     for (let i = 0; i < sections.length; i++) {
//         if (sections.eq(i).hasClass('d-block')) {
//             sections.eq(i).removeClass('d-block');
//         } else if (sections.eq(i).hasClass('d-none')) {
//         } else {
//             sections.eq(i).removeClass('d-none');
//         }
//     }
//     location.addClass('d-block');
// }