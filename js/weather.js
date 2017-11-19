document.addEventListener('DOMContentLoaded', function(){
  // Set initial data and call the functions once DOM has loaded
  var id = "8f90a8d5fdabb0b37bc0d61ec79a47e8";
  var units = "metric";
  var city = "London";

  setCity(city);
  setMetric();
  getData(city,units,id);

  // Allow pressing enter key to submit form
  document.addEventListener("keyup", function(event){
    if(event.which === 13){
      submit.click();
    }
  });

  // Add submit button click listener and call sendData()
  submit.addEventListener("click",function(){
    sendData()
  });

  // Add click listener to units toggle and refresh form by calling sendData
  // This may cause a bug if user has changed the text input but not submitted yet ¯\_(ツ)_/¯
  document.querySelector("#units").addEventListener("click",function(){
    sendData()
  })

  // Changes the city name displayed to the user
  function setCity(city){
    document.getElementById("myCity").innerHTML = " "+city+" ";
  }

  // Checks the value of the units checkbox and changes units var to the same value.
  function setMetric(){
    let imperial = document.getElementById("units").checked;
    if(imperial === true){
      units = "imperial";
    } else {
      units = "metric";
    }
  }

  // Calling this function first checks the current value of the input text
  // Then we pass that value into setCity()
  // Then we make sure our units are correct by calling setMetric()
  // finally we pass all the needed data and call getData()
  function sendData(){
    let myCity = document.getElementById('city').value;
    console.log(myCity);
    setCity(myCity);
    setMetric();
    getData(myCity,units,id);
  }

  // First we build our apiUrl variable using our passed parameters
  // Then we send the request using fetch
  // If the response is good we pass it to addTemp() else we throw an error.
  function getData(city,units,id){
    let myRequest = new Request("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid="+id);
    fetch(myRequest)
      .then(function(response) {
          if(response.status == 200) return response.json();
          else throw new Error('Something went wrong on api server!');
      })
      .then(function(response) {
          addTemp(response);
          //TODO Add more forecast data
          //TODO addLongForecast();
          //TODO addLocalTime();
          //TODO addSunTimes();
      })
      .catch(function(error) {
          console.log(error);
      });
  }

  //TODO Handle extra forecast data, adding background image changes and colour changes or something

  // Called from getData() queries the json object for the current temp
  // Floors it to get rid of decimals and inserts it into the DOM
  function addTemp(response){
    document.getElementById('temp').innerHTML = " " + Math.floor(response.main.temp);
  }
  //END OF DOMContentLoaded FUNCTION
}, false);
