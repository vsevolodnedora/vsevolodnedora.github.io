$(document).ready(function(){
    var $win = $(window);
    $('.titleimage').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed)-350;
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css('background-position', bgPosition);
        });
    });
    $('#Meudon').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed)-200;
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css('background-position', bgPosition);
        });
    });
    $('#JPL').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed)-200;
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css('background-position', bgPosition);
        });
    });
});