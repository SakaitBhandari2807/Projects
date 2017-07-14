
$(document).ready(getLocation());
  function getLocation(){
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(showPosition);
    else
      console.log("geoLocation Not Supported");
  }
  var latitude;
  var longitude;
  var celsius;
  function showPosition(position){
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
    var key= "02a468b56e7f7eada6f5a3b3116d5c59";
    var Weather="https://api.darksky.net/forecast/"+key+"/"+latitude+","+longitude;
    $.ajax({
             url: Weather,
             dataType: "jsonp",
             async: false,
             success: function (data) {
                var x=document.getElementById("location");
                x.innerHTML="Location:"+data.timezone;
                $("#windInfo").html("Wind Speed:"+data.currently.windSpeed+"Miles/hr");
                $("#temperature").html("Temperature:"+data.currently.temperature+"&deg;F");
                celsius = (data.currently.temperature -32) * 5 / 9;
                console.log(Math.round(celsius));
                var skycons = new Skycons({"color": "lightblue"});
                skycons.add(document.getElementById("icon"),data.currently.icon);
                skycons.play();
                //farenheitToCelsius(celsius);
             }
    });
  }
  var count=0;
  function farenheitToCelsius()
  {
    //console.log("I am  insife"+Math.round(celsius));
    count++;
    if(count%2==0)
      celsiusToFarenheit();
    else
      {
        $("#temperature").html("Temperature:"+Math.round(celsius)+"&deg;C");
        $("#toggle").html('Farenheit');
      }
  }
  function celsiusToFarenheit()
  {
    if(count%2!=0)
      farenheitToCelsius();
    else
      {
        $("#temperature").html("Temperature:"+Math.round((celsius+32)*9/5)+"&deg;F");
        $("#toggle").html('Celsius');
      }
  }
