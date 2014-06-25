'use strict';

describe('Directive: fuiSwitch', function () {

  // load the directive's module
  beforeEach(module('selfAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fui-switch></fui-switch>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fuiSwitch directive');
  }));
});
