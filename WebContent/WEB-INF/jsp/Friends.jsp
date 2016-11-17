<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="css/Friends.css">
	<script src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/Friends.js"></script>
	<script type="text/javascript" src="js/Javascript-SDK.js"></script>
	<script type="text/javascript" src="js/loader.js"></script>
	<link rel="stylesheet" href="css/animate.css">
	<script src="js/wow.min_.js"></script>
	<title>Friends</title>
</head>
<body>
	<div class="container">
		<!-- header -->
		<div class="header">
			<div class="logo"><a href="homepage.html">BapApp</a></div>
			<div class="search">
				<input type="text" class="search input-search1"  placeholder="Search" >
				<input type="text" class="search input-search2"  placeholder="Search" >
			</div>
			<a id="menu-Sta" href="#"><b>&#9776;</b></a>
		</div>
		<!-- cross-menu  -->
		<div class="menu">
			<ul>
				<li><a href="#" class="active">Friends on BapApp</a></li>
				<li><a href="#">Pie Chart Gender</a></li>
				<li><a href="#">Pie Chart Location</a></li>
				<li><a href="#">Pie Chart Age</a></li>
				<li><a href="#">Friends on Facebook</a></li>
				<li><a href="#">Pie Chart Letter</a></li>
			</ul>
		</div>
		<!-- Content -->
		<div class="content">
			<!-- Path -->
			<div class="path">
<!-- 				<span><a href="homepage.html">Home</a></span>/ -->
<!-- 				<span><a href="homepage.html#service">Service</a></span>/ -->
<!-- 				<span><a href="" id="fr-fb" class="not-active">Friends on Facebook</a></span> -->
<!-- 				<span><a href="" id="fr-bp" class="not-active">Friends on BapApp</a></span> -->
			</div>
			<!-- Table -->
			<div class="table">
				<h1 id="title-all">Friends on BapApp</h1>
<!-- 				<h1 id="title">Friends on Facebook</h1> -->
				<!-- Table -->
				<table id="tbl-listfriend-all">
					<thead>
						<tr>
							<th>No.</th>
							<th>NAME</th>
							<th>GENDER</th>
							<th>BIRTHDAY</th>
							<th>LOCATION</th>
							<th>AVATAR</th>
						</tr>
					</thead>
						
					<tbody id="tableBody-all">
					</tbody>
				</table>
				<!-- list friends -->
				<div class="list-container">
					<ul></ul>
				</div>
				<!-- Pie chart -->
				<div class="chart">
					<span id="piechart" ></span>
					<span id="piechart-gender" ></span>
					<span id="piechart-location" ></span>
					<span id="piechart-age" ></span>
				</div>
			</div>
		</div>
		<!-- Menu Statictis -->
		<div class="statictis">
			<div class="menu-statictis">
				<h1><span id="hide-Sta"></span>Statistics By</h1>
				<ul>
					<li><a href="#chart1" id="bygender">Gender</a></li>
					<li><a href="#chart1" id="bylocation">Location</a></li>
					<li><a href="#chart1" id="byage">Age</a></li>
					<li><a href="#chart1" id="byletter">Letter</a></li>
				</ul>
			</div>
		</div>
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
			    version    : 'v2.8' 
			  });
		  
		// Gọi hàm xử lí trạng thái để kiểm tra trạng thái hiện tại
		
		  FB.getLoginStatus(function(response) {
			  showListFriendAPI(response);
			  showFriendAPI();
			  });
			  };
	</script>
</body>
</html>