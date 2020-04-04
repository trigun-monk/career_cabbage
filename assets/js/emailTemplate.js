function sendEmail() {
   // alert(message_body);
	Email.send({
        SecureToken: "1854c890-1fdc-4510-9aeb-4c95037482c9",

        To : 'panicker.sujeeth@gmail.com',
        From : "darius.klasnik@gmail.com",
        Subject : "random",
        Body : "body",
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}

function validateEmailContent()
{
   var content= document.getElementById("textMessage").value;
   //alert(content);
   var emailId= document.getElementById("inputEmail1").value;

   var name=document.getElementById("inputName").value;
   //alert(emailId);
    if(emailId &&   content && name)
    {
        //alert("true");
       //sendEmail(String(name)+" "+String(emailId)+" "+ String(content) );
       sendEmail();
    }
    else
    {
        alert("Please validate and complete required fields!");
    }
}


function validateEmailAddress(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}