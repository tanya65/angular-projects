var myModule = angular.module("myModule",[]);
myModule.controller("myController",function($scope){
    $scope.message="A random message..";
    $scope.student={
        "name":"cloe",
        "age":6,
        "grade":"A+"
    }
});