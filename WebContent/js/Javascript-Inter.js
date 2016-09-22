	var appId = 1096288800465833;
	var Loged = false;
	var showed = false; 
	
	
	
	
	// [2] Xử lí trạng thái đăng nhập
	  function statusChangeCallback(response) {
	   
		// Người dùng đã đăng nhập FB & ứng dụng
	    if (response.status === 'connected') {
	    	Loged = true;
	    	
	    	document.getElementById("lbl").setAttribute("style","display:block");
	    	showInforAPI();
// 	    	showFriendAPI();
	    } 
		// Người dùng đăng nhập FB nhưng chưa đăng nhập ứng dụng
	    else if (response.status === 'not_authorized') {
	    	$("#cockpit").attr("src","image/cockpit.gif");
	    	DisplayButLog();
	    } 
		// Người dùng chưa đăng nhập FB
	    else {
	    	$("#cockpit").attr("src","image/cockpit.gif");
	    	DisplayButLog();
	    }
	  }
	  
	// [3] Yêu cầu đăng nhập FB
	  function RequestLoginFB() {
	      
		  if(Loged==true) return false;
		  else{
			  window.location = 'http://graph.facebook.com/oauth/authorize?client_id='+appId+'&scope=user_friends,public_profile,email,user_birthday,user_about_me,user_photos,user_location,publish_actions&redirect_uri=http://localhost:8080/BafApp/homepage.html&response_type=token';
		  }
	      return true;
	  }
	
	//[4] HIển thị nút đăng nhập
	  function DisplayButLog(){
		document.getElementById("btn").setAttribute("style","display:block");
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
	
	// [7] Xử lí sự kiện cho service
	  	function CheckLog(){
	  		if(Loged == false){
	  			document.getElementById("background-pop").style.display = "block";
	  			return false;
	  		}
	  		return true;
	  	}  
	  
	  
	
	  
	  
	  function test(tableName, itemsPerPage){
		  
		  	this.tableName = tableName;
	  	    this.itemsPerPage = itemsPerPage;
	  	    this.currentPage = 1;
	  	    this.pages = 0; 
	  	    this.inited = false;
	  	    
		  this.init = function(){
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
					 var numRows = 0;
					 FB.api(
							  '/me/invitable_friends',
							  'GET',
//				 				  {"fields":"friends{id,name}"},
								{"fields":"name,birthday","pretty":"0","limit":"5000"},
							  function(response) {
							     if(!response || response.error){
							    	 alert ("loi");
							     }else{
							    	 for (var i in response.data)
							     	{
							     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
							            var cols = newRow.children();
							            cols.eq(0).text(numRows);
							            cols.eq(1).text(response.data[i].name);
//							            cols.eq(2).text(response.data[i].gender);
							            newRow.appendTo('#tableBody');
							            numRows++;
							     	}
							    	 	
							    	 	var rows = document.getElementById(tableName).rows;
							  	        var records = (rows.length - 1);
							  	      alert ("Asdasdsadsa");
							  	        this.pages = math.ceil(records / itemsPerPage);
							  	      
							  	        this.inited = true;
							  	        
							     }
							     
								}
							   
						  );
					 
					});
		 		};
		  }
		  
		  
		  
		  function showFriendAPI(){
			  var numRows = 0;
			  
			  FB.api(
					  '/me/friends',
					  'GET',
					  {"fields":"name,gender,birthday,id,location","pretty":"0","limit":"5000"},
					  function(response) {
					     if(!response || response.error){
					    	 alert ("loi");
					     }else{
					    	 for (var i in response.data)
					    	 {
							// 		JQuery			     		
									var newRow = $('<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
						            var cols = newRow.children();
						            cols.eq(0).text(numRows);
						            cols.eq(1).text(response.data[i].name);
						            cols.eq(2).text(response.data[i].id);
						            cols.eq(3).text(response.data[i].gender);
						            cols.eq(4).text(response.data[i].birthday);
						            cols.eq(5).text(response.data[i].location.name);
						            newRow.appendTo('#tableBody-all');
						            numRows++;
						            
					    	 }
					    }
					  }
					  
					  
					);
			 
		}
		  
		  
		  
		  this.showRecords = function(from, to) {
	  	        var rows = document.getElementById(tableName).rows;
	  	        // i starts from 1 to skip table header row
	  	        for (var i = 1; i < rows.length; i++) {
	  	            if (i < from || i > to)
	  	                rows[i].style.display = 'none';
	  	            else
	  	                rows[i].style.display = '';
	  	        }
	  	    }

	  	    this.showPage = function(pageNumber) {
	  	          if (! this.inited) {
	  	                   alert("not init show page");
	  	          }
	  	        var oldPageAnchor = document.getElementById('pg'+this.currentPage);
	  	        oldPageAnchor.className = 'pg-normal';

	  	        this.currentPage = pageNumber;
	  	        var newPageAnchor = document.getElementById('pg'+this.currentPage);
	  	        newPageAnchor.className = 'pg-selected';

	  	        var from = (pageNumber - 1) * itemsPerPage + 1;
	  	        var to = from + itemsPerPage - 1;
	  	        this.showRecords(from, to);
	  	    }

	  	    this.prev = function() {
	  	        if (this.currentPage > 1)
	  	            this.showPage(this.currentPage - 1);
	  	        alert (this.currentPage+"pages"+this.pages);
	  	    }

	  	    this.next = function() {
	  	        if (this.currentPage < this.pages) {
	  	            this.showPage(this.currentPage + 1);
	  	        }
	  	    }

	  	    

	  	  this.showPageNav = function(pagerName, positionId) {
	          if (! this.inited) {
	                   alert("not init show page nav");
	          }
	          alert("pages");
	          var element = document.getElementById(positionId);
	         
	          var pagerHtml = '<span onclick="' + pagerName + '.prev();" class="pg-normal"> &#171 Prev </span> | ';
	        for (var page = 1; page <= this.pages; page++)
	            pagerHtml += '<span id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');">' + page + '</span> | ';
	        pagerHtml += '<span onclick="'+pagerName+'.next();" class="pg-normal"> Next &#187;</span>';

	        element.innerHTML = pagerHtml;
	    }
		  
	  }


	  
	  $(document).ready(function(){
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
				 var numRows = 0;
				 FB.api(
						  '/me/invitable_friends',
						  'GET',
//			 				  {"fields":"friends{id,name}"},
							{"fields":"name,birthday","pretty":"0","limit":"5000"},
						  function(response) {
						     if(!response || response.error){
						    	 alert ("loi");
						     }else{
						    	 for (var i in response.data)
						     	{
						     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
						            var cols = newRow.children();
						            cols.eq(0).text(numRows);
						            cols.eq(1).text(response.data[i].name);
//						            cols.eq(2).text(response.data[i].gender);
						            newRow.appendTo('#tableBody');
						            numRows++;
						     	}
						  
						  	        
						     }
						     
							}
						   
					  );
				 
				});
			 
			 
	 		};
		});
	  
	  
	// [6] Lấy danh sách pạn pè  
	  $(document).ready(function(){
//		  var rows = document.getElementById("tbl-mutalfriend").rows;
//        for (var i =0 ;i<=rows.length;i++)
//          {
//                 if (i>=0 && i<=10) {
//                     rows[i].style.display = '';
//                 }
//                 else
//                      rows[i].style.display = 'none';
//
//          }
        alert ("Đasa");
		});
	 
	  

	  //function show page
	  	function Pager(tableName, itemsPerPage) {
	  		this.tableName = tableName;
	  	    this.itemsPerPage = itemsPerPage;
	  	    this.currentPage = 1;
	  	    this.pages = 0; 
	  	    this.inited = false;

	  	   
	  	    this.showRecords = function(from, to) {
	  	        var rows = document.getElementById(tableName).rows;
	  	        // i starts from 1 to skip table header row
	  	        for (var i = 1; i < rows.length; i++) {
	  	            if (i < from || i > to)
	  	                rows[i].style.display = 'none';
	  	            else
	  	                rows[i].style.display = '';
	  	        }
	  	    }

	  	    this.showPage = function(pageNumber) {
	  	          if (! this.inited) {
	  	                   alert("not inited");
	  	                   return;
	  	          }
	  	        var oldPageAnchor = document.getElementById('pg'+this.currentPage);
	  	        oldPageAnchor.className = 'pg-normal';

	  	        this.currentPage = pageNumber;
	  	        var newPageAnchor = document.getElementById('pg'+this.currentPage);
	  	        newPageAnchor.className = 'pg-selected';

	  	        var from = (pageNumber - 1) * itemsPerPage + 1;
	  	        var to = from + itemsPerPage - 1;
	  	        this.showRecords(from, to);
	  	    }

	  	    this.prev = function() {
	  	        if (this.currentPage > 1)
	  	            this.showPage(this.currentPage - 1);
	  	        alert (this.currentPage+"pages"+this.pages);
	  	    }

	  	    this.next = function() {
	  	        if (this.currentPage < this.pages) {
	  	            this.showPage(this.currentPage + 1);
	  	        }
	  	    }

	  	    this.init = function() {
	  	        var rows = document.getElementById(tableName).rows;
	  	        var records = (rows.length - 1);
	  	        this.pages = math.ceil(records / itemsPerPage);
	  	        this.inited = true;
	  	      alert ("pages1"+this.pages);
	  	      
	  	    }

	  	  this.showPageNav = function(pagerName, positionId) {
	          if (! this.inited) {
	                   alert("not inited");
	                   return;
	          }
	          var element = document.getElementById(positionId);

	          var pagerHtml = '<span onclick="' + pagerName + '.prev();" class="pg-normal"> &#171 Prev </span> | ';
	        for (var page = 1; page <= this.pages; page++)
	            pagerHtml += '<span id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');">' + page + '</span> | ';
	        pagerHtml += '<span onclick="'+pagerName+'.next();" class="pg-normal"> Next &#187;</span>';

	        element.innerHTML = pagerHtml;
	    }
	  	}