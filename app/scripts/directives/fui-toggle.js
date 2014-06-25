'use strict';

angular.module('selfAppApp')
  .directive('fuiToggle', function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/components/fui-toggle.html',
      scope: {
        model: '=',
        value: '=',
        required: '=',
        name: '='
      },
      replace: true
    };
  });
