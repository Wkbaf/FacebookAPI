//JQuery for Friends
$(document).ready(function(){
	var link = window.location.href.split('?');//get variable in url to hide pop up in friends
	
	if(link[1]==1){//show chart letter
		//hide table
		$("#tbl-listfriend-all").hide();
		$(".table").find("h1").hide();
		//show chart
		$("#piechart").show();
		//css content table
		$(".table").css("background-color","#eeff77");
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(6)").find("a")
			.css("display","block")//notice
			.addClass("active");
	}
	
	if(link[1]==0){//show chart geography
		//hide table
		$("#tbl-listfriend-all").hide();
		$(".table").find("h1").hide();
		//show chart
		$("#piechart-location").show();
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(3)").find("a")
			.css("display","block")//notice
			.addClass("active");
	}
});

$(function(){
	$("#menu-Sta").on("click",function(){
		//hide statictis
		$(".statictis").toggleClass("statictis-show");
	});
	
	//search
	$(".input-search1").keyup(function(){
	    _this = this;
	    // Show only matching TR, hide rest of them
	    $.each($("#tbl-listfriend-all tbody tr"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).show();                
	    });
	});
	
	//search list friend
	$(".input-search2").keyup(function(){
	    _this = this;
	    // Show only matching TR, hide rest of them
	    $.each($(".list-container ul li"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).css("display","inline-block");              
	    });
	});
	
	$(".menu ul li:nth-child(1) a")
	.add(".menu ul li:nth-child(5) a").on('click', function(){
		$(".input-search1").val('');//reset
		$(".input-search2").val('');
		$.each($("#tbl-listfriend-all tbody tr"),function(){
			$(this).show();
		});
		$.each($(".list-container ul li"),function(){
			$(this).css("display","inline-block");
		});
	});
	
		//Statictis vs Pie chart
		$(".statictis .menu-statictis ul li:nth-child(1)").on("click",function(){
		//remove class active of  a
		$('.menu ul li a').removeClass("active");
		//hide table
		$("#tbl-listfriend-all").hide();
		$("#tbl-listfriend").hide();
		$(".table").find("h1:nth-child(1)").hide();
		$(".table").find("h1:nth-child(2)").hide();
		//turn on/off menu
//		$(".menu ul li:nth-child(1) a:hover").css("background-color","#fff");
		$("ul li:nth-child(2)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show chart
		$("#piechart-gender").show();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//hide other menu
		$(".menu ul li:nth-child(3) a").hide();
		$(".menu ul li:nth-child(4) a").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
		
		$(".statictis .menu-statictis ul li:nth-child(2)").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//hide table
		$("#tbl-listfriend-all").hide();
		$(".table").find("h1").hide();
		//turn on/off menu
		$("ul li:nth-child(3)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").show();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//hide other chart
		$(".menu ul li:nth-child(2) a").hide();
		$(".menu ul li:nth-child(4) a").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
	
		$(".statictis .menu-statictis ul li:nth-child(3)").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//hide table
		$("#tbl-listfriend-all").hide();
		$("#tbl-listfriend").hide();
		$(".table").find("h1").hide();
		//turn on/off menu
		$("ul li:nth-child(4)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").show();
		$("#piechart").hide();
		//hide other chart
		$(".menu ul li:nth-child(3) a").hide();
		$(".menu ul li:nth-child(2) a").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
	
		$(".statictis .menu-statictis ul li:nth-child(4)").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//hide table
		$("#tbl-listfriend-all").hide();
		$("#tbl-listfriend").hide();
		$(".table").find("h1").hide();
		//turn on/off menu
		$("ul li:nth-child(6)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").show();
		//css content table
		$(".table").css("background-color","#eeff77");
		//hide list friend
		$(".list-container ul").hide();
	});
	
	//menu
	$(".menu ul li:nth-child(1) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(1)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show table
		$(".table").find("h1:nth-child(1)").show();
		$(".table").find("h1:nth-child(2)").hide();
		$("#tbl-listfriend-all").css("display","inline-block");
		$("#tbl-listfriend").css("display","none");
		//hide chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
		//search
		$(".input-search1").show();
		$(".input-search2").hide();
	});
	
	$(".menu ul li:nth-child(2) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(2)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//hide table
		$(".table").find("h1").hide();
		$("#tbl-listfriend-all").css("display","none");
		$("#tbl-listfriend").css("display","none");
		//show chart
		$("#piechart-gender").show();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
	
	$(".menu ul li:nth-child(3) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(3)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//hide table
		$(".table").find("h1").hide();
		$("#tbl-listfriend-all").css("display","none");
		$("#tbl-listfriend").css("display","none");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").show();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
	
	$(".menu ul li:nth-child(4) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(4)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//hide table
		$(".table").find("h1").hide();
		$("#tbl-listfriend-all").css("display","none");
		$("#tbl-listfriend").css("display","none");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").show();
		$("#piechart").hide();
		//css content table
		$(".table").css("background-color","#a6cc72");
		//hide list friend
		$(".list-container ul").hide();
	});
	
	$(".menu ul li:nth-child(5) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(5)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//show table
		$("#tbl-listfriend").css("display","inline-block");
		//hide table
		$(".table").find("h1:nth-child(1)").hide();
		$(".table").find("h1:nth-child(2)").show();
		$("#tbl-listfriend-all").css("display","none");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").hide();
		//css content table
		$(".table").css("background-color","#eeff77");
		//show list friend
		$(".list-container ul").css("display","inline-block");
		//search
		$(".input-search1").hide();
		$(".input-search2").show();
	});
	$(".menu ul li:nth-child(6) a").on("click",function(){
		$('.menu ul li').find('a').removeClass("active");
		//turn on/off menu
		$("ul li:nth-child(6)").find("a")
			.css("display","block")//notice
			.addClass("active");
		//hide table
		$(".table").find("h1").hide();
		$("#tbl-listfriend-all").css("display","none");
		$("#tbl-listfriend").css("display","none");
		//show chart
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		$("#piechart").show();
		//css content table
		$(".table").css("background-color","#eeff77");
		//hide list friend
		$(".list-container ul").hide();
	});
	
});
