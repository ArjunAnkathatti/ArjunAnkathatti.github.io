$(document).ready(function() {
  /* 
  * Footer contact submit button actions
  */
 $("#contact-form").submit(function(e){
    e.preventDefault();
    console.log('submit button clicked');

    var name = $("#form-name").val();
    var email = $("#form-email").val();
    var message = $("#form-message").val();

    var userAlert = '';
    

    if (name === undefined || name === '') {
        userAlert = 'Please provide your name.';
        $("form-name").focus();
    } else if (email === undefined || email === '') {
        userAlert = 'Please enter your email address.';
        $("#form-email").focus();
    } else if (message === undefined || message === '') {
        userAlert = 'Message body can not be empty.';
        $("#form-message").focus();
    } else {
        console.log("sending email");
        userAlert = sendEmail(name, email, message);
        $("form-name").val = '';
        $("#form-email").val = '';
        $("#form-message").val ='';
    }

    $(".form-user-message").text(userAlert).show().fadeOut(4000);

 });

 function sendEmail(fname, femail, fmessage) {
     console.log("inside send Emila functions");
    $.post("https://formspree.io/arjun.ankathatti@gmail.com", 
    {
        name: fname,
        email: femail,
        message: fmessage
    }, 
    function(result, status) {
        console.log("email sent succesfully");
    }
    );
    return "Thank you!, I will get back to you soon.";
 }

});