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
  
  