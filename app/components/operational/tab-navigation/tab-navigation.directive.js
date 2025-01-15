angular.module("iWorkApp").directive("iwTabNavigation", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/tab-navigation/tab-navigation.template.html",
    scope: {
      // เพิ่มการรับข้อมูลจาก parent
      criteria: "=", // รับข้อมูล performanceCriteria
      meetings: "=", // รับข้อมูล meetings
      onEdit: "&", // รับ function edit
      onDelete: "&", // รับ function delete
    },
    controller: [
      "$scope",
      function ($scope) {
        // Tab definitions
        $scope.tabs = [
          {
            id: "main",
            title: "ภาระงานหลักและผลการปฏิบัติงาน",
          },
          {
            id: "strategy",
            title: "การพัฒนางานและงานสนับสนุนยุทธศาสตร์มหาวิทยาลัย",
          },
          {
            id: "development",
            title: "งานการพัฒนาตนเอง",
          },
        ];

        // Default selected tab
        $scope.selectedTab = "main";

        // ข้อมูลสำหรับ Performance Table
        $scope.mainCriteria = [
          // ข้อมูลตามที่ต้องการแสดง
        ];

        $scope.examSupervisions = [
          // ข้อมูลการคุมสอบ
        ];

        // Tab selection handler
        $scope.selectTab = function (tabId) {
          $scope.selectedTab = tabId;
        };

        // Action handlers
        $scope.editItem = function (item) {
          // Handle edit
        };

        $scope.deleteItem = function (item) {
          // Handle delete
        };

        $scope.editExam = function (exam) {
          // Handle exam edit
        };

        $scope.deleteExam = function (exam) {
          // Handle exam delete
        };

        // ข้อมูลสำหรับ Strategy Table
        $scope.strategyItems = [
          {
            project: "โครงการ A",
            type: "พัฒนา",
            details: "รายละเอียดโครงการ",
            indicators: "ตัวชี้วัด 1, ตัวชี้วัด 2",
            target: "เป้าหมาย A",
          },
          // ... more items ...
        ];
      },
    ],
  };
});
