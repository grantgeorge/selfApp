'use strict';

angular.module('selfAppApp')
  .directive('fuiSwitch', [ function fuiSwitch () {
    return {
      restrict: 'AE',
      templateUrl: 'views/components/fui-switch.html',
      scope: {
        model: '=',
        value: '=',
        required: '=',
        name: '='
      },
      replace: true
    };
  }]);