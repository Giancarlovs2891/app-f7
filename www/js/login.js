if (!localStorage.getItem("login")) {
  mainView.router.loadPage("views/login.html");
} else {
  mainView.router.loadPage("index.html");
}

function login() {
  var username = $$("#username-login").val().trim();
  var password = $$("#password-login").val().trim();
  if(username == "" || password == ""){
    myApp.alert("Debe diligenciar todos los campos");
    return;
  }
  var auth = "Basic " + btoa(username+":"+password);

  //here goes ajax request for login

  mainView.router.loadPage("views/load-data.html");
  // localStorage.setItem("login", auth);

}

function forgotPassword() {
  var username = $$("#username-forgot-password").val().trim();
  if(username == ""){
    myApp.alert("Debe ingresar un correo");
    return;
  }

  //here goes ajax request for login

  mainView.router.loadPage("views/login.html");
  // localStorage.setItem("login", auth);

}

// $("#sign-in-btn").click(function (){
//   // mainView.router.loadPage("index.html");
//   localStorage.setItem("login", "1");
// });

// $("#sign-out-app").click(function (){
//   localStorage.removeItem("login");
//   $("#app-login-page").show();
// });
//
// $("#forgot-password-btn").click(function (){
//   $("#app-login-page").hide();
//   $("#app-forgot-password-page").show();
// });
//
// $("#show-sign-in-btn").click(function (){
//   $("#app-forgot-password-page").hide();
//   $("#app-login-page").show();
// });
//
// $("#recover-password-btn").click(function (){
//   myApp.alert("Se ha enviado una nueva contraseña a: " + $("#username-forgot-password").val());
//   $("#app-forgot-password-page").hide();
//   $("#app-login-page").show();
// });
