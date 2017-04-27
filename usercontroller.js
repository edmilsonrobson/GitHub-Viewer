(function(){

    var app = angular.module('GithubViewer');

    app.controller('UserController', function($scope, github, $routeParams) {

        var onUserComplete = function(data){
            if (data != "{}"){
                $scope.user = data;
            }
        };

        var onReposComplete = function(data){
            $scope.repos = data;
        };


        $scope.username = $routeParams.username;
        $scope.sortOrder = "+language";
        github.getUser($scope.username).then(onUserComplete);
        github.getRepos($scope.username).then(onReposComplete);

    });
})();
