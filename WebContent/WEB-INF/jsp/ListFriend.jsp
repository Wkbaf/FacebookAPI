<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Services</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/Javascript-SDK.js"></script>
<!-- 	<script type="text/javascript" src="js/Javascript-Inter.js"></script> -->
	<link rel="stylesheet" type="text/css" href="css/ListFriend.css"/>
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
		    appId      : '1096288800465833',
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
			
// 			 FB.getLoginStatus(function() {
// 					showListFriendAPI(response);
// 					alert ("DSad");
// 					showFriendAPI(response);
// 				 var pager = new showListFriendAPI(response,'tbl-mutalfriend',20);
// 				pager.list();
// 				pager.init();
// 					}
// 				);
// 			 };
			 
	</script>
		
	
<!-- 	CODE PAGE -->

<!-- 	Script for background -->
	<div class="fixed-bg bg-1"></div>
		
 	<div class="fixed-bg bg-2"></div>
 	
 	<div class="fixed-bg bg-3"></div>
 	
 	<div class="fixed-bg bg-4"></div>
 	
 	<div class="fixed-bg bg-5"></div>
	 
<!-- 	 <div class="contain-frame"> -->
<!-- 	 	<div class="frame"> -->
<!-- 			<img  id="frame-tv" alt="frame-tv" src="image/frametv1.png" > -->
<!-- 		</div> -->
<!-- 	 </div> -->
	 	
<!-- 	 Script for content -->
		<div id="margin-tbl-listfriend">
		<table id="tbl-listfriend">
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
			<tbody id="tableBody">
			</tbody>
		</table>
		</div>
		<div id="margin-tbl-listfriend-all">
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
	
	
	<button id="goHome">Go Home</button>
</body>
</html>