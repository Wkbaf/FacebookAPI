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
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
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

		<div class="background">
			<div class="main-frame">
				
				<!-- table of friend all -->
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
		
				<!-- table of friend with all infor -->
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
		
			</div>
		</div>
			 	
<!-- 	 Script for content -->

<!-- search friends -->
		<div id="container">
			<div class="row">
		        <div class="col-sm-6 col-sm-offset-3">
		                <div class="input-group stylish-input-group">
		                    <input type="text" class="form-control"  placeholder="Search" >
		                    <span class="input-group-addon">
		                        <button type="submit">
		                            <span class="glyphicon glyphicon-search"></span>
		                        </button>  
		                    </span>
		                </div>
		        </div>
			</div>
		</div>
	

		

	
	
	<button id="goHome">Go Home</button>
</body>
</html>