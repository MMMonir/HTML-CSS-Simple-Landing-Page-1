function handleEmail(){
    const status = document.getElementById("status");
    status.innerHTML = "Email Sending.....";
    emailjs.init("user_yB7JbRwkUQ477ok1xjot9");
    const gmailServiceId = 'service_f2cncwj';
    const templateId = 'template_vr3d4pa';

    const form = document.getElementById("formInputs")
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const subject = document.getElementById("subjectInput").value;
    const message = document.getElementById("msgInput").value;

    const emailDetails = { name, email, subject, message };
    
    emailjs.send(gmailServiceId, templateId, emailDetails)
    .then(function(res){
        if(res.status === 200){
            form.reset();
            status.classList.add("success");
            status.innerHTML = "Successfully Sended";
            setInterval(function() {
                if(res.status === 200) { location.reload() }
          }, 4000);
        }
        else{ 
            status.classList.add("error");
            status.innerHTML = "Failed! Please try again";
        }
    })
}