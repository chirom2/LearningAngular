
'use strict';

angular.module('angularTestApp')
  .controller('CommentsCtrl', function ($scope, PostFactory, $routeParams) {
        console.log($routeParams);
        var post = PostFactory.getPostById($routeParams.id);
        $scope.title = post.name;
        $scope.comments = post.comments;
        //$scope.comments = PostFactory.getPosts().comments;
  });
