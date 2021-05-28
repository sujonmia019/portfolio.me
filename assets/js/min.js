$(document).ready(function(){
    // Header Scrolling 
    let header = 0;
    $(window).on('scroll', function(){
        $('#headers').toggleClass('hide', $(window).scrollTop() > header);
        header = $(window).scrollTop(); 
    });

    // tooltrip 
   

});