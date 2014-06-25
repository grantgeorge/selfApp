'use strict';

angular.module('selfAppApp')
  .directive('fuiCheckbox', [function fuiCheckbox() {
    return {
      restrict: 'AE',
      templateUrl: 'views/components/fui-checkbox.html',
      scope: {
        model: '=',
        label: '=',
        value: '=',
        required: '=',
        name: '='
      },
      replace: true
    };
  }]);