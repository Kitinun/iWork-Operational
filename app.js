// app/app.js
"use strict";

/**
 * iWork Application Module
 */
angular.module("iWorkApp", []).controller("PerformanceController", [
  "$scope",
  function ($scope) {
    // Initialize Controller
    function init() {
      initializePageState();
      initializeEmployeeData();
      initializeEvaluationPeriod();
      initializePerformanceCriteria();
      initializeMeetingData();
      setupEventListeners();
    }

    /**
     * Page State Management
     */
    function initializePageState() {
      $scope.currentPage = "operational";
    }

    function setupEventListeners() {
      $scope.$on("pageChanged", function (event, page) {
        $scope.currentPage = page;
      });
    }

    /**
     * Employee Data Management
     */
    function initializeEmployeeData() {
      $scope.employee = {
        name: "กิตินันท์ คนสอน",
        position: "เจ้าหน้าที่บริหารงานทั่วไป",
        department: "ส่วนกิจการนักศึกษา",
        work: "งานยุทธศาสตร์และพัฒนามาตรฐานกิจการนักศึกษา",
        evaluationLevel1: "หัวหน้างานกิจการนักศึกษา",
        evaluationLevel2: "หัวหน้างานบุคลากรและพัฒนามาตรฐานกิจการนักศึกษา",
      };
    }

    /**
     * Evaluation Period Management
     */
    function initializeEvaluationPeriod() {
      $scope.evaluationPeriod = {
        term: "1/2567",
        startDate: "1 มีนาคม",
        endDate: "30 มิถุนายน",
      };
    }

    /**
     * Performance Criteria Management
     */
    function initializePerformanceCriteria() {
      $scope.performanceCriteria = [
        {
          area: "ด้านการปฏิบัติการ",
          responsibilities: [
            {
              id: "1.1",
              description:
                "วิเคราะห์วางแผนกลยุทธ์แผนงาน เพื่อนำไปสู่การแก้ปัญหา",
              indicators: "รายงานผลข้อมูล และติดตามผลโครงการ กิจกรรม",
              weight: 50,
            },
          ],
        },
        {
          area: "ด้านการวางแผน",
          responsibilities: [
            {
              id: "2.1",
              description: "วางแผนการทำงานที่รับผิดชอบ",
              indicators: "แผนปฏิบัติการ/โครงการ ที่ครอบคลุม",
              weight: 20,
            },
          ],
        },
        {
          area: "ด้านการประสานงาน",
          responsibilities: [
            {
              id: "3.1",
              description: "ประสานการทำงานร่วมกันทั้งภายในและภายนอก",
              indicators: "ประสานงานได้อย่างราบรื่น",
              weight: 20,
            },
          ],
        },
      ];
    }

    /**
     * Meeting Data Management
     */
    function initializeMeetingData() {
      $scope.meetings = [
        {
          date: "4/10/2567",
          time: "13:00-15:00",
          position: "กรรมการ",
          result: "เป็นไปตามวาระครบถ้วน",
        },
      ];
    }

    /**
     * CRUD Operations
     */
    $scope.edit = function (item) {
      console.log("Editing:", item);
    };

    $scope.delete = function (item) {
      console.log("Deleting:", item);
    };

    $scope.add = function (type) {
      if (type === "meeting") {
        $scope.meetings.push({
          date: "",
          time: "",
          position: "",
          result: "",
        });
      }
    };

    // Initialize Controller
    init();
  },
]);
