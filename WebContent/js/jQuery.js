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
		$("#img2").attr("src","image/icon-genderw.png");
	});
	$("#img2").on("mouseout",function(){
		$("#img2").attr("src","image/icon-genderb.png");
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
	
	
	//button next in ListFriend
	$(".btn-next").on('click',function(){
		
//		var table = $('#tbl-listfriend').DataTable();
		
//		var rows = $('#tbl-listfriend').row();
		var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
	    $tds = $row.find("td");             // Finds all children <td> elements

		$.each($tds, function() {               // Visits every single <td> element
		    console.log($(this).text());        // Prints out the text within the <td>
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
	//Write on keyup event of keyword input element
	$(".form-control").keyup(function(){
	    _this = this;
	    // Show only matching TR, hide rest of them
	    $.each($("#tbl-listfriend tbody tr"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).show();                
	    });
	});
});
