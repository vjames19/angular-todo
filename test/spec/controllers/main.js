'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTodoApp'));

  var MainCtrl, localStorageService,
  scope;

  // Initialize the controller and a mock scope
  // inject equals angular.mock.inject
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_) {
    localStorageService = _localStorageService_;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: _localStorageService_
    });

    localStorageService.clearAll();
  }));

  it('should have an empty todo list', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should be able to add a todo', function () {
    scope.todo = 'a todo';

    scope.addTodo();
    expect(scope.todos.length).toBe(1);
    expect(scope.todos[0]).toEqual('a todo');
  });

  describe('with todos', function() {
    var initialTodos = ['1', '2', '3'];
    beforeEach(function() {
      initialTodos.forEach(function(todo) {
        scope.todo = todo;
        scope.addTodo();
      });
    });

    it('should be able to load the initiail todos', function () {
      expect(scope.todos).toEqual(initialTodos);
    });

    it('should be able to add a new todo', function () {
      var todo = scope.todo = 'todo';
      scope.addTodo();
      expect(scope.todos.length).toBe(initialTodos.length + 1);
      expect(scope.todos[initialTodos.length]).toBe(todo);
    });

    it('should be able to remove a todo', function () {
      scope.removeTodo(0);
      expect(scope.todos.length).toBe(initialTodos.length - 1);
      expect(scope.todos).not.toContain(initialTodos[0]);
    });
  });

});
