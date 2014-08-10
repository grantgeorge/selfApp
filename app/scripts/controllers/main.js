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

    // Typeahead
    if($('#typeahead-demo-01').length) {
      $('#typeahead-demo-01').typeahead({
        name: 'states',
        limit: 4,
        local: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
        "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
        "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
        "Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota",
        "North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
        "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
      });
    }

    var $slider3 = $("#slider3")
    , slider3ValueMultiplier = 100
    , slider3Options;

    if ($slider3.length > 0) {
      $slider3.slider({
        min: 1,
        max: 5,
        values: [3, 4],
        orientation: "horizontal",
        range: true,
        slide: function(event, ui) {
          $slider3.find(".ui-slider-value:first")
            .text("$" + ui.values[0] * slider3ValueMultiplier)
            .end()
            .find(".ui-slider-value:last")
            .text("$" + ui.values[1] * slider3ValueMultiplier);
        }
      });

      slider3Options = $slider3.slider("option");
      $slider3.addSliderSegments(slider3Options.max)
        .find(".ui-slider-value:first")
        .text("$" + slider3Options.values[0] * slider3ValueMultiplier)
        .end()
        .find(".ui-slider-value:last")
        .text("$" + slider3Options.values[1] * slider3ValueMultiplier);
  }

    var $verticalSlider = $("#vertical-slider");
    if ($verticalSlider.length) {
      $verticalSlider.slider({
        min: 1,
        max: 5,
        value: 3,
        orientation: "vertical",
        range: "min"
      }).addSliderSegments($verticalSlider.slider("option").max, "vertical");
    }

    // jQuery UI Datepicker JS init
    var datepickerSelector = '#datepicker-01';
    $(datepickerSelector).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: 'd MM, yy',
      yearRange: '-1:+1'
    }).prev('.btn').on('click', function (e) {
      e && e.preventDefault();
      $(datepickerSelector).focus();
    });

    // Now let's align datepicker with the prepend button
    $(datepickerSelector).datepicker('widget').css({'margin-left': -$(datepickerSelector).prev('.btn').outerWidth()});

    $(".tagsinput").tagsInput();

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

    //$('select').selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown-inverse'});

  });