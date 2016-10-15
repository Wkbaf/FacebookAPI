<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Services</title>
	<script src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/Javascript-SDK.js"></script>
	<script type="text/javascript" src="js/loader.js"></script>
<!-- 	<script type="text/javascript" src="js/Javascript-Inter.js"></script> -->
	<link rel="stylesheet" type="text/css" href="css/ListFriend.css"/>
	<link rel="stylesheet" href="css/bootstrap.min.css"> 
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
	</script>
	
 	<script>
		// [1] Load các thành phần cần thiết
	 	window.fbAsyncInit = function() {
		  FB.init({
		    appId      : '1400043393356379',
		    cookie     : true,   
		    xfbml      : true,  
		    version    : 'v2.1' 
		  });
		  
		// Gọi hàm xử lí list friend
		
		  FB.getLoginStatus(function(response) {
			  showListFriendAPI(response);
			  showFriendAPI();
			  });
	
			  };
			 
	</script>
		
	
<!-- 	CODE PAGE -->

<!-- 	Script for background -->
			<div class="Bar-friend">
			
				<div class="logo">BapApp</div>
				
				<!-- search friends -->
				<div class="search">
		           <input type="text" class="search input-search"  placeholder="Search" >
				</div>
				
				<div class="search-all">
		           <input type="text" class="search-all input-search-all"  placeholder="Search" >
				</div>
				
				<!-- bar control -->
				<div class="bar-control">
				
					<img id="pre" alt="pre" src="image/Friendlist/pre.png">
					<img id="close" alt="close" src="image/Friendlist/x.png">
					<img id="next" alt="next" src="image/Friendlist/next.png">
				
				</div>
				
			</div>
			
<!-- 		<div class="background"> -->
			<div class="main-frame">
			
				<!-- Path -->
				<div class="path">
					<span><a href="homepage.html">Home</a></span>/
					<span><a href="#" id="Friends">Friends</a></span>/
					<span><a href="" id="fr-fb" class="not-active">Friends on Facebook</a></span>
					<span><a href="" id="fr-bp" class="not-active">Friends on BapApp</a></span>
				</div>
			
				<div class="pop-up-friend" id="pop-up-friend">
				
					<div class="pop-up-friend img"></div>
					
					<div class="subframe-l"></div>
					
					<div class="subframe-r"></div>
					
					<div class="text">
						<span>Friends</span>
						<span>on</span>
						<span>BapApp</span>
						<span>Facebook</span>
					</div>
					
				</div>
				
				<!-- table of friend all -->
				<div class="statistics" id="statistics">
					<h1>Statistics By</h1>
					<a href="#chart1" id="byleter">First letter 's name</a>
				</div>
			
				<div id="margin-tbl-listfriend">
				
					<h1>Friends on Facebook</h1>
					
					<table id="tbl-listfriend">
					
						<thead>
							<tr>
								<th class="align1">No.</th>
								<th class="align2">NAME</th>
								<th class="align3">PICTURE</th>
							</tr>
						</thead>
						
						<tbody id="tableBody">
						</tbody>
						
					</table>
				</div>
		
				<!-- table of friend with all infor -->
				<div class="statistics" id="statistics-all">
					<h1>Statistics By</h1>
					<a href="#chart1" id="bygender">Gender</a><br>
					<a href="#chart1" id="bylocation">Location</a><br>
					<a href="#chart1" id="byage">Age</a>
				</div>
			
				<div id="margin-tbl-listfriend-all">
					<h1>Friends on BapApp</h1>
					
					<table id="tbl-listfriend-all">
					
						<thead>
							<tr>
								<th>No.</th>
								<th>NAME</th>
								<th>ID</th>
								<th>GENDER</th>
								<th>BIRTHDAY</th>
								<th>LOCATION</th>
							</tr>
						</thead>
						
						<tbody id="tableBody-all">
						</tbody>
						
					</table>
				</div>
		
			<!--     chart -->
<!-- 			<div id="piechart" style="width: 900px; height: 500px;"></div> -->
			<div id="demo"></div>
			
			</div>
			<!-- menu chart -->
			<div class="charts">
				<a name="chart1"></a>
				<span id="piechart" ></span>
				<span id="piechart-gender" ></span>
				<span id="piechart-location" ></span>
				<span id="piechart-age" ></span>
			</div>	
			
			
<!-- 		</div> -->

<!-- 	<button id="goHome">Go Home</button> -->
</body>
</html>