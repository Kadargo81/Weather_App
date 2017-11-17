document.addEventListener("load",function(){
  getData();
});

var submit = document.getElementById("submit");
submit.addEventListener("click",getData);

// var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid="+id+"&jsonp=displayData";
function getData(){
  var xhttp = new XMLHttpRequest();
  var id = "8f90a8d5fdabb0b37bc0d61ec79a47e8";
  var city = document.getElementById("city").value;
  var units = "metric"
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid="+id+"&callback=displayData", true);
  xhttp.send()
  console.log("Clicked");
  if(xhttp){
    displayData(xhttp);
  }
}
//TODO I can get json like data from getData() but I can't figure out how to access it in a meaningful way....????
function displayData(response) {
  var res = response;
  console.log(res);

  // document.getElementById("temp").innerHTML(response.response.main.temp_max);

  }














// var forecast = forecast();
//
// document.getElementById('submit').addEventListener("click", forecast);
// // document.getElementById('submit').addEventListener("click", addTemp);
//
// function forecast(){
//     var xhttp = new XMLHttpRequest();
//     var id = "8f90a8d5fdabb0b37bc0d61ec79a47e8";
//     var city = document.getElementById("city").value;
//     xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+id, true);
//     xhttp.send()
//     xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         document.getElementById("temp").innerHTML = myObj.main.temp_max;
//     }
//   }
// }

// function addTemp(){
//     getElementById("temp").innerHTML = "forecastObj.main.temp_max";
//   }
