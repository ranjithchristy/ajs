var app = angular.module('userApp',[]);
app.controller('UserController',function($scope) {
    $scope.users=[
        {name:'Christy Adapally', email:'christy.adapally@example.com'},
        {name:'Jasna James', email:'jasna.james@example.com'}
    ];
    $scope.newUser={};
    $scope.createUser=function(){
        $scope.users.push($scope.newUser);
        $scope.newUser={};
    };
    $scope.editUser=function(user){
        $scope.editedUser=user;
    };
    $scope.updateUser=function(){
        $scope.editedUser={};
    };
        $scope.deleteUser=function(user){
            $scope.users.splice($scope.users.indexOf(user),1);
};
});