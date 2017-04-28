(function(){
    var app = angular.module("GithubViewer");

    app.controller('RepoController', function($scope, github, $routeParams, $log){
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;


        var onRepoGet = function(data){
            $scope.repo = data;
        }

        var onContributorsGet = function(data){
            $scope.contributors = data;
        }

        github.getRepo($scope.username, $scope.reponame).then(onRepoGet);
        github.getRepoContributors($scope.username, $scope.reponame).then(onContributorsGet);



    });

})();
