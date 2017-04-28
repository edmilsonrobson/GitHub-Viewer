(function(){
    var app = angular.module('GithubViewer', ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main",{
            templateUrl: "main.html",
            controller: "MainController"
        })
        .when("/user/:username",{
            templateUrl: "userdetails.html",
            controller: "UserController"
        })
        .when("/:username/:reponame",{
            templateUrl: "repodetails.html",
            controller: "RepoController"
        })
            .otherwise({redirectTo: "/main"});
    });


})();
