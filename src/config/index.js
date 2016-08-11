// global config
const baseUrl = 'http://localhost:3000/v1/';

export default function(myApp) {
  myApp.run(function($rootScope) {
    $rootScope.config = {
      "env": "development" // add logic to determine this
    };
  });

  myApp.config(function(RestangularProvider) {
    // set base path for API
    RestangularProvider.setBaseUrl(baseUrl);

    // format responses with paging metadata
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      // set response interceptor
    });
  });
}

