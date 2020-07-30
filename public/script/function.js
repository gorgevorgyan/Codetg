function got(){
	key=document.getElementById('username').value;
  $(document).ready(function(){
    if(key.includes(`'`)==false){
  		$.post(mms+'check',{key:key})
    }
    else{
      $('[data-toggle="noto"]').tooltip({
        trigger:'manual',
        animation:true
      });   
      $('#username').tooltip('show')
    }
  })
}
function co(){
  $('#username').removeAttr('title');
  $('#username').tooltip('hide')
	var maxLength =11;
  var value = document.getElementById('username').value;
  if (value.length == maxLength){
   	got();
	}
  else{
    document.getElementById('setik').style.display = 'none';
    document.getElementById('usernames').style.display = 'none';
  } 
}
function coo(){
  	var value = document.getElementById('usernames').value;  
    var keyd = document.getElementById('username').value;
    
   	if (value.length !=0){
      socket.emit('chekname',{value:value,keyd:keyd})
   		
	  }
    else{
     	document.getElementById('setik').style.display = 'none';
    } 
}
function respons(){
  var x = document.getElementById("myTopnav");
  if(x.className === "topnav"){
    x.className += " responsive";
  } 
  else{
    x.className = "topnav";
  }
}
function copy(){
  var copyText = document.getElementById("hide");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("hide").value="Key copied"
  interVal= setInterval(function(){; 
  document.getElementById("hide").value=de
  clearInterval(interVal);
  }, 1000); 
}
function run(){
  socket.emit('runpy',{run:de})
}
function openterminal() {
  $("#compiler").animate({left: '50%'});
  $("#editor").animate({width: '100%'});

}
function cl(){
   socket.emit('clearterminal',{key:de})
}
function clearterminal(){
document.getElementById('out').innerHTML ='<p  class="kanach">root@'+nameofuser+':~$<span id="margat">_</span><p>';
}
function down(){
  socket.emit('pydown',{ke:de})
}
function uppy(){
  document.getElementById("d").submit();;
}
function xoz(){
  document.getElementById('xozuk').click();
}
function cose(){
   socket.emit('closeterminal',{key:de})
}
function coseterminal(){
  $("#compiler").animate({left: '100%'});
  $("#editor").animate({width: '100%'});
  //socket.emit('runpy',{run:de})
}
function timeout(minutes){    
  document.getElementById('tiles').style.color="forestgreen"
  var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
  var time_limit = ((minutes * 60 ) * 1000);
  setTimeout(function() {}, time_limit );
  var days, hours, minutes, seconds; // variables for time units
  var countdown = document.getElementById("tiles"); // get tag element
  getCountdown();
  setInterval(function () { getCountdown(); }, 1000);
  function getCountdown(){
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    if ( seconds_left >= 0 ) {
      //console.log(time_limit);
      if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
        document.getElementById('tiles').style.color="orange"
      } 
      if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
        document.getElementById('tiles').style.color="red"
      }
      days = pad( parseInt(seconds_left / 86400) );
      seconds_left = seconds_left % 86400;
      hours = pad( parseInt(seconds_left / 3600) );
      seconds_left = seconds_left % 3600;   
      minutes = pad( parseInt(seconds_left / 60) );
      seconds = pad( parseInt( seconds_left % 60 ) );
      // format countdown string + set tag value
      countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
      }
  }
  function pad(n){
    return (n < 10 ? '0' : '') + n;
  }
}
function choosepy(){
   document.getElementById("ou").value = "python";
   document.getElementById("deh").style.display = "block";
}
function ok(){
  var value = document.getElementById('deh').value;
  if (value.length !=0){
  document.getElementById("ko").style.display = "block";
  }
  else{
  document.getElementById('ko').style.display = 'none'; 
    }
}
function dd(){
  document.getElementById('start').style.display='none'
  document.getElementById('poqr').style.display='block'
  document.getElementById('add').style.display='block'
  document.getElementById('kk').style.display='none'
  document.getElementById('uu').style.display='flex'
  document.getElementById('poqr1').style.display='none'
  document.getElementById('join').style.display='none'
  document.getElementById('poqr2').style.display='none'
  document.getElementById('uu1').style.display='flex'
  document.getElementById('contact').style.display='none'
}
function ddo(){
  document.getElementById('start').style.display='block'
  document.getElementById('poqr').style.display='none'
  document.getElementById('add').style.display='none'
  document.getElementById('kk').style.display='flex'
  document.getElementById('uu').style.display='flex'
  document.getElementById('poqr1').style.display='none'
  document.getElementById('join').style.display='none'
  document.getElementById('contact').style.display='none'
  document.getElementById('poqr2').style.display='none'
  document.getElementById('uu1').style.display='flex'
} 
function ddo1(){
  document.getElementById('start').style.display='none'
  document.getElementById('poqr').style.display='none'
  document.getElementById('add').style.display='none'
  document.getElementById('kk').style.display='flex'
  document.getElementById('uu').style.display='none'
  document.getElementById('join').style.display='block'
  document.getElementById('poqr1').style.display='block'
  document.getElementById('poqr2').style.display='none'
  document.getElementById('uu1').style.display='flex'
  document.getElementById('contact').style.display='none'
} 
function ddo2(){
  document.getElementById('start').style.display='none'
  document.getElementById('poqr').style.display='none'
  document.getElementById('poqr1').style.display='none'
  document.getElementById('add').style.display='none'
  document.getElementById('kk').style.display='flex'
  document.getElementById('uu').style.display='flex'
  document.getElementById('uu1').style.display='none'
  document.getElementById('join').style.display='none'
  document.getElementById('contact').style.display='block'
  document.getElementById('poqr2').style.display='block'
}
function gppg(){
  var e = document.getElementById("lang");
  var strUser = e.options[e.selectedIndex].value;
  if(strUser!='--'){
    choosepy()
  }
  else{
    document.getElementById("deh").style.display = "none";
    document.getElementById("ko").style.display = "none";
  }
}
function sanding(){
  let firstname=document.getElementById('names').value
  let lastname=document.getElementById('names2').value
  let subject=document.getElementById('names3').value
  let email=document.getElementById('names4').value
  let messagetext=document.getElementById('ff').value
  document.getElementById("qorm").reset();
  socket.emit('mailsander',{firstname:firstname,lastname:lastname,subject:subject,email:email,messagetext:messagetext})
  santal()
  
}
function santal(){
  alert("Thanks for Message")
}