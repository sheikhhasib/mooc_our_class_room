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


    // Navbar Scroll function
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 200) {
                $('#courseImage').css('display','none');
                $('.main-content-right').css('top','80px');
                $('.main-content-right').css('position','fixed');
                $('.main-content-right').css('transition','0.5s');
                $('.main-navbar').css('background-color','#f3f2f2');

            } else {
                $('#courseImage').css('display','block');
                $('.main-content-right').css('top','100px');
                $('.main-content-right').css('transition','0.5s');
                $('.main-navbar').css('background-color','#fff');
            }
        });
    });
     // Navbar Scroll function Finish 
});