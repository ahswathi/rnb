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
 

  /* if (params.fname === '') {
    return document.getElementById('errname').innerHTML = '*Enter Valid Name';
  } else {
     document.getElementById('errname').innerHTML = ''
  }

  if (params.lname === '') {
    return document.getElementById('errlname').innerHTML = '*Enter Valid Name';
  } else {
     document.getElementById('errlname').innerHTML = ''
  } */

  /* if (params.email === '') {
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
