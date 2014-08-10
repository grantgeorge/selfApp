'use strict';

angular.module('selfAppApp')
  .controller('MainCtrl', function ($scope, $http) {

    // set up some test data
    $scope.items = [{'name': 'item1', 'id': 1, 'selected': true}, {'name': 'item2', 'id': 2, 'selected': false}];

    $scope.thing1 = {'name': 'thing1', 'id': 1, 'selected': true};

    $scope.thing2 = {'name': 'thing2', 'id': 2, 'selected': true};

    $scope.thing3 = {'name': 'thing3', 'id': 3, 'selected': true};

    $scope.someRadio = 0;

    $scope.switchThing = function(thing){
      console.log('here');
      console.log(thing);
      thing.selected = !thing.selected;
    };

    $scope.toDoList = [

      {
        'name': 'Title1',
        'location': 'Location1',
        'icon': 'fui-user',
        'done': true
      },
      {
        'name': 'Title2',
        'location': 'Location2',
        'icon': 'fui-list',
        'done': false
      },
      {
        'name': 'Title3',
        'location': 'Location3',
        'icon': 'fui-eye',
        'done': false
      },
      {
        'name': 'Title4',
        'location': 'Location4',
        'icon': 'fui-time',
        'done': false
      }
    ]

    $scope.toggleToDo = function(toDo) {
      toDo.done = !toDo.done;
    };

    $scope.addNewToDo = function() {

      var newToDo = {
        name: $scope.newToDo.name,
        location: $scope.newToDo.location,
        icon: $scope.newToDo.icon,
        done: true
      };

      $scope.toDoList.push(newToDo);

      $scope.newToDo.name = '';
      $scope.newToDo.location = '';
      $scope.newToDo.icon = '';

    };




  });