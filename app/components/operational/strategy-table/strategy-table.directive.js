angular.module("iWorkApp").directive("iwStrategyTable", function () {
  return {
    restrict: "E",
    templateUrl:
      "/app/components/operational/strategy-table/strategy-table.template.html",
    scope: {
      onEdit: "&",
      onDelete: "&",
    },
  };
});
