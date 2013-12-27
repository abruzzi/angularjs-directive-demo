define(['angular', 
        'angular-mocks',
        'directives/directives',
        'directives/datepicker-directive'], 
    function() {
     describe("datepicker directives", function() {
         var element, scope;

         beforeEach(function() {
            module("directives");
            inject(function($compile, $rootScope) {
                scope = $rootScope.$new();
                scope.defaultDate = new Date("2013/12/24");
                element = angular.element("<datepicker date='defaultDate'></datepicker>");
                $compile(element)(scope);
            });
         });

         it("should have date value set", function() {
             scope.$digest();
             expect(element.val()).toEqual("12/24/2013");
         });
         
         it("should can reset new date", function() {
            scope.defaultDate = new Date("2012/12/12");
            scope.$digest();
            expect(element.val()).toEqual("12/12/2012");
         });

     });
     
});
