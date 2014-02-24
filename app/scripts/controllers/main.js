'use strict';

angular.module('angularTodoApp').controller('MainCtrl', function ($scope, localStorageService) {

  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore && JSON.parse(todosInStore) || [];

  $scope.$watch('todos', function () {
    localStorageService.add('todos', JSON.stringify($scope.todos));
  }, true);

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

});
