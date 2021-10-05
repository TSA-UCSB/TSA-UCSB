$(document).ready(function(){
    $.clearAll = function(){
        $('#event-1').css('opacity', '0');
        $('#event-2').css('opacity', '0');
        $('#event-3').css('opacity', '0');
        $('#event-4').css('opacity', '0');
        $('#event-5').css('opacity', '0');
        $('#event-6').css('opacity', '0');
        // $('#event-7').css('opacity', '0');
    }
    $('#event-1-thumbnail').hover(function() {
        $.clearAll();
        $('#event-1').css('opacity', '1');
    });

    $('#event-2-thumbnail').hover(function() {
        $.clearAll();
        $('#event-2').css('opacity', '1');
    });
    
    $('#event-3-thumbnail').hover(function() {
        $.clearAll();
        $('#event-3').css('opacity', '1');
    });

    $('#event-4-thumbnail').hover(function() {
        $.clearAll();
        $('#event-4').css('opacity', '1');
    });

    $('#event-5-thumbnail').hover(function() {
        $.clearAll();
        $('#event-5').css('opacity', '1');
    });  

    $('#event-6-thumbnail').hover(function() {
        $.clearAll();
        $('#event-6').css('opacity', '1');
    }); 

    // $('#event-7-thumbnail').hover(function() {
    //     $.clearAll();
    //     $('#event-7').css('opacity', '1');
    // }); 
});