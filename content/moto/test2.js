const accidentForm = document.querySelector('#accidentForm');

accidentForm.addEventListener('submit', e => {
  e.preventDefault();
  sendMail2();
});

function sendMail2() {
    var params = {
      fname: document.getElementById("fname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      reffered: document.getElementById("reffered").value,
      message: document.getElementById("message").value,
      
    };
  /* 
    if (params.fname === '') {
      document.getElementById('errname').innerHTML = '*Enter Valid Name';
    } else {
       document.getElementById('errname').innerHTML = ''
    }
  
    if (params.reffered === '') {
      document.getElementById('errreffered').innerHTML = '*Enter Valid Name';
    } else {
       document.getElementById('errreffered').innerHTML = ''
    }
  
    if (params.email === '') {
      document.getElementById('erremail').innerHTML = '*Enter Valid Email';
    } else {
       document.getElementById('erremail').innerHTML = ''
    }
  
    if (params.phone === '') {
      document.getElementById('errphone').innerHTML = '*Enter Valid Number';
    } else {
       document.getElementById('errphone').innerHTML = ''
    }
  
    */
    const serviceID = "service_xoeg8dp";
    const templateID = "template_8lsqzbw";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("fname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("reffered").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));

  
  }
  
  