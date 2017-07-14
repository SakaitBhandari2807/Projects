

$('button').click(function(){
var q=document.getElementById('searchquery').value;
$.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+q+"&callback=?",
     function(data) {
       console.log(data);
     $('#searchResultsDisplay').empty();
     var resArr = data.query.search;
     for(var i=0;i<10;i++){
       var div='<div class="well"><a href="https://en.wikipedia.org/wiki/'+resArr[i].title+
       '"><h3>'+resArr[i].title+'</h3><p>'+resArr[i].snippet+'</p></a>'+'</div>';
        $("#searchResultsDisplay").append(div);
        console.log(div);
     }
});
});
