

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.phone.value;
    var issue = document.contactForm.issue.value;
    
    var nameErr = emailErr = mobileErr = issueErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    
    // Validate mobile
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        // Regular expression for basic email validation
        var regex = /^\d+$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else {
            printError("mobileErr", "");
            emailErr = false;
        }
    }

    // Validate issue
    if (issue == "") {
        printError("issueErr", "Please enter your issue");
        issueErr = false;
    } 
    document.contactForm.name.value = '';
    document.contactForm.email.value = '';
    document.contactForm.phone.value = '';
    document.contactForm.issue.value = '';
    

    if (nameErr || emailErr || mobileErr || issueErr == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}




var myNodelist = document.getElementsByClassName("close-sign");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement.parentElement.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");

    var div_well = document.createElement("div");
    div_well.classList.add('well');

    var div_row = document.createElement("div");
    div_row.classList.add('row');

    var div_col_11 = document.createElement("div");
    div_col_11.classList.add('col-11');

    var div_col = document.createElement("div");
    div_col.classList.add('col');

    var div_media = document.createElement("div");
    div_media.classList.add('media');

    var a = document.createElement("a");
    a.classList.add('pull-left');

    var img = document.createElement("img");
    img.classList.add('media-object', 'float-right', 'side-img');
    img.src="images/blogimage.jpg";

    var div_mediaBody = document.createElement("div");
    div_mediaBody.classList.add('media-body');

    var h4 = document.createElement("h4");
    h4.classList.add('media-heading');
 
    // var p2 = document.createElement("p");
    // p2.classList.add('text-right');
    
    var p = document.createElement("p");

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    var title_node = document.createTextNode(title);
    var description_node = document.createTextNode(description);

    // var styleNode = document.createElement('style');
    // styleNode.type = "text/css";
    // styleNode.styleSheet.cssText = '.side-img { height:100px; width:100px; object-fit:contain }';

    div_well.appendChild(div_row);
    div_row.appendChild(div_col_11);
    div_row.appendChild(div_col);
    div_col_11.appendChild(div_media);
    div_media.appendChild(a);
    a.appendChild(img);
    //img.appendChild(styleNode);
    div_media.appendChild(div_mediaBody);
    div_mediaBody.appendChild(h4);
    // div_mediaBody.appendChild(p2);
    div_mediaBody.appendChild(p);
    p.appendChild(description_node);
    h4.appendChild(title_node);
    li.appendChild(div_well);

    if (description === '') {
        alert("Both fields are required!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    div_col.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement.parentElement;
            div.style.display = "none";
        }
    }
}