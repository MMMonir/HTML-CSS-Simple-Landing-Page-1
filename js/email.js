function handleEmail(){
    emailjs.init("user_yB7JbRwkUQ477ok1xjot9");
    const gmailServiceId = 'service_f2cncwj';
    const templateId = 'template_vr3d4pa';

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const subject = document.getElementById("subjectInput").value;
    const message = document.getElementById("msgInput").value;

    const emailDetails = { name, email, subject, message };
    
    emailjs.send(gmailServiceId, templateId, emailDetails)
    .then(function(res){
        if(res.status === 200){
            alert('Email Send Successfully');
            document.getElementById("nameInput").value ='';
            document.getElementById("emailInput").value ='';
            document.getElementById("subjectInput").value ='';
            document.getElementById("msgInput").value = '';
        }
        else{ alert('There is error at sending message. ') }
    }) 
}