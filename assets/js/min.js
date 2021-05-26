$(document).ready(function(){
    let header = 0;
    $(window).on('scroll', function(){
        $('#headers').toggleClass('hide', $(window).scrollTop() > header);
        header = $(window).scrollTop(); 
    });

});