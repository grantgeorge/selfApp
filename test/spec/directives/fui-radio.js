'use strict';

describe('Directive: fuiRadio', function () {

  // load the directive's module
  beforeEach(module('selfAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fui-radio></fui-radio>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fuiRadio directive');
  }));
});
