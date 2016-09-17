<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Services</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/Javascript-Inter.js"></script>
<!-- 	<script type="text/javascript" src="js/Javascript-Inter.js"></script> -->
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
	</script>
	<script>
// 		var test = new test('tbl-mutalfriend',20);
// 		test.init();
	</script>
 	
		
	
	<div>
		<table id="tbl-mutalfriend">
			<thead>
				<tr>
					<th>No.</th>
					<th>NAME</th>
					<th>GENDER</th>
					<th>BIRTHDAY</th>
					<th>ID</th>
					<th>LOCATION</th>
				</tr>
			</thead>
			<tbody id="tableBody">
			</tbody>
		</table>
	</div>
	<div id="pageNavPosition"></div>


	<script>
// 		var test = new secondFunction();
// 		test.waitForIt();
	</script>


	<script type="text/javascript">
//  		var pager = new showListFriendAPI();
//  	     pager.init();
// 	     alert ("pages2"+this.pages);
// 	     pager.showPageNav('pager', 'pageNavPosition');
// 	     pager.showPage(1);
// 				var pager = new Pager('tbl-mutalfriend',20);
// 		 	     pager.init();
// 		 	     pager.showPageNav('pager', 'pageNavPosition');
// 		 	     pager.showPage(1);
			
 	</script> 
 	

	
	
	<button id="goHome">Go Home</button>
</body>
</html>