//Sign-up///////////////////////////////////////

var file;

function loadFile(input) {
    file = input.files[0];

    var name = document.getElementById('PFP_Filename');
    name.textContent = file.name;

    var container = document.getElementById('PFPPreview');
    container.src = URL.createObjectURL(file); 
    
};

function ResetFile(input) {
    file = null;

    var name = document.getElementById('PFP_Filename');
    name.textContent = "Default PFP";

    var container = document.getElementById('PFPPreview');
    container.src = "https://www.tabthedev.kro.kr/Default_PFP.png"; 
    
};


function SU_Submit() {
    var Nickname = document.getElementById('Username-Register');
    var Password = document.getElementById('Password-Register');


    SaveImageToDiscordServer(file);
};

function sendEmail() {
    var elmail = document.getElementById('Email-Register').value;
    console.log(elmail)
    Email.send({
    Host : "tabthedev.github.io",
    Username : "<Mailtrap username>",
    Password : "<Mailtrap password>",
    To : elmail,
    From : "tabk123@dev.tab-kth.o-r.kr",
    Subject : "Verification Email from tab the_dev",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
        message => alert(message)
    )
};

function SendCode() {
    var CodeInput = document.getElementById('Verification');
    CodeInput.style.visibility = 'visible';

    document.getElementsByClassName('VFCTI').style

    sendEmail()
};





//Login////////////////////////////////////////