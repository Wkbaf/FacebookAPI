<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>BAPAPP</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/jquery.imagemapster.js"></script>
	<script type="text/javascript" src="js/Javascript-SDK.js"></script>
	<link rel="stylesheet" type="text/css" href="css/BafApp.css"/>
	<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/animate.css">
	<script src="js/wow.min_.js"></script>
	<script type="text/javascript">
		new WOW().init();
	</script>
</head>
<body>

<!-- 	SCRIPT facebook graph API -->
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
	<script type="text/javascript">
	
		var flags = false;
		
		// [1] Load các thành phần cần thiết
	 	window.fbAsyncInit = function() {
		  FB.init({
		    appId      : '1400043393356379',
		    cookie     : true,   
		                        
		    xfbml      : true,  
		    version    : 'v2.1' 
		  });
		  
// 		   flags = true;
		   
		 // Gọi hàm xử lí trạng thái để kiểm tra trạng thái hiện tại
		  FB.getLoginStatus(function(response) {
			    statusChangeCallback(response);
			  });
	
			  };
		
		// Check load init
// 		function loadint(){
// 			if(flags==false){alert ("sdas");}
// 		}
	</script>
	
	<!--  CODE PAGE -->
	
		<div class="fixed-bg bg-1" ></div>
		
		<div class="fixed-bg bg-1tp"></div>
		
<!-- 		<div class="fixed-bg-temp"><a name="service"></a></div> -->

	 	<div class="fixed-bg bg-2"><a name="service"></a></div>
	 	
	 	<div class="fixed-bg bg-3"></div>
	 	
	 	<div class="fixed-bg bg-4"></div>
	 	
	 	<div class="fixed-bg bg-5"></div>
	 	
	 	<div class="fixed-bg bg-6"></div>
	 	
	 	<div class="opacityBG"></div>
		
		<div class="contain-frame">
		
<!-- img star moon cloud to tranform bg -->
		<img class="img-star wow bounceInDown" alt="star" src="image/homepage/star.png">
		<img class="img-starw wow bounceInDown" alt="starw" src="image/homepage/starw.png">
		<img class="img-moon wow bounceInDown" alt="moon" src="image/homepage/moon.png">
		<img class="img-cloud wow bounceInDown" alt="cloud" src="image/homepage/cloud.png">
		
		<!-- MENU -->
			<div class="menu-nav">
	            <div id="wrapper">
	                 <div class="nav">
	                     <ul>
	                         <li class="active"><a href="" id="a1"><span class="glyphicon glyphicon-home"></span ><span class="nav-text">Home</span> </a></li>
	                         <li><a href="#service" id="a2"><span class="glyphicon glyphicon-play-circle"></span><span class="nav-text">Service</span></a></li>
	                         <li><a href="#about" id="a3"><span class="glyphicon glyphicon-th-large"></span><span class="nav-text">About us</span></a></li>
	                         <li><a href="#" id="a4"><span class="glyphicon glyphicon-book"></span><span class="nav-text">Contact us</span></a></li>
<!-- 	                         <li><a href="#" class="fb" id="btb" onclick="RequestLoginFB()" style="display:none"><img alt="facebookimg" src="image/fb.png"></a></li> -->
	                     </ul>
	                 </div>  
	            </div>
        	</div>

		
        	
		<!-- Frame in opacityBG -->
			<div class="frame wow bounceInDown">
				<img  id="cockpit" alt="cockpit" src="image/cockpit2.gif" >
				<span id="span-cockpit" class="frame sub-framefb" onclick="RequestLoginFB()"></span>
	 			<span class="frame sub-frameser" onclick="location='#service'"></span>
	 			<span class="frame sub-framecont" ></span>
	 			<span class="frame sub-frameabout" ></span>
	 		</div>
	 		
	 		<div class="frametp">
	 			<div class="logan1">
<!-- 					<h1><span id="citylights">BAPAPP</span></h1> -->
<!-- 					<hr> -->
					<h1><span class="span1">BAPAPP</span></h1>
				</div>
				<a href="#service" class="frametp subframe"></a>
	 		</div>
	 	
			<div class="contain-bg2">
				<h1>SERVICE</h1>
				
				<div class="content-bg2">
					<div class="content-bg2 child">
					
						<div class="content-bg2 child circle">
							<a href="listfriend.html" onclick="return CheckLog()">
								<img class="img" id="img1" alt="icon-friend" src="image/icon-b3.png">
							</a>
						</div>
						
						<h1><a href="listfriend.html">Friends</a></h1>
						
						<h4>
							<b>Friendship</b> is not a big thing ...
							It's a million little things
						</h4>
					</div>
					
					
					<div class="content-bg2 child">
					
						<div class="content-bg2 child circle">
							<a href="listfriend.html?1" onclick="return CheckLog()">
								<img class="img" id="img2"  alt="icon-friend" src="image/icon-genderb.png">
							</a>
						</div>
						
						<h1><a href="listfriend.html?1">Genders</a></h1>
						
						<h4>
							Don't live up to your stereotypes
						</h4>
						<h3>SHERMAN ALEXIE</h3>
					</div>
					
					
					<div class="content-bg2 child">
					
						<div class="content-bg2 child circle">
							<a id="link-location" href="listfriend.html?0" onclick="return CheckLog()">
								<img class="img" id="img3"  alt="icon-friend" src="image/icon-globeb.png">
							</a>
						</div>
						
						<h1><a href="listfriend.html?0">Geography</a></h1>
						
						<h4>
							One's destination is never a place, but a new way of seeing things
						</h4>
						<h3>Henry Miller</h3>
					</div>
				</div>
			</div>
			
			<div class="contain-bg3">
				<h1>BapApp</h1>
			</div>
			
			<div class="contain-bg4">
				<h1>BapApp</h1>
			</div>
			
			<div class="contain-bg5">
				<h1>BapApp</h1>
			</div>
			
			<div class="contain-footer">
				<h1>ABOUT</h1>
				
				<div class="content-footer">
					<a href="policy.html">Policy</a>
					<a href="service.html">Service</a>
				</div>
			</div>
		</div>
		
		<!-- Popup -->
		<div id="background-pop">
			<div class="popup">
				<span class="btnLog fb-login-button ">Continue with Facebook</span>
				<img alt="close-icon" src="image/popup-close.png" id="popupClose">
			</div>
		</div>
		<!-- NÚT ĐĂNG NHẬP -->
<!-- 		<a onclick='RequestLoginFB()' ><img id="btn" alt="btn facebook" src="image/btnfb.png"  class="btnFB"></a> -->
		
		
		
		<div class="goHome"><span class="glyphicon glyphicon-home"></span ></div>
	    <p id="lbl" style="display:none">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG!</p>
	    <p id="lbl2" style="display:none"></p><br>
	    
	    
<!-- 	    <button onclick="loadint()">Load init ?</button> -->
    
</body>
</html>