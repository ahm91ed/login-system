
var welcomeMessage = document.getElementById ("welcomeMessage") ;
var loginInput     =  document.getElementById ("loginInput") ;





welcomeMessage.innerHTML = localStorage.getItem("userName") ;



// ========== event on log out ==========

loginInput.addEventListener("click" , function (){


     localStorage.removeItem("userName") ;
     window.location.href = "./index.html" ;



})  ;