			function findUserById_rpc(id){
				const Http = new XMLHttpRequest();
				const url = "http://localhost:8080/users/" + id;
				Http.open("GET",url);
				Http.send();
				console.log("Get http request sended to: " + url);
				
				Http.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						console.log(Http.responseText);
						json_string = Http.responseText;
						//aUser = JSON.parse(Http.responseText.toJSON);
						//console.log("aUser: " + aUser);
						if(json_string.length != 0){
							let aUser = JSON.parse(json_string);
							console.log("aUser: ")
							//console.log(aUser)
							vm.userResult2 = aUser;
							}else{
								vm.userResult2 = {id:undefined, name:undefined, age:undefined}
							}
					}else{
						console.log("http request not succeed.")
						vm.userResult2 = {id:undefined, name:undefined, age:undefined}
						
					}
					
				}
			}
			
			
			
			
			
			
			function createUser_rpc(user){
				const Http = new XMLHttpRequest();
				const url = "http://localhost:8080/users/";
				Http.open("POST",url);
				request_body = JSON.stringify(user);
				console.log(request_body);
				Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				Http.send(request_body);
				console.log("POST http request sended to: " + url);
				
				Http.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						console.log(Http.responseText);
						
					}
					
				}
			}
			
			
		
			