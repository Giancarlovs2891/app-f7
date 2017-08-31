document.addEventListener("backbutton", function(e){
    myApp.alert("Backbutton");
}, false);




function addProductToCart(x) {
  myApp.prompt('Cantidad', function (data) {
      // @data contains input value
      myApp.confirm('Are you sure that your name is ' + data + '?', function () {
          myApp.alert('Ok, your name is ' + data + ' ;)');
      });
  });
}
