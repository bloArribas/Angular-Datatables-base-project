'use strict';

angular.module('myApp.view1', ['ngRoute', 'datatables', 'datatables.buttons'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', View1Ctrl);

function View1Ctrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
      .withDOM('frtip')
      .withPaginationType('full_numbers')
      // Active Buttons extension
      .withButtons([
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]);
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID'),
    DTColumnBuilder.newColumn('firstName').withTitle('First name'),
    DTColumnBuilder.newColumn('lastName').withTitle('Last name')
  ];
}
