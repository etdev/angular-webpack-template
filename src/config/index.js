const baseUrl = 'http://localhost:3000/v1/';

// setup, config
export default function(myApp) {
  // restangular init
  require("./restangular")(myApp, baseUrl);

  // menu init
  require("./menu")(myApp);

  // environment setup
  myApp.run(function($rootScope, $document) {
    $rootScope.config = {
      "env": "development" // add logic to determine this
    };

  });

}

