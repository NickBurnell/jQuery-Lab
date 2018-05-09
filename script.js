"use strict";
$(document).ready(() => {
    let tableSelect;
    let name;
    let size;
    let table;
    let info = {}
    


   
    $('.available').on('click', (event) => {
        table = $(event.target);
        $('.reserveNow').fadeIn(1000);
        console.log('available cont. clicked');
    }); 
    
    $('#exitBtn').on("click", (event) => {
        console.log(event.target);
        event = ''; // dunno about this..?
        $('.reserveNow').fadeOut(1000);
        console.log('exit btn pressed');
    });

    $('#saveBtn').on('click', (event) => {
        name = $('#name').val();
        size = $('#size').val();
        $('#name').val('');
        $('#size').val('');
        $('#phone').val('');
        table.attr('name', name);
        table.attr('size', size);
        table.addClass('reserved').removeClass('available');
        addHoverData();
        $('.reserveNow').fadeOut(1000);
        console.log(name);
        console.log(size);
        
    });

    function addHoverData() {
        table.append("<div class=\"hoverData\"><div>Guest Name: " + name + "</div><div>Party Size: " + size + "</div></div>");
    }

    $('.reserved').on('mouseenter', (event) => {
        info.name = $(event.target).attr('name');
        info.size = $(event.target).arrt('size');
        console.log(info.name);
        console.log(info.size);
        
    }).on('mouseleave', (event) => {

    });

});