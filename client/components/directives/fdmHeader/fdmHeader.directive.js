angular.module('fdmTimesheet')
    .directive('fdmHeader', function () {
        return {
            templateUrl: 'components/directives/fdmHeader/fdmHeader.html',
            restrict: 'EA',
        };
    });