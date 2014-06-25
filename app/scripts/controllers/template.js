'use strict';

angular.module('selfAppApp')
  .controller('TemplateCtrl', function ($scope) {

    var $slider = $("#slider");
    if ($slider.length > 0) {
      $slider.slider({
        min: 1,
        max: 5,
        value: 3,
        orientation: "horizontal",
        range: "min"
      }).addSliderSegments($slider.slider("option").max);
    }

    $(".tagsinput").tagsInput();

    $("select").selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown-inverse'});

  });
