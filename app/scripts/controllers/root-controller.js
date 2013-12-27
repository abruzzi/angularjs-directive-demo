define(['controllers/controllers'], function(controllers) {
    controllers.controller('RootController', ['$scope', function($scope) {
        $scope.defaultDate = new Date(2013, 10, 10);
    }]);
});
