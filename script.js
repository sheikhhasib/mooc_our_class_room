$(document).ready(function () {
    $(document).on("click", ".course-title", function () {
       let display =  $('.course-body').css('display');
       if(display == 'none'){
            $('.course-body').css('display','block');
            $('#upArrow').css('display','block');
            $('#downArrow').css('display','none');
       }else{
            $('.course-body').css('display','none');
            $('#upArrow').css('display','none');
            $('#downArrow').css('display','block');
       }
	});
    $(document).on("click", ".bar-icon", function () {
        let status = $('.nav-hidden-area').css('display');
        if(status == 'block'){
            $('#menuBar').addClass('navbar-collapse-new');
            $('#menuBar').removeClass('nav-hidden-area');
        }else{
            $('#menuBar').removeClass('navbar-collapse-new');
            $('#menuBar').addClass('nav-hidden-area');
        }       
	});


    // Navbar Scroll function
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 200) {
                $('.main-content-right').css('top','80px');
                $('.main-content-right').css('position','fixed');
                $('.main-content-right').css('transition','0.5s');
                $('.main-navbar').css('background-color','#f3f2f2');

            } else {
                $('.main-content-right').css('top','100px');
                $('.main-content-right').css('transition','0.5s');
                $('.main-navbar').css('background-color','#fff');
            }
        });
    });
     // Navbar Scroll function Finish 
});