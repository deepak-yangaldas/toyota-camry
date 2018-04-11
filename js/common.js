$(document).ready(function() {
    manageColorSectionHandler();
	
	$(".testDrive").click(function(){
		$(".form-book-now").fadeIn(300);
	});
	$(".close-form").click(function(){
		$(".form-book-now").fadeOut(300);
	});
	$("#cust-icon").click(function() {
		$(".cust_details").toggleClass("active");
		$(".close-form").trigger("click");
		return false;
	});
	
	$('.why-hybrid-carousel-comfort').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true,
		autoHeight:true
	});
	$('.why-hybrid-carousel-safety').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true,
		autoHeight:true
	});
	$('.why-hybrid-carousel-performance').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true,
		autoHeight:true
	});
	$('.exterior-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true,
		autoHeight:true
	});
	$('.accessories-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true,
		autoHeight:true
	});
	$('.video-carousel').owlCarousel({
        loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true
    });
	
	$(".video-thumb").click(function() {
        $(".video-pop-up").show();
		var vidSection = $(this).data('video');
		//alert ($("#video").data('video'));
		//console.log(vidSection);
		$(".yt-player").attr("src","https://www.youtube.com/embed/" + vidSection)
		
    });
	$(".video-pop-up-close").click(function(e) {
        $(".video-pop-up").hide();
		$(".yt-player").attr("src","");
    });
	
});

var detectDevice=false;
$(function(){
	$('#menuWrap ul li').hover(function(){
		if(!detectDevice){$(this).addClass('hover');}
	},function(){
		if(!detectDevice){$(this).removeClass('hover');}
	});
	
	$(window).resize(function(){ detectDeviceFunc(); });
	detectDeviceFunc();

	$( "<div id='menuOverlay'></div>" ).insertAfter( "#menuWrap" );
	$( "<div class='hamMenu'></div>" ).insertBefore( "#menuWrap .mainMenu" );

	$('.hamMenu').click(function(){
		$('#menuOverlay, #menuWrap').toggleClass('showMenu');
	});
	gotoSection();
	

});

function detectDeviceFunc(){
	$('#menuWrap li').removeClass('hover').removeClass('active');
	$('#menuWrap li').eq(0).addClass('active');
	if( parseInt($(document).width()) <= 767 ){ 
		detectDevice=true;
		$('#menuWrap').addClass('device').removeClass('desktop');
	}
	else{
		detectDevice=false;
		$('#menuWrap').addClass('desktop').removeClass('device');
	}
}

function onscrollHighlightMenu() {
	var winHt=$(window).height();
	var scrollPosition = $(window).scrollTop()+200;

	$('.section').each(function() {
	    var sectionTop = $(this).offset().top-100;
	    var id = $(this).attr('id');
	    if (scrollPosition >= sectionTop) {
	        $('#navigation > ul > li > a[data-scroll=' + id + ']').parent('li').addClass('active').siblings('li').removeClass('active');
	    }
	});
}
function gotoSection(){
	$('#navigation > ul > li').click(function(event){
		 event.stopPropagation();
		 $(this).toggleClass('active').siblings().removeClass('active');
		 var sectionID=$(this).find('a').attr('data-scroll');
		 var headerHt=$('header').height();
		 var scrollVal=$('#'+sectionID).offset().top-headerHt;

		 $('html,body').animate({scrollTop:scrollVal},500);
		 if($('#menuWrap').hasClass('showMenu')){
		 	//$('.hamMenu').click();
			$('.hamMenu').trigger("click");
		 }
	});
}
$(window).scroll(function() {
	onscrollHighlightMenu();
});

/* ------------------------------------------------------------------ */
/* --------------------- COLOR SECTION --------------------- */
/* ------------------------------------------------------------------ */


function manageColorSectionHandler(){	
	var prevImgDiv;
	var colorTabList = $(".color_tab_btn");
	var colorImgWrapper = $(".color_img_wrapper");
	var colorImgArr = ["color_image_silver.png", "color_image_brown.png", "color_image_black.png", "color_image_grey.png", "color_image_white.png", "color_image_blue.png"];
		
	colorTabList.each(function(index, element) {
        var colorTabBtn = $(this);
		var img = "images/" + colorImgArr[index];
		var divHTML = '<div class="color_img_block"><img class="car-img-responsive" src="' + img + '" /></div>';
		var currImgDiv = $(divHTML).appendTo(colorImgWrapper);
		colorTabBtn.bind("click", function(){
			if(prevImgDiv != currImgDiv){
				if(prevImgDiv){
					prevImgDiv.css({"opacity":0});
				}				
				currImgDiv.css({"opacity":1});
				prevImgDiv = currImgDiv;
			}
			colorTabList.removeClass("active");
			colorTabBtn.addClass("active");
			return false;			
		});
    });
	colorTabList.eq(0).trigger("click");

}


