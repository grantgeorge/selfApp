'use strict';

angular.module('selfAppApp')
  .directive('fuiRadio', [ function fuiRadio() {
    return {
      restrict: 'AE',
      templateUrl: 'views/components/fui-radio.html',
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