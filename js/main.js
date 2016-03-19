$('.shop-info').hide();
    // Shop1 drop
    $('.shops li').on('click', function(e){
        e.preventDefault();
        var target = $(this).find('a').attr('href');
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            if($('.shop-info').hasClass('open')) {
                $('.shop-info .drop.open').hide().removeClass('open');
                $(target).show().addClass('open');
            } else {
                $('.shop-info .drop').hide();
                $(target).show().addClass('open');
                $('.shop-info').slideDown('fast').addClass('open');
            }
        } else {
            $('.shop-info').slideUp('fast').removeClass('open');
        }
    });

// animate scroll 
$('.nav-bar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
