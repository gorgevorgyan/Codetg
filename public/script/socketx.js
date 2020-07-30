socket.on('compilepy',(data)=>{
	if(data.key==de){
	  	openterminal()
		//document.getElementById('out').innerHTML += "<br>";
		var despasito=data.run;
		var div = document.getElementById('out');
		div.innerHTML += despasito;
		document.getElementById("margat").style.display="none";
		document.getElementById("margat").removeAttribute("id");
		document.getElementById('out').innerHTML +='<p  class="kanach">root@'+nameofuser+':~$<span id="margat">_</span><p>';
		var elem = document.getElementById('compiler');
		elem.scrollTop = elem.scrollHeight;
	}
})
socket.on('cleear',(data)=>{
	if(data.yourkey==de){
  		clearterminal()
	}
})
socket.on('dowmpy',(data)=>{
	if(data.do==de){
    	window.open('/downloadpy')
  	}
})
socket.on('closs',(data)=>{
	if(data.yourkey==de){
  		coseterminal()
	}
})
socket.on('deletetime',(text)=>{
    mah=text.key
    if(mah==de){
    	// down()
        alert("time out")
        setTimeout(function(){
            socket.emit('destroy',{mykey:de})
            window.location.href=mms;
         }, 5000);
    }
})
socket.on('aviq',(text)=>{
    dd=text.avi
    rr=text.kee
    if(rr==document.getElementById('username').value){
    	if(dd=="yes"){
    		document.getElementById('setik').style.display = 'none';
    		$('#usernames').attr('title', 'Sorry username has already exised');
           	$(document).ready(function(){  
	            $('[data-toggle="noto"]').tooltip({
	                trigger:'manual',
	                animation:true
	            });   
	            $('#usernames').tooltip('show')
	            setTimeout(function(){
	            	  $('#usernames').removeAttr('title');
  					 $('#usernames').tooltip('hide')
	            },1000)
            });
    	}
    	else{
    		document.getElementById('setik').style.display = 'block';
      		document.getElementById('setik').style.margin = '0';
    	}
    }
})

//////Socket of Index////////
    socket.on('avi',(goh)=>{
    	var ios=goh.avi;
        var href=goh.href;
        var ki=goh.key
        var seyo=document.getElementById("username").value;
        if(ki==seyo){
        	if(ios=="aviable" && href=="web"){
            	document.getElementById('href').value = href; 
            	document.getElementById('setik').style.display = 'block';
            	$('#username').removeAttr('title');
            	$('#username').tooltip('hide')
          	}
          	if(ios=="aviable" && href=="java"){
            	document.getElementById('href').value = href; 
            	document.getElementById('setik').style.display = 'block';
            	$('#username').removeAttr('title');
            	$('#username').tooltip('hide')
          	}
          	if(ios=="aviable" && href=="python"){
            	document.getElementById('href').value = href; 
            	document.getElementById('usernames').style.display = 'block';
            	$('#username').removeAttr('title');
            	$('#username').tooltip('hide')
          	}
          	if(ios=="notaviable"){
            	//console.log('notaviable')
            	document.getElementById('setik').style.display = 'none';
            	$('#username').attr('title', 'Key not Found');
            	$(document).ready(function(){  
	              	$('[data-toggle="noto"]').tooltip({
	                	trigger:'manual',
	                	animation:true
	              	});   
	            	$('#username').tooltip('show')
	            		            setTimeout(function(){
	            	  $('#username').removeAttr('title');
  					 $('#username').tooltip('hide')
	            },1000)
            	});
          	} 
        }     
    })
//////////////
socket.on('mini',(goh)=>{
  tivmy=goh.tivy;
  var arir=goh.array;
  if(goh.brr==de){
    document.getElementById('myDropdown').innerHTML=" "
    document.getElementById('myDropdown').innerHTML+="<a href='#' id='tyup' style='background: black;color: white;'><script>document.write(tivmy);</script> Joined</a><div style='overflow: auto;max-height: 250px;' id='klo'>"
    document.getElementById("tyup").innerHTML=tivmy+" "+"Joined"
    for (var i = 0; i < arir.length; i++) {
        document.getElementById('klo').innerHTML+="<a href='#'>"+arir[i]+"</a>"
    }
    document.getElementById('myDropdown').innerHTML+="</div>"
  }
})
