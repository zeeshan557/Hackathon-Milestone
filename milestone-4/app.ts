const form = document.getElementById('form-container') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit' , (event: Event) => {
    event.preventDefault();

//colect input values
 const name= (document.getElementById('name') as HTMLInputElement).value
 const email= (document.getElementById('email') as HTMLInputElement).value
 const password= (document.getElementById('password') as HTMLInputElement).value
 const education= (document.getElementById('education') as HTMLInputElement).value
 const experience= (document.getElementById('experience') as HTMLInputElement).value

 const resumeHTML =`
 <h2><b>Editable Resume</b></h2>
 <h3>Persnol Information</h3>
 <p><b>Name;</b><span contenteditable="true">${name}</span></p>
 <p><b>Email;</b><span contenteditable="true">${email}</span></p>
 <p><b>Password;</b><span contenteditable="true">${password}</span></p>

 <h3>Education</h3>
 <p contenteditable="true">${education}</p>

 <h3>Experience</h3>
 <p contenteditable="true">${experience}</p>`



 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;}
    else{
        console.error('The resume display password is wrong');
    }
});
