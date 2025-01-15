angular
  .module("iWorkApp")
  .directive("iwNavbar", function () {
    return {
      restrict: "E",
      templateUrl: "app/components/navbar/navbar.template.html",
      scope: {},
      controller: [
        "$scope",
        "$rootScope",
        function ($scope, $rootScope) {
          $scope.user = {
            name: "กิตินันท์ คนสอน",
          };

          $scope.currentPage = "operational"; // กำหนดหน้าปัจจุบัน
          $scope.isMenuOpen = false;

          $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
          };

          $scope.selectPage = function (page) {
            $scope.currentPage = page;
            $rootScope.$broadcast("pageChanged", page); // ส่ง event ไปบอก controller อื่นๆ
            $scope.isMenuOpen = false; // ปิดเมนูเมื่อเลือกหน้าแล้ว
          };
        },
      ],
    };
  })
  .filter("firstChar", function () {
    return function (input) {
      return input ? input.charAt(0) : "";
    };
  });
