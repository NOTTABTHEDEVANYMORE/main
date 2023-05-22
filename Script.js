//Upload Post///////////////////////////////////////////
$(document).ready(function() {
    $('#summernote').summernote();
  });


//Sign-up///////////////////////////////////////

var file;
/*
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1),
            a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
                n(e)
            })
        }
        )
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }
        ,
        a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }
        ,
        t.send()
    },
    createCORSRequest: function(e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials"in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null,
        t
    }
};*/


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
    var elmail = document.getElementById('Email-Register-name').value;
    var elmailw = document.getElementById('Email-Register-domain').value;
    console.log(elmail+"@"+elmailw)
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "tabk123@dev.tab-kth.o-r.kr",
            Password : "E5AA78FB4635D7E1F06290595BD51484B71C",
            To : elmail+'@'+elmailw,
            From : "tabthedev.kro.kr",
            /*Host : "smtp.gmail.com",
            Username : "tabbasurd@gmail.com",
            Password : "*kim12340206",
            To : elmail+'@'+elmailw,
            From : "tabthedev",*/
            Subject : "Verification Email from tab the_dev",
            Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
        message => alert(message)
    )
};

function SendCode() {
    var CodeInput = document.getElementById('Verification');
    CodeInput.style.visibility = 'visible';

    document.getElementsByClassName('VFCTI').value = "Re-Send Verification Code";

    sendEmail();
};





//Login////////////////////////////////////////