///////start page animation////////////
$(document).ready(function() {
  $('#jain').on('keyup keypress', function(e){
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) { 
          e.preventDefault();
          return false;
        }
      });
  $('#ad').on('keyup keypress', function(e){
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) { 
          e.preventDefault();
          return false;
        }
      });
      $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if(target.length){
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1, function() {
            var $target = $(target);
            $target.focus();
            if($target.is(":focus")){
              return false;
            }
            else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });
})
////macterminal/////

var i = 0;
var txt = 'import random a = [ i for i in range (1000)] print (random.choice(a))'
var speed = 80
$(document).ready(function() {
  gg()
})
setInterval(function(){ 
  gg() 
}, 8000);
function gg(){
  i=0
  document.getElementById("qw").innerHTML ="<span style='color:#a52372;' id='span1'></span><span style='color:white;' id='span2'></span><span style='color:white;' id='span3'></span><span style='color:#a52372;'' id='span4'></span><span style='color:white' id='span5'></span><span style='color:#a52372;' id='span6'></span><span style='color:white' id='span7'></span><span style='color:#a52372;' id='span8'></span><span style='color:#45cbef' id='span9'></span><span style='color:white' id='span10'></span><span style='color:#ae80f1' id='span11'></span><span style='color:white' id='span12'></span><span style='color:white' id='span14'></span><span style='color:#a52372' id='span13'></span><span style='color:white' id='span15'></span>";
  document.getElementById("kl").innerHTML ="<span style='color:#a52372;' id='spanq'></span><span style='color:white;' id='spanq2'></span><span style='color:white;' id='spanq3'></span><span style='color:#a52372;'' id='spanq4'></span><span style='color:white' id='spanq5'></span><span style='color:#a52372;' id='spanq6'></span><span style='color:white' id='spanq7'></span><span style='color:#a52372;' id='spanq8'></span><span style='color:#45cbef' id='spanq9'></span><span style='color:white' id='spanq10'></span><span style='color:#ae80f1' id='spanq11'></span><span style='color:white' id='spanq12'></span><span style='color:white' id='spanq14'></span><span style='color:#a52372' id='spanq13'></span><span style='color:white' id='spanq15'></span>";
  document.getElementById("kll").innerHTML ="<span style='color:#a52372;' id='spanqq'></span><span style='color:white;' id='spanq2q'></span><span style='color:white;' id='spanq3q'></span><span style='color:#a52372;'' id='spanq4q'></span><span style='color:white' id='spanq5q'></span><span style='color:#a52372;' id='spanq6q'></span><span style='color:white' id='spanq7q'></span><span style='color:#a52372;' id='spanq8q'></span><span style='color:#45cbef' id='spanq9q'></span><span style='color:white' id='spanq10q'></span><span style='color:#ae80f1' id='spanq11q'></span><span style='color:white' id='spanq12q'></span><span style='color:white' id='spanq14q'></span><span style='color:#a52372' id='spanq13q'></span><span style='color:white' id='spanq15q'></span>";
  typeWriter()
  function typeWriter() {
    if (i < 6 ) {
      document.getElementById("span1").innerHTML += txt.charAt(i);
      document.getElementById("spanq").innerHTML += txt.charAt(i);    
      document.getElementById("spanqq").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else if(i <= 13 ){
      document.getElementById("span2").innerHTML += txt.charAt(i);
      document.getElementById("spanq2").innerHTML += txt.charAt(i);    
      document.getElementById("spanq2q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else if(i <=14  ){
      document.getElementById("span3").innerHTML += '<br>'+txt.charAt(i);
      document.getElementById("spanq3").innerHTML += '<br>'+txt.charAt(i);    
      document.getElementById("spanq3q").innerHTML += '<br>'+txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }    
    else if(i <=17 ){
      document.getElementById("span4").innerHTML += txt.charAt(i);
      document.getElementById("spanq4").innerHTML += txt.charAt(i);    
      document.getElementById("spanq4q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }   
    else if(i <=21 ){
      document.getElementById("span5").innerHTML += txt.charAt(i);
      document.getElementById("spanq5").innerHTML += txt.charAt(i);    
      document.getElementById("spanq5q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }     
    else if(i <=25 ){
      document.getElementById("span6").innerHTML += txt.charAt(i);
      document.getElementById("spanq6").innerHTML += txt.charAt(i);    
      document.getElementById("spanq6q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }    
    else if(i <=27 ){
      document.getElementById("span7").innerHTML += txt.charAt(i);
      document.getElementById("spanq7").innerHTML += txt.charAt(i);    
      document.getElementById("spanq7q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }   
      else if(i <=30 ){
      document.getElementById("span8").innerHTML += txt.charAt(i);
      document.getElementById("spanq8").innerHTML += txt.charAt(i);    
      document.getElementById("spanq8q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }       
    else if(i <=36 ){
      document.getElementById("span9").innerHTML += txt.charAt(i);
      document.getElementById("spanq9").innerHTML += txt.charAt(i); 
      document.getElementById("spanq9q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }     
    else if(i <=37 ){
      document.getElementById("span10").innerHTML += txt.charAt(i);
      document.getElementById("spanq10").innerHTML += txt.charAt(i);    
      document.getElementById("spanq10q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }     
    else if(i <=41 ){
      document.getElementById("span11").innerHTML += txt.charAt(i);
      document.getElementById("spanq11").innerHTML += txt.charAt(i);    
      document.getElementById("spanq11q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
       else if(i <=42 ){
      document.getElementById("span12").innerHTML += txt.charAt(i);
      document.getElementById("spanq12").innerHTML += txt.charAt(i);    
      document.getElementById("spanq12q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }            
    else if(i <=43 ){
      document.getElementById("span14").innerHTML += txt.charAt(i)+'<br>';
      document.getElementById("spanq14").innerHTML += txt.charAt(i)+'<br>';    
      document.getElementById("spanq14q").innerHTML += txt.charAt(i)+'<br>';
      i++;
      setTimeout(typeWriter, speed);
    }        
    else if(i <=49 ){
      document.getElementById("span13").innerHTML += txt.charAt(i);
      document.getElementById("spanq13").innerHTML += txt.charAt(i);    
      document.getElementById("spanq13q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }   
    else if(i <=70 ){
      document.getElementById("span15").innerHTML += txt.charAt(i);
      document.getElementById("spanq15").innerHTML += txt.charAt(i);    
      document.getElementById("spanq15q").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }   
  }
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})