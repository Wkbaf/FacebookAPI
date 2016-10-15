<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="css/Friends.css">
	<script src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/Javascript-SDK.js"></script>
	<title>Friends</title>
</head>
<body>
	<div class="container">
		<!-- header -->
		<div class="header">
			<div class="logo">BapApp</div>
			<div class="search">
				<input type="text" class="search input-search"  placeholder="Search" >
			</div>
		</div>
		<!-- cross-menu  -->
		<div class="menu">
			<ul>
				<li><a href="#" class="active">Friends on BapApp</a></li>
				<li><a href="#">Friends on Facebook</a></li>
			</ul>
		</div>
		<!-- Content -->
		<div class="content">
			<!-- Path -->
			<div class="path"></div>
			<!-- Table -->
			<div class="table">
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
		</div>
		<!-- Menu Statictis -->
		<div class="statictis"></div>
		<!-- Pie chart -->
		<div class="chart"></div>
	</div>
	
	<!-- Javascript SDK -->
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
		  
		// Gọi hàm xử lí list friend
		
		  FB.getLoginStatus(function(response) {
			  showListFriendAPI(response);
			  showFriendAPI();
			  });
			  };
	</script>
</body>
</html>