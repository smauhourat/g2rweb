
function sendContact() {
    cleanAlerts();
    var valid;	
    valid = validateContact();
    
    if(valid) {
        jQuery.ajax({
			url: 'includes/contact-form/contacto.php',
			data:'name='+$("#name").val()+'&email='+
            $("#email").val()+'&message='+
            $(message).val(),
            type: "POST",
            success:function(data){
                $("#form-messages").html(data);
                
                $("#form-messages").delay(1000).fadeIn(500);
                if (data.includes('error'))
                    $("#form-messages").toggleClass('alert alert-danger');
                else
                    $("#form-messages").toggleClass('alert alert-success');
                
                $("#form-messages").delay(1000).fadeOut(500);
                
                cleanInputs();
            },
            error:function (){
                cleanInputs();
            }
        });
    }
}

function cleanAlerts() {
    $("#form-messages").html('');
    $("#form-messages").removeClass('alert alert-success');
    $("#form-messages").removeClass('alert alert-danger');
}

function cleanInputs() {
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
}

function validateContact() {
    var valid = true;	
    $("#name-info").html('');
    $("#name").css('background-color','');
    if(!$("#name").val()) {
        $("#name-info").html("(Campo Requerido)");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    $("#email-info").html('');
    $("#email").css('background-color','');
    if(!$("#email").val()) {
        $("#email-info").html("(Campo Requerido)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email-info").html("(mail invalido)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    $("#message-info").html('');
    $("#message").css('background-color','');
    if(!$("#message").val()) {
        $("#message-info").html("(Campo Requerido)");
        $("#message").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}