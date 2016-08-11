export default function(myApp, baseUrl) {

  myApp.config(function(RestangularProvider) {
    // set base path for API
    RestangularProvider.setBaseUrl(baseUrl);

    // format responses with paging metadata
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      // set response interceptor
    });
  });

}
