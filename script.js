//login
$(document).ready(function(){
    $("#login-form").validate({
        errorClass:'login-error fail-alert',
        validClass:'login-valid success-alert',
        rules:{
            loginEmail:{
                required:true,
                email:true,
            },
            loginPassword:{
                required:true
            }
        },
        messages:{}
    })
})



//signup 
$(document).ready(function(){
   
    $("#signup-form").validate({
        errorClass:"error fail-alert",
        validClass:"valid success-alert",
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
        },
        messages:{
            fname:{
                required:"First name is required",
               
            },
            sname:{
                required:'Surname is required'
            }
        }
        
    })
    
})


