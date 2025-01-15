angular.module("iWorkApp").directive("iwSelfDevelopmentTable", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/self-development-table/self-development-table.template.html",
    scope: {
      onEdit: "&",
      onDelete: "&",
    },
  };
});
