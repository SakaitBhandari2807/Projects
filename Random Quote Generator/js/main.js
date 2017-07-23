
$(document).ready(function(){
  $.getJSON("https://crossorigin.me/https://talaikis.com/api/quotes/random/",function(data){
    var html='<b>"</b>'+data.quote+'<b>"</b>'+"<br>"+"-"+data.author;
    $('#showQuote').html(html);
  });
});
$('Button').click(function(){
  console.log("You click");
  $.getJSON("https://crossorigin.me/https://talaikis.com/api/quotes/random/",function(data){
    var html='<b>"</b>'+data.quote+'<b>"</b>'+"<br>"+"-"+data.author;
    $('#showQuote').html(html);
  })


  console.log("OUT");
});
