(function(){

    var app = angular.module("GithubViewer");
    app.controller('MainController', function($scope, $interval, $location) {

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if ($scope.countdown <= 0){
                $scope.getUserInfo($scope.username);
            }
        };


        $scope.getUserInfo = function(name){
            $location.path("/user/" + name);
        };

        var startCountdown = function(){
            $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.username = "edmilsonrobson";
        $scope.countdown = 5;

        startCountdown();

    });
})();
