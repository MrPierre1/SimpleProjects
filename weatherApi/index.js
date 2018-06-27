angular.module("myApp", []).controller("weatherCtrl", function($scope, $http) {
  var getCity = function() {
    return $http.get("http://ipinfo.io");
  };
  // var myVar = process.env.WEATHERAPIKEY;
  var getWeather = function(city) {
    return $http.get(
      // "http://api.openweathermap.org/data/2.5/find?q=Raleigh&units=metric&APPID=" +
      // myVar
      // ();

      "http://api.openweathermap.org/data/2.5/find?q=Raleigh&units=metric&APPID=1bffd3cee1e7cb2500dd8c1cf4af2510"
    );

    // "http://api.openweathermap.org/data/2.5/weather?q=" +
    //   city +
    //   "&units=Imperial&APPID=1bffd3cee1e7cb2500dd8c1cf4af2510"
  };

  $scope.getCompleteWeather = function() {
    getCity()
      .then(function(data) {
        $scope.city = "Raleigh";
        return $scope.city;
      })
      .then(function(city) {
        getWeather(city).then(function(data) {
          console.log(data);
          var firstData = data.data.list[0];
          var roundedTemp = Math.round(firstData.main.temp);

          $scope.description = firstData.weather[0].description;
          $scope.icon = firstData.weather[0].icon;
          $scope.country = firstData.sys.country;

          $scope.changeFtoCTemp = function() {
            $scope.isCelsius = true;
            $scope.isFarenheit = false;
            $scope.temp = roundedTemp;
          };

          $scope.changeCtoFTemp = function() {
            $scope.isCelsius = false;
            $scope.isFarenheit = true;
            $scope.temp = roundedTemp * 1.8 + 32;
          };
          $scope.changeCtoFTemp();
        });
      });
  };

  $scope.getCompleteWeather();
  console.log($scope.word, "my word");
});
