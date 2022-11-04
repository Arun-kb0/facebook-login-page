$(document).ready(function(){
    $("#signup-form").validate({
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
                minlength:6
            },
            day:{
                required:true,
            },
            gender:{
                required:true
            }
            

        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"at least 4 charecters"
            }
        }
        
    })
})
