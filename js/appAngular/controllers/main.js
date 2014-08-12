'use strict';

/* Controllers */

// angular.module('myApp.controllers', [])
//   .controller('MyCtrl1', ['$scope', function($scope) {

//   }])
//   .controller('MyCtrl2', ['$scope', function($scope) {

//   }]);





  function ExampleCtrl($scope){
  $scope.people = [
    {name:'Jon', age: 30, title: 'Developer'},
    {name:'Mike', age: 37, title: 'Manager'},
    {name:'Allen', age: 50, title: 'CEO'}
    ];
    
  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        age: $scope.age,
        title: $scope.title,
    };
    
    $scope.people.push(person);
  };
   
   $scope.removePerson = function(index){
    $scope.people.splice(index, 1);
   };    
}