// ========== input kolloh ==========


 var emailName = document.getElementById("emailName") ;                     // ==== email Name Input  ====

 var emailPassword = document.getElementById("emailPassword") ;            // ==== email Password Input  ====

 var hiddenMessage = document.getElementById("hiddenMessage") ;           // ==== hidden message [ All inputs is required ] ====

 var loginInput = document.getElementById("loginInput") ;                // ==== login button Input  ====


//  =================================================================================================================


 var personDataList = [] ;

 if ( localStorage.getItem("personDataList") != null  ){


   personDataList = JSON.parse( localStorage.getItem("personDataList") ) ;

 }





// ===================================== function to add Data =====================================

 function addData ()
 {


 if ( checkEmailAndPassword () == true ){


 window.location.href =  "./home.html"


 }

 else{

   hiddenMessage.classList.remove("d-none") ;

   removeData () ;

 }

 

   }



//  ================================= end of function add Data  ==============================================



// ========== function to remove Data =========

 function removeData ()
 {
   emailName.value = "";

   emailPassword.value = "";


 }



// ========== function to check email and password Data =========

 function checkEmailAndPassword (){

  for (  var i = 0; i < personDataList.length ;  i ++)

if ( personDataList[i].emailName ==  emailName.value && personDataList[i].emailPassword ==  emailPassword.value ){

  
 localStorage.setItem( "userName" , personDataList[i].personName ) ;
 return true ;


}



 }






























