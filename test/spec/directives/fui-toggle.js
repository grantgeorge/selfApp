'use strict';

describe('Directive: fuiToggle', function () {

  // load the directive's module
  beforeEach(module('selfAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fui-toggle></fui-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fuiToggle directive');
  }));
});
