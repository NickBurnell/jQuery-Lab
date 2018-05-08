"use strict";
$(document).click((e) => {
    let tableSelect;
    if ($(e.target).hasClass('available')) {
        console.log('ajekf')
        $('.reserveNow').fadeIn(2000);
        $('#saveBtn').click(() => {
            console.log('this worked');
            $(e.target).addClass("reserved").removeClass("available")
            console.log('wow this worked?')
            $('.reserveNow').fadeOut(2000);
        });
        $('#exitBtn').click(() => {
            console.log('that worked');
            $('.reserveNow').fadeOut(2000);
        });
    }
});
