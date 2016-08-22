var threeThings = angular.controller('threeThings');

    threeThings.controller('mainController', [$scope, function ($scope) {
        var goals = {
            un: un,
            deux: deux,
            troix: troix
        };

        $scope.goals = goals; 

        function click() {
            $scope.goals.push(this);
            console.log($scope.goals, "buhhh");
        }
    }]);
