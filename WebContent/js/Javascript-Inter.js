	var appId = 1400043393356379;
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
				    appId      : '1400043393356379',
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
			    appId      : '1400043393356379',
			    cookie     : true,   
			    xfbml      : true,  
			    version    : 'v2.1' 
			  });
			  
			// Gọi hàm xử lí list friend
//			 FB.getLoginStatus(function(response) {
//				 var numRows = 0;
//				 FB.api(
//						  '/me/invitable_friends',
//						  'GET',
////			 				  {"fields":"friends{id,name}"},
//							{"fields":"name,birthday","pretty":"0","limit":"5000"},
//						  function(response) {
//						     if(!response || response.error){
//						    	 alert ("loi");
//						     }else{
//						    	 for (var i in response.data)
//						     	{
//						     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
//						            var cols = newRow.children();
//						            cols.eq(0).text(numRows);
//						            cols.eq(1).text(response.data[i].name);
////						            cols.eq(2).text(response.data[i].gender);
//						            newRow.appendTo('#tableBody');
//						            numRows++;
//						     	}
//						  
//						  	        
//						     }
//						     
//							}
//						   
//					  );
//				 
//				});
			 
			  FB.getLoginStatus(function(response) {
				  showListFriendAPI(response);
			  });
	 		};
		});
	  
	  
	// [6] Lấy danh sách pạn pè  
	  function showListFriendAPI(response){
	    var numRows = 0;
	    var A = 0;
	    var B = 0;
	    var C = 0;
	    var D = 0;
	    var E = 0;
	    var F = 0;
	    var G = 0;
	    var H = 0;
	    var I = 0;
	    var J = 0;
	    var K = 0;
	    var L = 0;
	    var M = 0;
	    var N = 0;
	    var O = 0;
	    var P = 0;
	    var Q = 0;
	    var R = 0;
	    var S = 0;
	    var T = 0;
	    var U = 0;
	    var W = 0;
	    var X = 0;
	    var Y = 0;
	    var Z = 0;
	    
	    
	    var name = new Array();
	    var dataResponse = new Array();
	    document.getElementById("demo").innerHTML = name;
	  FB.api(
		  '/me/invitable_friends',
		  'GET',
//			  {"fields":"friends{id,name}"},
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
//		            cols.eq(2).text(response.data[i].firstname);

		            newRow.appendTo('#tableBody');
		            numRows++;
		            name.push(response.data[i].firstname.substring(0, 1));
		            dataResponse.push(response.data[i].name);
//		    		document.write(name[response.data[i].name.substring(0, 1)]);
		     	}
		    	
		    	    document.getElementById("demo").innerHTML = name;
		    	    
		    	    for(var i in name){
		    	    	if(name[i]=='A') A += 1;
		    	    	if(name[i]=='B') B += 1;
		    	    	if(name[i]=='C') C += 1;
		    	    	if(name[i]=='D') D += 1;
		    	    	if(name[i]=='E') E += 1;
		    	    	if(name[i]=='F') F += 1;
		    	    	if(name[i]=='G') G += 1;
		    	    	if(name[i]=='H') H += 1;
		    	    	if(name[i]=='I') I += 1;
		    	    	if(name[i]=='J') J += 1;
		    	    	if(name[i]=='K') K += 1;
		    	    	if(name[i]=='L') L += 1;
		    	    	if(name[i]=='M') M += 1;
		    	    	if(name[i]=='N') N += 1;
		    	    	if(name[i]=='O') O += 1;
		    	    	if(name[i]=='P') P += 1;
		    	    	if(name[i]=='Q') Q += 1;
		    	    	if(name[i]=='R') R += 1;
		    	    	if(name[i]=='S') S += 1;
		    	    	if(name[i]=='T') T += 1;
		    	    	if(name[i]=='U') U += 1;
		    	    	if(name[i]=='W') W += 1;
		    	    	if(name[i]=='X') X += 1;
		    	    	if(name[i]=='Y') Y += 1;
		    	    	if(name[i]=='Z') Z += 1;
		    	    	
		    	    }
////		    	    alert ("A"+ A);
////		    	    alert ("B"+ B);
//		    	  //chart 
		  		  google.charts.load("current", {packages:["corechart"]});
		  	        google.charts.setOnLoadCallback(drawChart);
		  	        function drawChart() {
		  	          var data = google.visualization.arrayToDataTable([
		  	            ['Language', 'Speakers (in millions)'],
		  	            ['A', A], ['B', B], ['C', C],
		  	            ['D', D], ['E', E], ['F', F],
		  	            ['G', G], ['H', H], ['I', I],
			  	        ['J', J], ['K', K], ['L', L],
			  	        ['M', M], ['N', N], ['O', O],
			  	        ['P', P], ['Q', Q], ['R', R],
			  	      	['S', S], ['T', T], ['U', U],
			  	    	['W', W], ['X', X], ['Y', Y],['Z', Z]
		  	          ]);

		  	          var options = {
		  	            title: 'Statistics by letters',
		  	            legend: 'none',
		  	            pieSliceText: 'label',
		  	            slices: { 
		  	            		  0: {offset: 0.5},
		  	            		  4: {offset: 0.2},
		  	                      12: {offset: 0.3},
		  	                      14: {offset: 0.4},
		  	                      15: {offset: 0.5}
		  	                      
		  	            },
		  	          };

		  	          var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		  	          chart.draw(data, options);
		  	      }
		     }
		     
			}
//		   
	  );
		
	  

	  
	  
	}
	  

