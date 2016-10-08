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
			  window.location = 'http://graph.facebook.com/oauth/authorize?client_id='+appId+'&scope=user_friends,public_profile,email,user_birthday,user_about_me,user_photos,user_location,publish_actions&redirect_uri=http://localhost:8080/BapApp/homepage.html&response_type=token';
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
	
	// [6] Lấy danh sách pạn pè
	  function showListFriendAPI(response){
		    var numRows = 0;
		    var name = new Array();
		  FB.api(
			  '/me/taggable_friends',
			  'GET',
// 				  {"fields":"friends{id,name}"},
				{"fields":"name,birthday,gender,id,picture","pretty":"0","limit":"5000"},
			  function(response) {
			     if(!response || response.error){
			    	 alert ("loidd");
			     }else{
			    	 for (var i in response.data)
			     	{
			     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
			            var img = '<img src="'+response.data[i].picture.data.url+'"/>';
			     		var cols = newRow.children();
			            cols.eq(0).text(numRows);
			            cols.eq(1).text(response.data[i].name);
//			            cols.eq(2).text(response.data[i].id);
//			            cols.eq(3).text(response.data[i].gender);
//			            cols.eq(4).text(response.data[i].birthday);
			            cols.eq(2).append(img);
			            
			            newRow.appendTo('#tableBody');
			            numRows++;
			            //tạo mảng các kí tự bắt đầu của tên
			            name.push(response.data[i].name.substring(0, 1));
			     	}
			    	 chart(name,"piechart","Statistics by letters",1);
			     }
			     
				}
			   
		  );
	  	}
	  
	  // [7]  Hàm vẽ biểu đồ
	  function chart(array,chartid,title,type){
		  if(type==1){
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
			    
			    
//			    var name = new Array();
			    
			    for(var i in array){
	    	    	if(array[i]=='A') A += 1;
	    	    	if(array[i]=='B') B += 1;
	    	    	if(array[i]=='C') C += 1;
	    	    	if(array[i]=='D') D += 1;
	    	    	if(array[i]=='E') E += 1;
	    	    	if(array[i]=='F') F += 1;
	    	    	if(array[i]=='G') G += 1;
	    	    	if(array[i]=='H') H += 1;
	    	    	if(array[i]=='I') I += 1;
	    	    	if(array[i]=='J') J += 1;
	    	    	if(array[i]=='K') K += 1;
	    	    	if(array[i]=='L') L += 1;
	    	    	if(array[i]=='M') M += 1;
	    	    	if(array[i]=='N') N += 1;
	    	    	if(array[i]=='O') O += 1;
	    	    	if(array[i]=='P') P += 1;
	    	    	if(array[i]=='Q') Q += 1;
	    	    	if(array[i]=='R') R += 1;
	    	    	if(array[i]=='S') S += 1;
	    	    	if(array[i]=='T') T += 1;
	    	    	if(array[i]=='U') U += 1;
	    	    	if(array[i]=='W') W += 1;
	    	    	if(array[i]=='X') X += 1;
	    	    	if(array[i]=='Y') Y += 1;
	    	    	if(array[i]=='Z') Z += 1;
	    	    	
	    	    }
			  //chart 
		  		  google.charts.load("current", {packages:["corechart"]});
		  	        google.charts.setOnLoadCallback(drawChart);
		  	        function drawChart() {
		  	          var data = google.visualization.arrayToDataTable([
		  	            ['Letter', 'Total'],
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
		  	            title: title,
		  	            legend: 'left',
		  	            width:  900,
		  	            height: 600,
		  	            pieSliceText: 'label',
		  	            slices: { 
		  	            		  0: {offset: 0.5},
		  	            		  4: {offset: 0.2},
		  	                      12: {offset: 0.3},
		  	                      14: {offset: 0.4},
		  	                      15: {offset: 0.5}
		  	                      
		  	            },
		  	          };

		  	          var chart = new google.visualization.PieChart(document.getElementById(chartid));
		  	          chart.draw(data, options);
		  	      }
		  }
		  //chart gender
		  if(type==2){
			var male=0;
			var female=0;
			
			for (var i in array) {
				if(array[i].toUpperCase()=="Male".toUpperCase()) male+=1;
				else female+=1;
			}
			
			//chart 
	  		  google.charts.load("current", {packages:["corechart"]});
	  	        google.charts.setOnLoadCallback(drawChart);
	  	        function drawChart() {
	  	          var data = google.visualization.arrayToDataTable([
	  	            ['Gender', 'Total'],
	  	            ['Male', male], ['Female', female]
	  	          ]);

	  	          var options = {
	  	            title: title,
	  	            legend: 'left',
	  	            is3D: true,
	  	            width:  900,
	  	            height: 600,
	  	            slices: { 
	  	                      
	  	            },
	  	          };

	  	          var chart = new google.visualization.PieChart(document.getElementById(chartid));
	  	          chart.draw(data, options);
	  	      }
		  }
		  //chart location
		  if(type==3){
			  var HCM=0;
			  var HN=0;
			  var DN=0;
			  var CT=0;
			  var Other=0;
			  
			  
			  for (var i in array) {
				  if(array[i].trim().toUpperCase().indexOf("HO CHI MINH")!=-1){HCM+=1;}
				  if(array[i].trim().toUpperCase().indexOf("HOCHIMINH")!=-1){HCM+=1;}
				  if(array[i].trim().toUpperCase().indexOf("HA NOI")!=-1){HN+=1;}
				  if(array[i].trim().toUpperCase().indexOf("HANOI")!=-1){HN+=1;}
				  if(array[i].trim().toUpperCase().indexOf("DA NANG")!=-1){DN+=1;}
				  if(array[i].trim().toUpperCase().indexOf("DANANG")!=-1){DN+=1;}
				  if(array[i].trim().toUpperCase().indexOf("CAN THO")!=-1){CT+=1;}
				  if(array[i].trim().toUpperCase().indexOf("CANTHO")!=-1){CT+=1;}
				  else Other+=1;
				}
				
				//chart 
		  		  google.charts.load("current", {packages:["corechart"]});
		  	        google.charts.setOnLoadCallback(drawChart);
		  	        function drawChart() {
		  	          var data = google.visualization.arrayToDataTable([
		  	            ['Location', 'Total'],
		  	            ['Hồ Chí Minh', HCM], ['Hà Nội', HN],
		  	            ['Đà Nẵng', DN], ['Cần Thơ', CT],
		  	          	['Khác', Other]
		  	          ]);

		  	          var options = {
		  	            title: title,
		  	            legend: 'left',
		  	            is3D: true,
//		  	            pieHole: 0.4,
		  	            width:  900,
		  	            height: 600,
		  	            pieSliceText: 'percentage',
		  	            pieSliceTextStyle: {color: "white", fontSize: 16},
		  	            slices: { 
		  	            	 0: {offset: 0.1},
		  	            	 4: {offset: 0.0}
		  	            },
		  	          };

		  	          var chart = new google.visualization.PieChart(document.getElementById(chartid));
		  	          chart.draw(data, options);
		  	      }
		  }
		//chart age
		  if(type==4){
			  var younger=0;
			  var young=0;
			  var old=0;
			  var older=0;
			  var curyear = new Date().getFullYear();
			  for (var i in array) {
				  var date = array[i].trim().split("/");
				  var year = Math.abs(date[2] - curyear);
				  if(year<=25){
					  younger+=1;
				  }
				  if(year>=26&&year<=35){
					  young+=1;
				  }
				  if(year>=36&&year<=55){
					  old+=1;
				  }
				  else older+=1;
				}
				
				//chart 
		  		  google.charts.load("current", {packages:["corechart"]});
		  	        google.charts.setOnLoadCallback(drawChart);
		  	        function drawChart() {
		  	          var data = google.visualization.arrayToDataTable([
		  	            ['Age', 'Total'],
		  	            ['<=25', younger], ['26-35', young],
		  	            ['36-55', old], ['>=56', older]
		  	          ]);

		  	          var options = {
		  	            title: title,
		  	            legend: 'left',
		  	            is3D: true,
//		  	            pieHole: 0.4,
		  	            width:  900,
		  	            height: 600,
		  	            pieSliceText: 'percentage',
		  	            pieSliceTextStyle: {color: "white", fontSize: 16},
		  	            slices: { 
		  	            	0: {offset: 0.05}
		  	            },
		  	          };

		  	          var chart = new google.visualization.PieChart(document.getElementById(chartid));
		  	          chart.draw(data, options);
		  	      }
		  }
	  }
//	  
//	  function showListFriendAPI(response,tableName, itemsPerPage){
//		  
//		  this.tableName = tableName;
//		    this.itemsPerPage = itemsPerPage;
//		    this.currentPage = 1;
//		    this.pages = 0;
//		    this.inited = false;
//		    this.flag = false;
//		  
//		  this.list = function(response){
//			  var numRows = 0;
//			    
//			  FB.api(
//				  '/me/invitable_friends',
//				  'GET',
////					  {"fields":"friends{id,name}"},
//					{"fields":"name,birthday","pretty":"0","limit":"5000"},
//				  function(response) {
//				     if(!response || response.error){
//				    	 alert ("loi");
//				     }else{
//				    	 for (var i in response.data)
//				     	{
//				     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
//				            var cols = newRow.children();
//				            cols.eq(0).text(numRows);
//				            cols.eq(1).text(response.data[i].name);
////				            cols.eq(2).text(response.data[i].gender);
//				            newRow.appendTo('#tableBody');
//				            numRows++;
//				     	}
//				    	flag = true;
//				     }
//				     
//				     
//					}
//				   
//			  );
//			  	
//		  }
//		  
//		  this.init = function(){
//			  if(flag==true){
//				  var rows = document.getElementById(tableName).rows;
//		  	        var records = (rows.length - 1);
//		  	        this.pages = math.ceil(records / itemsPerPage);
//		  	        this.inited = true;
//			  }
//			  	
//		  }
//		  
//		  this.showRecords = function(from, to) {
//		        var rows = document.getElementById(tableName).rows;
//		        // i starts from 1 to skip table header row
//		        for (var i = 1; i < rows.length; i++) {
//		            if (i < from || i > to)
//		                rows[i].style.display = 'none';
//		            else
//		                rows[i].style.display = '';
//		        }
//		    }
//
//		    this.showPage = function(pageNumber) {
//		          if (! this.inited) {
//		                   alert("not inited");
//		                   return;
//		          }
//		        var oldPageAnchor = document.getElementById('pg'+this.currentPage);
//		        oldPageAnchor.className = 'pg-normal';
//
//		        this.currentPage = pageNumber;
//		        var newPageAnchor = document.getElementById('pg'+this.currentPage);
//		        newPageAnchor.className = 'pg-selected';
//
//		        var from = (pageNumber - 1) * itemsPerPage + 1;
//		        var to = from + itemsPerPage - 1;
//		        this.showRecords(from, to);
//		    }
//
//		    this.prev = function() {
//		        if (this.currentPage > 1)
//		            this.showPage(this.currentPage - 1);
//		        alert(this.pages);
//		    }
//
//		    this.next = function() {
//		        if (this.currentPage < this.pages) {
//		            this.showPage(this.currentPage + 1);
//		            alert(this.pages);
//		        }
//		    }
//
//		    this.showPageNav = function(pagerName, positionId) {
//		          if (! this.inited) {
//		                   alert("not inited");
//		                   return;
//		          }
//		          var element = document.getElementById(positionId);
//
//		          var pagerHtml = '<span onclick="' + pagerName + '.prev();" class="pg-normal"> &#171 Prev </span> | ';
//		        for (var page = 1; page <= this.pages; page++)
//		            pagerHtml += '<span id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');">' + page + '</span> | ';
//		        pagerHtml += '<span onclick="'+pagerName+'.next();" class="pg-normal"> Next &#187;</span>';
//
//		        element.innerHTML = pagerHtml;
//		    }
//				
//		  
//	  	}
	  
	  
//	  draw circle by letter
//	  function showListFriendAPI(response){
//		    var numRows = 0;
//		    var A = 0;
//		    var B = 0;
//		    var C = 0;
//		    var D = 0;
//		    var E = 0;
//		    var F = 0;
//		    var G = 0;
//		    var H = 0;
//		    var I = 0;
//		    var J = 0;
//		    var K = 0;
//		    var L = 0;
//		    var M = 0;
//		    var N = 0;
//		    var O = 0;
//		    var P = 0;
//		    var Q = 0;
//		    var R = 0;
//		    var S = 0;
//		    var T = 0;
//		    var U = 0;
//		    var W = 0;
//		    var X = 0;
//		    var Y = 0;
//		    var Z = 0;
//		    
//		    
//		    var name = new Array();
//		    var dataResponse = new Array();
//		    document.getElementById("demo").innerHTML = name;
//		  FB.api(
//			  '/me/invitable_friends',
//			  'GET',
////				  {"fields":"friends{id,name}"},
//				{"fields":"name,birthday","pretty":"0","limit":"5000"},
//			  function(response) {
//			     if(!response || response.error){
//			    	 alert ("loi");
//			     }else{
//			    	 for (var i in response.data)
//			     	{
//			     		var newRow = $('<tr><td></td><td></td><td></td></tr>');
//			            var cols = newRow.children();
//			            cols.eq(0).text(numRows);
//			            cols.eq(1).text(response.data[i].name);
////			            cols.eq(2).text(response.data[i].firstname);
//
//			            newRow.appendTo('#tableBody');
//			            numRows++;
//			            name.push(response.data[i].firstname.substring(0, 1));
//			            dataResponse.push(response.data[i].name);
////			    		document.write(name[response.data[i].name.substring(0, 1)]);
//			     	}
//			    	
//			    	    document.getElementById("demo").innerHTML = name;
//			    	    
//			    	    for(var i in name){
//			    	    	if(name[i]=='A') A += 1;
//			    	    	if(name[i]=='B') B += 1;
//			    	    	if(name[i]=='C') C += 1;
//			    	    	if(name[i]=='D') D += 1;
//			    	    	if(name[i]=='E') E += 1;
//			    	    	if(name[i]=='F') F += 1;
//			    	    	if(name[i]=='G') G += 1;
//			    	    	if(name[i]=='H') H += 1;
//			    	    	if(name[i]=='I') I += 1;
//			    	    	if(name[i]=='J') J += 1;
//			    	    	if(name[i]=='K') K += 1;
//			    	    	if(name[i]=='L') L += 1;
//			    	    	if(name[i]=='M') M += 1;
//			    	    	if(name[i]=='N') N += 1;
//			    	    	if(name[i]=='O') O += 1;
//			    	    	if(name[i]=='P') P += 1;
//			    	    	if(name[i]=='Q') Q += 1;
//			    	    	if(name[i]=='R') R += 1;
//			    	    	if(name[i]=='S') S += 1;
//			    	    	if(name[i]=='T') T += 1;
//			    	    	if(name[i]=='U') U += 1;
//			    	    	if(name[i]=='W') W += 1;
//			    	    	if(name[i]=='X') X += 1;
//			    	    	if(name[i]=='Y') Y += 1;
//			    	    	if(name[i]=='Z') Z += 1;
//			    	    	
//			    	    }
//////			    	    alert ("A"+ A);
//////			    	    alert ("B"+ B);
////			    	  //chart 
//			  		  google.charts.load("current", {packages:["corechart"]});
//			  	        google.charts.setOnLoadCallback(drawChart);
//			  	        function drawChart() {
//			  	          var data = google.visualization.arrayToDataTable([
//			  	            ['Language', 'Speakers (in millions)'],
//			  	            ['A', A], ['B', B], ['C', C],
//			  	            ['D', D], ['E', E], ['F', F],
//			  	            ['G', G], ['H', H], ['I', I],
//				  	        ['J', J], ['K', K], ['L', L],
//				  	        ['M', M], ['N', N], ['O', O],
//				  	        ['P', P], ['Q', Q], ['R', R],
//				  	      	['S', S], ['T', T], ['U', U],
//				  	    	['W', W], ['X', X], ['Y', Y],['Z', Z]
//			  	          ]);
//
//			  	          var options = {
//			  	            title: 'Statistics by letters',
//			  	            legend: 'none',
//			  	            pieSliceText: 'label',
//			  	            slices: { 
//			  	            		  0: {offset: 0.5},
//			  	            		  4: {offset: 0.2},
//			  	                      12: {offset: 0.3},
//			  	                      14: {offset: 0.4},
//			  	                      15: {offset: 0.5}
//			  	                      
//			  	            },
//			  	          };
//
//			  	          var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//			  	          chart.draw(data, options);
//			  	      }
//			     }
//			     
//				}
////			   
//		  );
//			
//		  
//	  
//		  
//		  
//	  	}

	  // [7] Xử lí sự kiện cho service
	  	function CheckLog(){
	  		if(Loged == false){
	  			document.getElementById("background-pop").style.display = "block";
	  			return false;
	  		}
	  		
	  		return true;
	  	}
	  // [8] Lấy danh sách pạn pè có sử dụng BapApp
//		  function showFriendAPI(){
//			  var numRows = 0;
//			  FB.api(
//					  '/me/friends',
//					  'GET',
//					  {"fields":"name,gender,birthday,id,location","pretty":"0","limit":"5000"},
//					  function(response) {
//					     if(!response || response.error){
//					    	 alert ("loi");
//					     }else{
//					    	 for (var i in response.data)
//					    	 {
//							// 		JQuery			     		
//									var newRow = $('<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
//						            var cols = newRow.children();
//						            cols.eq(0).text(numRows);
//						            cols.eq(1).text(response.data[i].name);
//						            cols.eq(2).text(response.data[i].gender);
//						            cols.eq(3).text(response.data[i].birthday);
//						            cols.eq(4).text(response.data[i].id);
//						            cols.eq(5).text(response.data[i].location.name);
//						            newRow.appendTo('#tableBody');
//						            numRows++;
//						            
//						  }
//					    }
//					  }
//					);
//			 
//		}
	  
	  	 function showFriendAPI(){
			  var numRows = 0;
			  var gender = new Array();
			  var location = new Array();
			  var age = new Array();
			  
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
						            
						          //tạo mảng giới tính
						            gender.push(response.data[i].gender);
						          //tạo mảng vị trí địa lý
						            location.push(response.data[i].location.name);
						          //tạo mảng tuổi
						            age.push(response.data[i].birthday);
					    	 }
					    	 chart(gender,"piechart-gender","Statistics by gender",2);
					    	 chart(location,"piechart-location","Statistics by location",3);
					    	 chart(age,"piechart-age","Statistics by age",4);
					    }
					  }
					  
					  
					);
			 
		}

	  
	  	