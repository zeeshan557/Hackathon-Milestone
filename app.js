var form = document.getElementById('form-container');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //colect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var resumeHTML = "\n <h2><b>Resume</b></h2>\n <h3>Persnol Information</h3>\n <p><b>Name;</b>".concat(name, "</p>\n <p><b>Name;</b>").concat(email, "</p>\n <p><b>Name;</b>").concat(password, "</p>\n\n <h3>Education</h3>\n <p>").concat(education, "</p>\n\n <h3>Experience</h3>\n <p>").concat(experience, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display password is wrong');
    }
});
