angular.module("iWorkApp").directive("iwEvaluationPeriod", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/evaluation-period/evaluation-period.template.html",
    scope: {
      period: "=",
    },
    controller: [
      "$scope",
      function ($scope) {
        $scope.availablePeriods = [
          { term: "1/2567", startDate: "1 มีนาคม", endDate: "30 มิถุนายน" },
          { term: "2/2567", startDate: "1 กรกฎาคม", endDate: "31 ตุลาคม" },
          {
            term: "3/2567",
            startDate: "1 พฤศจิกายน",
            endDate: "28 กุมภาพันธ์",
          },
        ];

        $scope.isDropdownOpen = false;

        $scope.toggleDropdown = function () {
          $scope.isDropdownOpen = !$scope.isDropdownOpen;
        };

        $scope.selectPeriod = function (selectedPeriod) {
          $scope.period = selectedPeriod;
          $scope.isDropdownOpen = false;
        };
      },
    ],
  };
});
