if (!localStorage.getItem("login")) {
  $("#app-login-page").show();
} else {
  $("#app-inner-content").show();
}

$("#sign-in-btn").click(function (){
  $("#app-inner-content").show();
  localStorage.setItem("login", "1");
  $("#app-login-page").hide();
});

$("#sign-out-app").click(function (){
  localStorage.removeItem("login");
  $("#app-login-page").show();
});

$("#forgot-password-btn").click(function (){
  $("#app-login-page").hide();
  $("#app-forgot-password-page").show();
});

$("#show-sign-in-btn").click(function (){
  $("#app-forgot-password-page").hide();
  $("#app-login-page").show();
});

$("#recover-password-btn").click(function (){
  myApp.alert("Se ha enviado una nueva contraseña a: " + $("#username-forgot-password").val());
  $("#app-forgot-password-page").hide();
  $("#app-login-page").show();
});
