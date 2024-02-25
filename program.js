var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.students = [
        { name : 'Anu', cgpa: 9.8},
        { name : 'Appu', cgpa: 9.5},
        { name : 'kunju', cgpa: 9.2},
        { name : 'sumanth', cgpa: 9.5},
        { name : 'Rashmitha', cgpa: 9.9},
    ];
});