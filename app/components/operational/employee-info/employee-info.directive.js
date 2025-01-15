angular.module("iWorkApp").directive("iwEmployeeInfo", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/employee-info/employee-info.template.html",
    scope: {
      employee: "=",
    },
  };
});
