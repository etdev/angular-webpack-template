export default function(myApp, controllers) {
  myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: controllers.MainCtrl,
      templateUrl: 'assets/templates/home/main.html'
    });
  });
}
