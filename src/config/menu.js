export default function(myApp) {

  // initialize menu open-close JS
  myApp.run(function($document) {

    $document.ready(function() {
      $('.menu-toggle-btn, .menu-fade-screen,.menu-close').on('click touchstart',function (e) {
        $('.menu-content,.menu-fade-screen').toggleClass('is-visible');
        e.preventDefault();
      });
    });

  });

}
