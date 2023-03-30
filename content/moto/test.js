const rentalForm = document.querySelector('#rentalForm');

rentalForm.addEventListener('submit', e => {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  var params = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };
 

  const serviceID = 'service_gmss0g7';
  const templateID = 'template_i0lc322';

  emailjs
    .send(serviceID, templateID, params)
    .then(res => {
      document.getElementById('fname').value = '';
      document.getElementById('lname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Your message sent successfully!!');
    })
    .catch(err => console.log(err));
}
