export default function(myApp, controllers) {
  myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: controllers.MainCtrl,
      templateUrl: '/controllers/main.html.slim'
    });
  });
}
