var application = angular.module('fragmapoetas_app', []);

application.controller( 'navbarController', function( $scope, $rootScope ) {
   
    $scope.login = {
       show : true,
    };
    $rootScope.login = $scope.login
});

application.controller('fragmas',  function($scope){
    
    

});

application.controller('login_controller', function($scope, $rootScope) {
   $scope.submit = function(){
       if( $scope.email == 'gunt.raro@gmail.com' && $scope.password == '%Ralogu2' ) {
           
           $rootScope.login.show = false
           alert( "Success mutherfucker" )
           
       }
   }
});