angular.module("myApp", []).controller("wikiCtrl", function($scope, $http) {
  $scope.myValue = true;

  $scope.getRandom = function() {
    $http.get("http://randomword.setgetgo.com/get.php").then(function(data) {
      console.log(data.data);
      $scope.word = data.data;
    });
  };
  var buildURL = function(searchString) {
    return (
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" +
      searchString +
      "&callback=JSON_CALLBACK"
    );
  };

  $scope.runIt = function() {
    $scope.myValue = false;
    var url = buildURL($scope.search);
    $http.jsonp(url).then(function(data) {
      $scope.resultsArray = [];
      angular.forEach(data.data.query.pages, function(result, index) {
        console.log(index, " : ", result);
        $scope.resultsArray.push({
          title: result.title,
          description: result.extract
        });
        console.log($scope.resultsArray);
      });
    });
  };
});
