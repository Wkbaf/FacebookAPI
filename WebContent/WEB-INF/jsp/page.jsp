<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Services</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
<!-- 	<script type="text/javascript" src="js/Javascript-Inter.js"></script> -->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<link rel="stylesheet" type="text/css" href="css/page.css"/>
</head>
<body >

	<script type="text/javascript">
	// Load the SDK asynchronously
	  (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	
	// [1] Load các thành phần cần thiết
	 	window.fbAsyncInit = function() {
		  FB.init({
		    appId      : '1400043393356379',
		    cookie     : true,   
		    xfbml      : true,  
		    version    : 'v2.1' 
		  });
		  
		  FB.getLoginStatus(function(response) {
// 				    var numRows = 0;
// 				    var A = 0;
// 				    var B = 0;
// 				    var C = 0;
// 				    var D = 0;
// 				    var E = 0;
// 				    var F = 0;
// 				    var G = 0;
// 				    var H = 0;
// 				    var I = 0;
// 				    var J = 0;
// 				    var K = 0;
// 				    var L = 0;
// 				    var M = 0;
// 				    var N = 0;
// 				    var O = 0;
// 				    var P = 0;
// 				    var Q = 0;
// 				    var R = 0;
// 				    var S = 0;
// 				    var T = 0;
// 				    var U = 0;
// 				    var W = 0;
// 				    var X = 0;
// 				    var Y = 0;
// 				    var Z = 0;
				    
				    
// 				    var name = new Array();
// 				    var dataResponse = new Array();
// 				    document.getElementById("demo").innerHTML = name;
// 				  FB.api(
// 					  '/me/taggable_friends',
// 					  'GET',
// //						  {"fields":"friends{id,name}"},
// 						{"fields":"name,birthday","pretty":"0","limit":"5000"},
// 					  function(response) {
// 					     if(!response || response.error){
// 					    	 alert ("loi");
// 					     }else{
// 					    	 for (var i in response.data)
// 					     	{
// 					     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
// 					            var cols = newRow.children();
// 					            cols.eq(0).text(numRows);
// 					            cols.eq(1).text(response.data[i].name);
// //					            cols.eq(2).text(response.data[i].firstname);

// 					            newRow.appendTo('#tableBody');
// 					            numRows++;
// 					            name.push(response.data[i].name.substring(0, 1));
// 					            dataResponse.push(response.data[i].name);
// //					    		document.write(name[response.data[i].name.substring(0, 1)]);
// 					     	}
					    	
// 					    	    document.getElementById("demo").innerHTML = name;
					    	    
// 					    	    for(var i in name){
// 					    	    	if(name[i]=='A') A += 1;
// 					    	    	if(name[i]=='B') B += 1;
// 					    	    	if(name[i]=='C') C += 1;
// 					    	    	if(name[i]=='D') D += 1;
// 					    	    	if(name[i]=='E') E += 1;
// 					    	    	if(name[i]=='F') F += 1;
// 					    	    	if(name[i]=='G') G += 1;
// 					    	    	if(name[i]=='H') H += 1;
// 					    	    	if(name[i]=='I') I += 1;
// 					    	    	if(name[i]=='J') J += 1;
// 					    	    	if(name[i]=='K') K += 1;
// 					    	    	if(name[i]=='L') L += 1;
// 					    	    	if(name[i]=='M') M += 1;
// 					    	    	if(name[i]=='N') N += 1;
// 					    	    	if(name[i]=='O') O += 1;
// 					    	    	if(name[i]=='P') P += 1;
// 					    	    	if(name[i]=='Q') Q += 1;
// 					    	    	if(name[i]=='R') R += 1;
// 					    	    	if(name[i]=='S') S += 1;
// 					    	    	if(name[i]=='T') T += 1;
// 					    	    	if(name[i]=='U') U += 1;
// 					    	    	if(name[i]=='W') W += 1;
// 					    	    	if(name[i]=='X') X += 1;
// 					    	    	if(name[i]=='Y') Y += 1;
// 					    	    	if(name[i]=='Z') Z += 1;
					    	    	
// 					    	    }
// //					    	    alert ("A"+ A);
// //					    	    alert ("B"+ B);
// 					    	  //chart 
// 					  		  google.charts.load("current", {packages:["corechart"]});
// 					  	        google.charts.setOnLoadCallback(drawChart);
// 					  	        function drawChart() {
// 					  	          var data = google.visualization.arrayToDataTable([
// 					  	            ['Language', 'Speakers (in millions)'],
// 					  	            ['A', A], ['B', B], ['C', C],
// 					  	            ['D', D], ['E', E], ['F', F],
// 					  	            ['G', G], ['H', H], ['I', I],
// 						  	        ['J', J], ['K', K], ['L', L],
// 						  	        ['M', M], ['N', N], ['O', O],
// 						  	        ['P', P], ['Q', Q], ['R', R],
// 						  	      	['S', S], ['T', T], ['U', U],
// 						  	    	['W', W], ['X', X], ['Y', Y],['Z', Z]
// 					  	          ]);

// 					  	          var options = {
// 					  	            title: 'Statistics by letters',
// 					  	            legend: 'none',
// 					  	            pieSliceText: 'label',
// 					  	            slices: { 
// 					  	            		  0: {offset: 0.5},
// 					  	            		  4: {offset: 0.2},
// 					  	                      12: {offset: 0.3},
// 					  	                      14: {offset: 0.4},
// 					  	                      15: {offset: 0.5}
					  	                      
// 					  	            },
// 					  	          };

// 					  	          var chart = new google.visualization.PieChart(document.getElementById('piechart'));
// 					  	          chart.draw(data, options);
// 					  	      }
// 					     }
					     
// 						}
// //					   
// 				  );


	//test list all friend
				var fl = 0;
			    var name = new Array();
			  FB.api(
				  '/me/taggable_friends',
				  'GET',
//	 				  {"fields":"friends{id,name}"},
					{"fields":"name,birthday,gender,id,picture","pretty":"0","limit":"5000"},
				  function(response) {
				     if(!response || response.error){
				    	 alert ("loidd");
				     }else{
				    	 for (var i in response.data)
				     	{
				     		
// 				            var img = '<img src="'+response.data[i].picture.data.url+'"/>';
// 				     		var newRow = $('<li>'+text(response.data[i].name)+'</li>');
// 		if(i%2==0){
// 			$("#list ul:nth-child(1)").append('<li style="display:block;"><img src="'+response.data[i].picture.data.url+'"/><span>'+response.data[i].name+'</span></li>');
// 		}
// 		if(i%2==1){
// 			$("#list ul:nth-child(2)").append('<li style="display:block;"><img src="'+response.data[i].picture.data.url+'"/><span>'+response.data[i].name+'</span></li>');
// 		}
		$("#list ul").append('<li style="display:inline-block;margin-right: 2em;"><img src="'+response.data[i].picture.data.url+'"/><span style="width: 10em;border: 1px solid teal;display: inline-block;">'+response.data[i].name+'</span></li>');
		     	}
				     }
				     
					}
				   
			  );
			  
		  });
		};
	</script>
	<script>
		function myFunction() {
		    var x = Math.floor((Math.random() * 100) + 1); 
		    document.getElementById("demo").innerHTML = x;
		}
	</script>

 	
	<script type="text/javascript">
	  $( function() {
		    $( "#drag" ).draggable();
		  } );
	</script>
	
	
<!-- 	<div id="drag" class="ui-widget-content"> -->
<!-- 		<table id="tbl-mutalfriend"> -->
<!-- 			<thead> -->
<!-- 				<tr> -->
<!-- 					<th>No.</th> -->
<!-- 					<th>NAME</th> -->
<!-- 					<th>GENDER</th> -->
<!-- 					<th>BIRTHDAY</th> -->
<!-- 					<th>ID</th> -->
<!-- 					<th>LOCATION</th> -->
<!-- 				</tr> -->
<!-- 			</thead> -->
<!-- 			<tbody id="tableBody"> -->
<!-- 			</tbody> -->
<!-- 		</table> -->
<!-- 	</div> -->
	
	
<!-- 	test list all friend -->
		<div id="list" >
			<ul style="list-style-type: none; background-color: yellow;float: left; width: 70%;">
			</ul>
<!-- 			<ul style="list-style-type: none; background-color: yellow;float: left;"> -->
<!-- 			</ul> -->
		</div>

	<!--     chart -->
			
			<div id="demo"></div>
	
	
	
<!-- 	test show menu chart -->
<script type="text/javascript">
	$(function(){
		$("#img1").on("click",function(){
			$("#img2").show();
			$("#img4").hide();
		});
		$("#img3").on("click",function(){
			$("#img4").show();
			$("#img2").hide();
		});
	});
</script>
<!-- 		<div > -->
<!-- 		<img id="img1" alt="" src="image/bg3.jpg" style="width: 100px; height: 100px; cursor: pointer;"> -->
<!-- 		</div> -->
<!-- 		<div > -->
<!-- 		<img id="img3" alt="" src="image/bg4.jpg" style="width: 100px; height: 100px; cursor: pointer;"> -->
<!-- 		</div> -->
<!-- 			<div id="img2" style="width: 100%; height: 70%;background-color: teal; position: absolute; top: 115%; display: none;"> -->
<!-- 				<div id="piechart" style="width: 900px; height: 500px;"></div> -->
<!-- 			</div> -->
<!-- 			<div id="img4" style="width: 100%; height: 70%;background-color: teal; position: absolute; top: 115%; display: none;"> -->
<!-- 				<div id="piechart" style="width: 900px; height: 500px;"></div> -->
<!-- 			</div> -->
<!-- 		<div></div> -->
		
		
	<button id="goHome">Go Home</button>
</body>
</html>