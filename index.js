function ValidateForm(){
    const Email = document.getElementById('Email1');
    const generalContainer = document.getElementById('general-container2');
    const secondGeneral = document.getElementById('Second-container');
    
    const errorMessage = document.getElementById('errormessage')
    const gmail = document.getElementById('Gmail')

    const agentEmail = Email.value;

    if (agentEmail==="") {
        errorMessage.style.display = 'block';

    } else {
        generalContainer.style.display = 'none';
        secondGeneral.style.display = 'block';
        gmail.innerHTML = agentEmail
    }
}
function ReturnButton(){
    const generalContainer = document.getElementById('general-container2');
    const secondGeneral = document.getElementById('Second-container');
    const Email = document.getElementById('Email1');

    secondGeneral.style.display = 'none'
    generalContainer.style.display = 'block'
    Email.value =""
    

}