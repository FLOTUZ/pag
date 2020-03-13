$(document).ready(function(){
    $("button#ingresar").on("click", function(e){
        var email = $("input#email").val();
        var pass = $("input#password").val();
        
        if(email != "" && pass != ""){
            alert("eSTÁSS LOGEADO");
        }else{
            alert("nO ESTPAS LOGEADO");   
            }
    });
});