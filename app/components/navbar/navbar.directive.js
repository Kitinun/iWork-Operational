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

          $scope.currentPage = "operational";
          $scope.isMenuOpen = false;
          $scope.isUserMenuOpen = false; // เพิ่มตัวแปรควบคุม dropdown

          $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
            $scope.isUserMenuOpen = false; // ปิด user menu เมื่อเปิด hamburger menu
          };

          $scope.toggleUserMenu = function (event) {
            event.stopPropagation(); // ป้องกันการ bubble ของ event
            $scope.isUserMenuOpen = !$scope.isUserMenuOpen;
          };

          $scope.selectPage = function (page) {
            $scope.currentPage = page;
            $rootScope.$broadcast("pageChanged", page);
            $scope.isMenuOpen = false;
            $scope.isUserMenuOpen = false;
          };

          $scope.handleProfileClick = function () {
            console.log("Navigate to profile");
            $scope.isUserMenuOpen = false;
          };

          $scope.handleSettingsClick = function () {
            console.log("Navigate to settings");
            $scope.isUserMenuOpen = false;
          };

          $scope.logout = function () {
            console.log("Logging out...");
            $scope.isUserMenuOpen = false;
          };

          // ปิด dropdown เมื่อคลิกที่อื่น
          document.addEventListener("click", function () {
            if ($scope.isUserMenuOpen) {
              $scope.isUserMenuOpen = false;
              $scope.$apply();
            }
          });
        },
      ],
    };
  })
  .filter("firstChar", function () {
    return function (input) {
      return input ? input.charAt(0) : "";
    };
  });
