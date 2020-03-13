$(document).ready(function(){
    $("button#ingresar").on("click", function(e){
        var email = $("input#email").val();
        var pass = $("input#password").val();
        
        if(email != "" && pass != ""){
            alert("ANDAS AL CIEN PAP'S");
        }else{
            alert("A TOMAR POR CULO");   
            }
    });
});