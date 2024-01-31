
    // Initialize Email.js with your user ID
    emailjs.init("4Ka-C28fB9Wo7uUUS");
  
    // Attach the click event to the submit button
    $(".submit.button").on("click", function (e) {
      e.preventDefault();
  
      // Get values from the form
      var name = $(".input[placeholder='Name']").val();
      var email = $(".input[placeholder='Email']").val();
      var phone = $(".input[placeholder='Phone']").val();
      var message = $(".textarea").val();
  
      // Your Email.js template ID and parameters
      var templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };
  
      // Send email using Email.js
      emailjs.send("service_66vfecl", "template_wu1qdhc", templateParams)
        .then(function(response) {
          // Email sent successfully, trigger success popup
          $(".popup").removeClass("opened");
          $("#contact-us-success").addClass("opened");
        }, function(error) {
          // Handle error if email sending fails
          console.error("Failed to send email", error);
        });
    });