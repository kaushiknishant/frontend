// $(function(){
//   $(".btn1").click(function(){
//      $("h1").text("I am learning Jquery!");  
//   }); 
//});


 $(function(){
   $(".btn1").click(function(){
      $("h1").text(function(i, origi){
          return origi + " with Igneus!"
      });  
   }); 
});


$(function(){
   $(".btn2").click(function(){
      $("h1").html("<i>I am getting good at Jquery!</i>");  
   }); 
});

$(function(){
   $(".btn3").click(function(){
      $("input").val("Paris");  
   }); 
});

$(function(){
   $(".btn4").click(function(){
      $("a").attr({
          "href" : "http://bing.com",
          "title" : "Going to Bing Site"
      });  
   }); 
});

