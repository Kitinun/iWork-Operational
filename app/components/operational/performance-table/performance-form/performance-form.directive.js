angular.module("iWorkApp").directive("iwPerformanceForm", function () {
  return {
    restrict: "E",
    templateUrl:
      "app/components/operational/performance-table/performance-form/performance-form.template.html",
    scope: {
      isOpen: "=",
      onClose: "&",
      onSave: "&",
    },
    controller: [
      "$scope",
      function ($scope) {
        // เปลี่ยนชื่อ property เป็นภาษาอังกฤษ
        $scope.formData = {
          nature: "",
          responsibility: "",
          indicators: "",
          weight: "",
        };

        $scope.resetForm = function () {
          $scope.formData = {
            nature: "",
            responsibility: "",
            indicators: "",
            weight: "",
          };
        };

        $scope.save = function () {
          if ($scope.formData) {
            // แปลงข้อมูลกลับเป็นภาษาไทยก่อนส่ง
            const thaiData = {
              ลักษณะงาน: $scope.formData.nature,
              ความรับผิดชอบ: $scope.formData.responsibility,
              ตัวชี้วัดผลงาน: $scope.formData.indicators,
              น้ำหนัก: $scope.formData.weight,
            };
            $scope.onSave({ data: thaiData });
            $scope.resetForm();
            $scope.onClose();
          }
        };
      },
    ],
  };
});
