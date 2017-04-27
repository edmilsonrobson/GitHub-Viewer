(function(){

    var app = angular.module("GithubViewer");
    app.controller('MainController', function($scope, $location) {


        $scope.getUserInfo = function(name){
            $location.path("/user/" + name);
        };



        $scope.username = "edmilsonrobson";


    });
})();
