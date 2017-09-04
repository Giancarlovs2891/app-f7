myApp.onPageInit('load-data', function (page) {
  console.log(page);
  myApp.showIndicator();
  window.setTimeout(function() {
    myApp.hideIndicator();
    mainView.router.loadPage(APP_VIEWS.stores)
  },1000);
});

myApp.onPageInit('change-password', function (page) {
});

myApp.onPageInit('sync-data', function (page) {
});

myApp.onPageInit('stores', function (page) {
});
