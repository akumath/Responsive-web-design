(function(){
    //Defining angular module myapp
    //ngMessages for form error messages depends on user input
    angular.module("myapp",['ngMessages']);
    //registering controller on module
    angular.module('myapp').controller('mainController',mainControllerFn);
    function mainControllerFn($scope,$window){
        $scope.show=true;
        $scope.showOnly=false;
        $scope.showReview=false;

        //Record list
        $scope.records = [
            {
                title: "EL Pooch",
                author: "Alex Nelson"
            },
            {
                title: "The Flight",
                author: "Scott Mastersonn"
            }

            ];

        //Enter new record if form value is valid
        $scope.addRecord = function(isFormValid){
            if(isFormValid){
                //comparing value in local storage
                if(localStorage.getItem($scope.newRecord.title)==null){
                    //push new record into data list
                    $scope.records.push($scope.newRecord);
                    //hide the form after push operation
                    $scope.showOnly=false;
                    localStorage.setItem($scope.newRecord.title, $scope.newRecord.author);
                }
                else{
                    alert("Title already exist");
                }

            }
        };
        //Storing data in local storage for form validation
        for ($scope.i=0; $scope.i < localStorage.length; $scope.i++)   {
            //console.log(localStorage.key($scope.i) + "=[" + localStorage.getItem(localStorage.key($scope.i)) + "]");
            $scope.obj = {
              title:  localStorage.key($scope.i),
                author: localStorage.getItem(localStorage.key($scope.i))
            };
            $scope.records.push($scope.obj);
        }


        //User clicks on No
        $scope.closeComponent = function(){
            $scope.show = false;
        };
        //User clicks on Yes
        $scope.showComponent = function(){
            $scope.showOnly=true;
        };
        //user clicks on review
        $scope.activeParentIndex;
        $scope.display = function(index){
            //console.log(index);
            $scope.activeParentIndex = index;

        };

        $scope.showReview = function(index){
            return  $scope.activeParentIndex === index;
        };

        $scope.post= function(index){
            $scope.activeParentIndex === index;
            $scope.activeParentIndex=false;
        };

        //JSON representation of data
        $scope.convertJson = function (){
            var searialized = JSON.stringify($scope.records);
            $window.alert(searialized);
        };
    }
})();
//jQuery for Menu Slider
(function($){

    $(document).ready(function(){
        $(".menu-trigger").click(function(){
            $(".nav-menu").slideToggle(400,function(){
                $(this).toggleClass("nav-expanded").css('display','');
            });
        });
    });


})(jQuery);