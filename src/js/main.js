import '../css/style.scss';

$(document).ready(function(){

    var s = $('.section-main, .welcome');
	var nav = $('ul li a');
	s.waypoint({
		handler: function(direction){
			var active = $(this);
			if(direction == 'up')
				active = active.prev();
			var active_link = $('ul li a[href="#'+active.attr('id')+'"]');
			
		
			nav.parent().removeClass('link-active');
			active_link.parent().addClass('link-active');
		},
		offset: '35%'
    });

    $(window).scroll(function(){
        parallax();
    }); 

    
    // /*======= Skillset *=======*/
    // $('.level-bar-inner').css('width', '0');
    
    //     $(window).on('load', function() {
    
    //         $('.level-bar-inner').each(function() {
    
    //             var itemWidth = $(this).data('level');
    
    //             $(this).animate({
    //                 width: itemWidth
    //             }, 800);
    
    //         });
    
    //     });


});

$("nav a, .nav-side a").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});


$("#view-cv-btn").on("click", function(event){
    event.preventDefault();
    $("#cv-modal").fadeIn("slow");
    $(".modal-content").css("background","rgba(0,0,0,0)")
}); 

$("#project-1-btn").on("click", function(event){
    event.preventDefault();
    $("#project-1").fadeIn("slow");
})

$("#project-2-btn").on("click", function(event){
    event.preventDefault();
    $("#project-2").fadeIn("slow");
})

$("#project-3-btn").on("click", function(event){
    event.preventDefault();
    $("#project-3").fadeIn("slow");
})

$("#project-4-btn").on("click", function(event){
    event.preventDefault();
    $("#project-4").fadeIn("slow");
})

$("#project-5-btn").on("click", function(event){
    event.preventDefault();
    $("#project-5").fadeIn("slow");
})

$(".close-modal").on("click", function(){
    $(".modal").fadeOut("slow");
})


function parallax(){
    var wScroll = $(window).scrollTop();
    $('.parallax--bg').css('background-position', 
  'center '+(wScroll*0.75)+'px');
}





