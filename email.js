
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">


(function(){
emailjs.init("4Ka-C28fB9Wo7uUUS");
})();



document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.js-submit').addEventListener('click', function() {
    // Gather form data
    var formData = {

      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      note: document.getElementById('note').value,
      package: document.getElementById('package').value,

      iday: document.getElementById('auto-fill-day').innerHTML,
      imonth: document.getElementById('auto-fill-month').innerHTML,
      iyear: document.getElementById('auto-fill-year').innerHTML,

      oday: document.getElementById('auto-fill-day1').innerHTML,
      omonth: document.getElementById('auto-fill-month1').innerHTML,
      oyear: document.getElementById('auto-fill-year1').innerHTML,

    };

    // Use EmailJS to send the email to you
    emailjs.init("4Ka-C28fB9Wo7uUUS");  // Replace with your User ID

    // Prepare the email template parameters for your email
    var templateParamsForYou = {
      to_name: "Your Name",  // Replace with your name or the desired recipient name
      from_name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      note: formData.note,
      package: formData.package,
      iday: formData.iday,
      imonth: formData.imonth,
      iyear: formData.iyear,
      oday: formData.oday,
      omonth: formData.omonth,
      oyear:formData.oyear,

    };

    // Use the service ID and template ID from your EmailJS account
    emailjs.send("service_66vfecl", "template_ix54lrq", templateParamsForYou)
      .then(function(response) {
        console.log("Your email sent successfully:", response);
      })
      .catch(function(error) {
        console.error("Your email failed to send:", error);
      });

    // Use EmailJS to send the confirmation email to the customer
    var templateParamsForCustomer = {
      to_name: formData.firstName + ' ' + formData.lastName,
      from_name: formData.firstName,  // Replace with your name or the desired sender name
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      note: formData.note,
      package: formData.package,
      iday: formData.iday,
      imonth: formData.imonth,
      iyear: formData.iyear,
      oday: formData.oday,
      omonth: formData.omonth,
      oyear:formData.oyear,
    };

    // Use the service ID and template ID for the customer from your EmailJS account
    emailjs.send("service_66vfecl", "template_0bpwtqu", templateParamsForCustomer)
      .then(function(response) {
        console.log("Customer email sent successfully:", response);
        
        // Display a confirmation message to the user (you may want to replace this with actual user feedback)
        alert('Booking successful!');
        
        // Optionally, you can redirect the user to a thank-you page or perform other actions as needed
        // window.location.href = 'thank-you.html';
      })
      .catch(function(error) {
        console.error("Customer email failed to send:", error);
        
        // Display an error message to the user or handle the error appropriately
        alert('Booking failed. Please try again later.');
      });

  });
  // Clear form fields after sending emails
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('note').value = '';
  document.getElementById('package').value = '';
  document.getElementById('oday').value = '';
  document.getElementById('omonth').value = '';
  document.getElementById('oyear').value = '';
  document.getElementById('iday').value = '';
  document.getElementById('imonth').value = '';
  document.getElementById('iyear').value = '';
});
