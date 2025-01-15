angular.module("iWorkApp").directive("iwPerformanceTable", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/performance-table/performance-table.template.html",
    scope: {
      criteria: "=",
      examSupervisions: "=",
      onEdit: "&",
      onDelete: "&",
      onEditExam: "&",
      onDeleteExam: "&",
    },
    controller: [
      "$scope",
      function ($scope) {
        $scope.isModalOpen = false;

        $scope.openModal = function () {
          $scope.isModalOpen = true;
        };

        $scope.closeModal = function () {
          $scope.isModalOpen = false;
        };

        $scope.savePerformance = function (data) {
          console.log("Saving:", data);
          // Add your save logic here
          $scope.closeModal();
        };
      },
    ],
  };
});
