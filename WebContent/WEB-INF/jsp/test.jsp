<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="js/jQuery.js"></script>
 <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/Javascript-SDK.js"></script>
</head>
<body >
	<script>
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
	var appId = 1660779217499961;
	
	// [1] Load các thành phần cần thiết
 	window.fbAsyncInit = function() {
	  FB.init({
	    appId      : appId,
	    cookie     : true,   
	                        
	    xfbml      : true,  
	    version    : 'v2.5' 
	  });
	  
	 // Gọi hàm xử lí trạng thái để kiểm tra trạng thái hiện tại
	  FB.getLoginStatus(function(response) {
		    statusChangeCallback(response);
		  });

		  };
	  
	// [2] Xử lí trạng thái đăng nhập
	  function statusChangeCallback(response) {
	   
		// Người dùng đã đăng nhập FB & ứng dụng
	    if (response.status === 'connected') {
	    	document.getElementById("lbl").setAttribute("style","display:block");
	    	showInforAPI();
	    	showListFriendAPI(response);
	    } 
		// Người dùng đăng nhập FB nhưng chưa đăng nhập ứng dụng
	    else if (response.status === 'not_authorized') {
	    	DisplayButLog();
	    } 
		// Người dùng chưa đăng nhập FB
	    else {
	    	DisplayButLog();
	    }
	  }
	  
	// [3] Yêu cầu đăng nhập FB
	  function RequestLoginFB() {
	      window.location = 'http://graph.facebook.com/oauth/authorize?client_id='+appId+'&scope=user_friends,public_profile,email,user_likes,user_birthday,user_education_history,user_work_history,user_posts,user_photos,user_location,publish_actions&redirect_uri=http://localhost:8080/BafApp/test.html&response_type=token';
	  }
	
	//[4] HIển thị nút đăng nhập
	  function DisplayButLog(){
		document.getElementById("bnt1").setAttribute("style","display:block");
	}
	
	// [5] Lấy thông tin người dùng
	  function showInforAPI(){
		    FB.api('/me', function(response) {
		      var name = response.name;
		      var id = response.id;
		      var friend_list = response.friendlists;
		      document.getElementById("lbl2").setAttribute("style","display:block");
		      document.getElementById("lbl2").innerHTML = "Name: " + name + "ID: " + id;response.data[0].name
		    });
	}
	
	// [6] Lấy danh sách pạn pè
// 	  function showListFriendAPI(){
// 		  var numRows = 0;
// 		  FB.api(
// 				  '/me/friends',
// 				  'GET',
// 				  {"fields":"name,birthday,about","pretty":"0","limit":"5000"},
// 				  function(response) {
// 				     if(!response || response.error){
// 				    	 alert ("loi");
// 				     }else{
// 				    	 for (var i in response.data)
// 				    	 {
// 						// 		JQuery			     		
// 								var newRow = $('<tr><td></td><td></td></tr>');
// 					            var cols = newRow.children();
// 					            cols.eq(0).text(numRows);
// 					            cols.eq(1).text(response.data[i].name);
// 					            newRow.appendTo('#tableBody');
// 					            numRows++;
					            
// 					  }
// 				    }
// 				  }
// 				);
		 
// 	}
	
	  
	</script>
	
	<!-- NÚT ĐĂNG NHẬP -->
	
	<button id="bnt1" style="display:none" onclick="RequestLoginFB()">ĐĂNG NHẬP</button>
	
    <p id="lbl" style="display:none">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG!</p>
    <p id="lbl2" style="display:none"></p><br>

<!-- 	show table friend -->
	<div class="">
    <table id="lbl3" style="position: absolute; top: 0px; left: 0; color : red;">
        <thead>
            <tr>
        	    <th> S.no </th>
        		<th> List Friend Name </th>
        		<th> First Name </th>
        	</tr>
        </thead>
        <tbody id="tableBody">
        </tbody>
    </table>
    </div>    
    
    <a id="btn2" style="display: block" type="button" href="listfriend.html">list friend</a>
    
    
<!--     chart -->
	<div id="piechart" style="width: 900px; height: 500px;"></div>


	<div id="demo"></div>
</body>
</html>