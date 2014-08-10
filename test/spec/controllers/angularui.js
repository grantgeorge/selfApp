'use strict';

describe('Controller: AngularuiCtrl', function () {

  // load the controller's module
  beforeEach(module('selfAppApp'));

  var AngularuiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularuiCtrl = $controller('AngularuiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
