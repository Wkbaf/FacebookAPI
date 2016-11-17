//$(function(){
//	$("#a2").on('click',function(){
//		$("#a2").css("color","red");
//		$("#a3").css("color","white");
//		$("#a4").css("color","white");
//		$("#a1").css("color","white");
//	});
//	$("#a3").on('click',function(){
//		$("#a3").css("color","red");
//		$("#a4").css("color","white");
//		$("#a2").css("color","white");
//		$("#a1").css("color","white");
//	});
//	$("#a4").on('click',function(){
//		$("#a4").css("color","red");
//		$("#a3").css("color","white");
//		$("#a2").css("color","white");
//		$("#a1").css("color","white");
//	});
//	$("#a1").on('click',function(){
//		$("#a1").css("color","red");
//		$("#a2").css("color","white");
//		$("#a3").css("color","white");
//		$("#a4").css("color","white");
//	});
//});
$(function(){
	
	$("#img1").on("mouseover",function(){
		$("#img1").attr("src","image/icon-w3.png");
	});
	$("#img1").on("mouseout",function(){
		$("#img1").attr("src","image/icon-b3.png");
	});
	$("#img2").on("mouseover",function(){
		$("#img2").attr("src","image/icon-abcw.png");
	});
	$("#img2").on("mouseout",function(){
		$("#img2").attr("src","image/icon-abcb.png");
	});
	$("#img3").on("mouseover",function(){
		$("#img3").attr("src","image/icon-globew.png");
	});
	$("#img3").on("mouseout",function(){
		$("#img3").attr("src","image/icon-globeb.png");
	});
	
	// hover's btn fb
	$(".btnFB").on("mouseover",function(){
		$(".btnFB").attr("src","image/btnfb2.png");
	});
	$(".btnFB").on("mouseout",function(){
		$(".btnFB").attr("src","image/btnfb.png");
	});
	
	//POPup close
	$("#popupClose").on('click',function(){
		$("#background-pop").hide();
	});
	//Event popup
	$("#popup-img").on('mouseover',function(){
		$(".popup-img").attr("src","image/popup2.png");
	});
	$("#popup-img").on('mouseout',function(){
		$(".popup-img").attr("src","image/popup.png");
	});
	
	//show frame cockpit
	window.setTimeout(function(){
		//hide star
		$(".img-star").hide();
		$(".img-moon").hide();
		$(".img-cloud").hide();
		window.setTimeout(function(){
			$(".img-starw").show();
		}, 700);
		
		$(".frame").show();
		$(".frametp").hide();
		//show new background and hide old background 
		window.setTimeout(
				function(){
					$(".bg-1").hide();
					$(".bg-1tp").show();	
				},500
			);
		
	},60000);
	
	//show frame cockpit by click
	$(".img-star").on('click',function(){
		new WOW().init();
		$(".img-star").hide();
		$(".img-moon").hide();
		$(".img-cloud").hide();
		window.setTimeout(function(){
			$(".img-starw").show();
		}, 700);
		
		$(".frame").show();
		$(".frametp").hide();
		window.setTimeout(
			function(){
				$(".bg-1").hide();
				$(".bg-1tp").show();	
			},500
		);
	});
	
	//hide frame cockpit
	$(".img-starw").on('click',function(){
		$(".frame").hide();
		$(".bg-1").show();
		$(".bg-1tp").hide();
		$(".img-starw").hide();
		
		$(".img-star").show();
		$(".img-moon").show();
		$(".img-cloud").show();
		$(".frametp").show();
	});
	
	//jQuery link friend location chart
	$("#link-location").on('click',function(){
		$(".menu-friend").hide();
		$("#bylocation").on("click",function(){
			$(".charts").show();
			$("#piechart").hide();
			$("#piechart-gender").hide();
			$("#piechart-location").show();
			$("#piechart-age").hide();
		});
	});
	
});

//goHome button
$(document).ready(function(){
	$('#goHome').click(function(){
		parent.history.back();
		return false;
	});
});

$(function(){
	$(".sub-framefb").on("click",function(){
//		$("#cockpit").attr("src","image/cockpit2.gif");
	});
});

//jQuery for friend list
$(document).ready(function(){
	
	var popup = window.location.href.split('?');//get variable in url to hide pop up in friends
	
	if(popup[1]==0){
		//hide pop up
		$(".pop-up-friend").hide();
		$("#tbl-listfriend-all").show();
		$("#margin-tbl-listfriend-all").find("h1").show();
		$(".bar-control").show();
		//show-hide statistics
		$("#byleter").hide();
		$("#bygender").show();
		$("#bylocation").show();
		$("#byage").show();
		$("#statistics-all").show();
		$("#statistics").hide();
		//show-hide search
		$(".search-all").show();
		//show Bar-friend
		$(".Bar-friend").show();
		//show-hide path
		$("#fr-bp").show();
		$("#fr-fb").hide();
		//show chart
		$(".charts").show();
		$("#piechart").hide();
		$("#piechart-gender").hide();
		$("#piechart-location").show();
		$("#piechart-age").hide();
		 window.location = '#chart1';//note
	}
	if(popup[1]==1){
		$("#tbl-listfriend").show();
		$("#margin-tbl-listfriend").find("h1").show();
		$(".bar-control").show();
		//show-hide statistics
		$("#byleter").show();
		$("#bygender").hide();
		$("#bylocation").hide();
		$("#byage").hide();
		$("#statistics").show();
		$("#statistics-all").hide();
		//hide pop up
		$(".pop-up-friend").hide();
		//show-hide search
		$(".search").show();
		//show Bar-friend
		$(".Bar-friend").show();
		//show-hide path
		$("#fr-fb").show();
		$("#fr-bp").hide();
		//show chart
		$(".charts").show();
		$("#piechart").show();
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		window.location = '#chart1';//note
	}
	
	//search
	$(".input-search").keyup(function(){
	    _this = this;
	    // Show only matching TR, hide rest of them
	    $.each($("#tbl-listfriend tbody tr"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).show();                
	    });
	});
	
	//search-all
	$(".input-search-all").keyup(function(){
	    _this = this;
	    // Show only matching TR, hide rest of them
	    $.each($("#tbl-listfriend-all tbody tr"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).show();                
	    });
	});
	
	//menu friend for mouseover
	$(".subframe-l").on("mouseover",function(){
	});
	$(".subframe-l").on("mouseout",function(){
	});
	//menu friend
	$(".subframe-l").on("click",function(){
		$("#tbl-listfriend-all").show();
		$("#margin-tbl-listfriend-all").find("h1").show();
		$(".bar-control").show();
		//show-hide statistics
		$("#byleter").hide();
		$("#bygender").show();
		$("#bylocation").show();
		$("#byage").show();
		$("#statistics-all").show();
		$("#statistics").hide();
		//hide pop up
		$(".pop-up-friend").hide();
		//show-hide search
		$(".search-all").show();
		//show Bar-friend
		$(".Bar-friend").show();
		//show-hide path
		$("#fr-bp").show();
		$("#fr-fb").hide();
	});
	$(".subframe-r").on("click",function(){
		$("#tbl-listfriend").show();
		$("#margin-tbl-listfriend").find("h1").show();
		$(".bar-control").show();
		//show-hide statistics
		$("#byleter").show();
		$("#bygender").hide();
		$("#bylocation").hide();
		$("#byage").hide();
		$("#statistics").show();
		$("#statistics-all").hide();
		//hide pop up
		$(".pop-up-friend").hide();
		//show-hide search
		$(".search").show();
		//show Bar-friend
		$(".Bar-friend").show();
		//show-hide path
		$("#fr-fb").show();
		$("#fr-bp").hide();
	});
	
	//JQuery for path
	$("#Friends").on("click",function(){
		$("#tbl-listfriend-all").hide();
		$("#margin-tbl-listfriend-all").find("h1").hide();
		$(".bar-control").hide();
		$("#tbl-listfriend").hide();
		$("#margin-tbl-listfriend").find("h1").hide();
		
		$(".pop-up-friend").show();
		//hide statistics
		$("#byleter").hide();
		$("#bygender").hide();
		$("#bylocation").hide();
		$("#byage").hide();
		$("#statistics").hide();
		$("#statistics-all").hide();
		//hide chart
		$(".charts").hide();
		$("#piechart").hide();
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		//hide search
		$(".input-search").val("");//reset
		$(".input-search-all").val("");//reset
		
		$(".search").hide();
		$(".search-all").hide();
		//hide Bar-friend
		$(".Bar-friend").hide();
	});
	
	//bar control
	$("#close").on("click",function(){
		$("#tbl-listfriend-all").hide();
		$("#margin-tbl-listfriend-all").find("h1").hide();
		$(".bar-control").hide();
		$("#tbl-listfriend").hide();
		$("#margin-tbl-listfriend").find("h1").hide();
		
		$(".pop-up-friend").show();
		//hide statistics
		$("#byleter").hide();
		$("#bygender").hide();
		$("#bylocation").hide();
		$("#byage").hide();
		$("#statistics").hide();
		$("#statistics-all").hide();
		//hide chart
		$(".charts").hide();
		$("#piechart").hide();
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
		//hide search
		$(".input-search").val("");//reset
		$(".input-search-all").val("");//reset
		
		$(".search").hide();
		$(".search-all").hide();
		//hide Bar-friend
		$(".Bar-friend").hide();
		
	});
	
	//jQuery for logo
	$(".logo").on("click",function(){
		window.location ='homepage.html';
	});
	
	$("#next").on("click",function(){
			$("#tbl-listfriend-all").hide();
			$("#margin-tbl-listfriend-all").find("h1").hide();
			$("#tbl-listfriend").show();
			$("#margin-tbl-listfriend").find("h1").show();
			//show -hide statistics
			$("#byleter").show();
			$("#bygender").hide();
			$("#bylocation").hide();
			$("#byage").hide();
			$("#statistics").show();
			$("#statistics-all").hide();
			//hide chart
			$(".charts").hide();
			$("#piechart").hide();
			$("#piechart-gender").hide();
			$("#piechart-location").hide();
			$("#piechart-age").hide();
			//show-hide search
			$(".search").show();
			$(".search-all").hide();
			//show-hide path
			$("#fr-fb").show();
			$("#fr-bp").hide();
	});
	$("#pre").on("click",function(){
			$("#tbl-listfriend-all").show();
			$("#margin-tbl-listfriend-all").find("h1").show();
			$("#tbl-listfriend").hide();
			$("#margin-tbl-listfriend").find("h1").hide();
			//show -hide statistics
			$("#byleter").hide();
			$("#bygender").show();
			$("#bylocation").show();
			$("#byage").show();
			$("#statistics").hide();
			$("#statistics-all").show();
			//hide chart
			$(".charts").hide();
			$("#piechart").hide();
			$("#piechart-gender").hide();
			$("#piechart-location").hide();
			$("#piechart-age").hide();
			//hide-show search
			$(".search").hide();
			$(".search-all").show();
			//show-hide path
			$("#fr-fb").hide();
			$("#fr-bp").show();
	});
//menu chart
	$("#byleter").on("click",function(){
		$(".charts").show();
		$("#piechart").show();
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
	});
	$("#bygender").on("click",function(){
		$(".charts").show();
		$("#piechart").hide();
		$("#piechart-gender").show();
		$("#piechart-location").hide();
		$("#piechart-age").hide();
	});
	$("#bylocation").on("click",function(){
		$(".charts").show();
		$("#piechart").hide();
		$("#piechart-gender").hide();
		$("#piechart-location").show();
		$("#piechart-age").hide();
	});
	$("#byage").on("click",function(){
		$(".charts").show();
		$("#piechart").hide();
		$("#piechart-gender").hide();
		$("#piechart-location").hide();
		$("#piechart-age").show();
	});
});

