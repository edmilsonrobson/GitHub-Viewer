(function(){

    var github = function($http, $log){

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                return response.data;
            });
        };

        var getRepoContributors = function(username, reponame){
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors")
                .then(function(response){
                return response.data;
            });;
        };

        var getRepos = function(username){
            return $http.get("https://api.github.com/users/" + username + "/repos")
                .then(function(response){
                return response.data;
            });
        }

        var getRepo = function(username, reponame){
            $log.log("Get repo!");
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame).then(function(response){
               return response.data;
            });
        }
        return {
            getRepo: getRepo,
            getRepoContributors: getRepoContributors,
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var app = angular.module("GithubViewer");
    app.factory("github", github);
})();
