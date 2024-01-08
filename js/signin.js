
// ========== All Inputs  ==========


var nameInput          = document.getElementById("nameInput")  ;                    // ===== nameInput =====
var emailNameInput     = document.getElementById("emailNameInput")  ;              // ===== emailNameInput  =====
var emailPasswordInput = document.getElementById("emailPasswordInput")  ;         // ===== emailPasswordInput =====


var successMessage    = document.getElementById ( "successMessage" )  ;           // ===== successMessage =====
var alertMessage      = document.getElementById ( "alertMessage" ) ;             // ===== alertMessage   =====
var warningMessage    = document.getElementById ( "warningMessage" ) ;           // ===== warningMessage =====


var loginInput        = document.getElementById("loginInput") ;                 // ===== loginInput =====

var SignInAnchor      = document.getElementById("SignInAnchor") ;              // ===== SignInAnchor =====



// ========================================================================================================================




// ========== array of Person Data List ==========

var personDataList = [] ;

if ( localStorage.getItem( "personDataList" ) != null )
{
personDataList =  JSON.parse(  localStorage.getItem( "personDataList" )  ) ;

}




// ========================== function to add Person Data ==================================

function addPersonData (){

var personData = 
{
personName    : nameInput.value ,
emailName     : emailNameInput.value ,
emailPassword : emailPasswordInput.value ,
} 

if ( checkEmptyData() == true )
{
alertMessage.classList.remove("d-none");  // alert message all inputs required
successMessage.classList.add("d-none") ;
warningMessage.classList.add("d-none");
}

else 
{

if ( checkExistData () == true)
{
    warningMessage.classList.remove("d-none");
    alertMessage.classList.add("d-none");
    successMessage.classList.add("d-none") ;


}

else
{
personDataList.push(personData) ;
localStorage.setItem( "personDataList" , JSON.stringify(personDataList)  ) ; 
window.location.href = "./index.html"
successMessage.classList.remove("d-none") ;
warningMessage.classList.add("d-none");
alertMessage.classList.add("d-none");
}

}

        
console.log (personDataList ) ;

// ========== Invoking function remove Person Data ==========

removePersonData () ;
        
        


}

// ========================= End of function that add Person Data  ================================



// ===== check empty data =====

function checkEmptyData(){

if ( nameInput.value == "" || emailNameInput.value == "" || emailPasswordInput.value == ""  )

{
return true ;
}



}


// ===== check exist data =====

function checkExistData (){

    for ( var i = 0 ; i < personDataList.length ; i++ ){

 if ( personDataList[i].emailName == emailNameInput.value  )

{

return true ;

}



    
}


}




// ========== function to remove Person Data ==========

function removePersonData ()

{

    nameInput.value = "" ;

    emailNameInput.value = "" ;

    emailPasswordInput.value = "" ;
    
}




// =================== functions to remove all message when focus on inputs  ========================


nameInput.addEventListener("focus" , function(){

successMessage.classList.add("d-none") ;
warningMessage.classList.add("d-none");
alertMessage.classList.add("d-none");

})


emailNameInput.addEventListener("focus" , function(){

    successMessage.classList.add("d-none") ;
    warningMessage.classList.add("d-none");
    alertMessage.classList.add("d-none");
    
})



emailPasswordInput.addEventListener("focus" , function(){

        successMessage.classList.add("d-none") ;
        warningMessage.classList.add("d-none");
        alertMessage.classList.add("d-none");
        
})

// ================ End of function to remove all message when focus on inputs ===================












