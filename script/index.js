$(document).ready(function(){
	
	// header
	var headH = $("#wrapHead").height();
	$(window).scroll(function(){
		$("#wrapHead").css("position","fixed");
		$(".banner").css("padding-top",headH);
	});

	// toggle
	$(".toggle_btn").click(function(){
		$("#nav").slideToggle();
		return false;
	});

	
	var bannerH = $(".banner li").height();
	$(".banner ul").css("height",bannerH);

	var textH = $(".about_text li").height();
	$(".about_text ul").css("height",textH);

	$(window).resize(function(){
		bannerH = $(".banner li").height();
		textH = $(".about_text li").height();
		$(".banner ul").css("height",bannerH);
		$(".about_text ul").css("height",textH);
	});	
		
	
	// banner rolling
	
	var num=0;	


//	$(".banner ul").css("margin-left","-100%");
	//$(".about_text ul").css("margin-left","-100%");
//	$(".banner ul").prepend($(".banner ul").find("li:last"));
	//$(".about_text ul").prepend($(".about_text ul").find("li:last"));

//	$(".banner .next").click(function(){
//		$(".banner ul").animate({marginLeft:"-200%"},500,function(){
//			$(this).css("margin-left","-100%").append($(this).find("li:first"));
//		});
//		num++;
//		if(num>3) num=1;
//		$(".about_text ul").find(".about0"+num).fadeIn(600).siblings().hide();
		//$(".about_text ul").animate({marginLeft:"-200%"},400,function(){
		//	$(this).css("margin-left","-100%").append($(this).find("li:first"));
		//	$(this).find("li").fadeIn();
		//});
//		return false;
//	});
//	$(".banner .prev").click(function(){
//		$(".banner ul").animate({marginLeft:0},500,function(){
//			$(this).css("margin-left","-100%").prepend($(this).find("li:last"));
//		});
//		num--;
//		if(num<1) num=3;
//		$(".about_text ul").find(".about0"+num).fadeIn(600).siblings().hide();
		//$(".about_text ul").animate({marginLeft:0},400,function(){
		//	$(this).css("margin-left","-100%").prepend($(this).find("li:last"));
		//});
//		return false;
//	});
	
	// banner fade
	function fade(){
		num++;
		if(num>2) num=0;
		$(".banner li").eq(num).fadeIn(400).siblings().fadeOut();
		$(".about_text li").eq(num).fadeIn(400).siblings().fadeOut();
	};
	setInterval(fade,5000);
	


	// course

	$(".aida_bg li").click(function(){		
		liIndex = $(this).index();		
		$(".pop").show();
		$(".pop li").eq(liIndex).fadeIn(400).siblings().hide();
		$(".aida_bg").stop().animate({left:"0"},500,function(){
			

		});
		return false;
	});
	$(".pop li").click(function(){
		$(this).parent(".pop").hide();
		$(this).fadeOut();
		$(".aida_bg").stop().animate({left:"35%"},400);
		return false;
	});

	// piont resort
	$(".sec_tit1").click(function(){
		$(".point_cont").css("display","block");
		$(".resort_cont").css("display","none");
		return false;
	});
	$(".sec_tit2").click(function(){
		$(".resort_cont").css("display","block");
		$(".point_cont").css("display","none");
		return false;
	});
});