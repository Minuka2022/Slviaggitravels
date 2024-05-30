 src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">

  document.addEventListener("DOMContentLoaded", function () {
    // Initialize Email.js with your user ID
    emailjs.init("4Ka-C28fB9Wo7uUUS");

    // Assuming you have a reference to the popup open button
    const popupOpenButton = document.querySelector(".js-popup-open");

    // Add a click event listener to the popup open button
    popupOpenButton.addEventListener("click", function () {
      // Get text content from the original divs
      const originalDay = document.querySelector(".day").textContent.trim();
      const originalMonth = document.querySelector(".month").textContent.trim();
      const originalYear = document.querySelector(".year").textContent.trim();

      const originalDay1 = document.querySelector('[name="day"]').textContent.trim();
      const originalMonth1 = document.querySelector('[name="month"]').textContent.trim();
      const originalYear1 = document.querySelector('[name="year"]').textContent.trim();

      const adultsValue = document.querySelector('input[name="adults"]').value;
      const childrenValue = document.querySelector('input[name="children"]').value;

      // Auto-fill the text into other divs
      document.querySelector('[name="auto-fill-day"]').textContent = originalDay;
      document.querySelector('[name="auto-fill-month"]').textContent = originalMonth;
      document.querySelector('[name="auto-fill-year"]').textContent = originalYear;

      document.querySelector('[name="auto-fill-day1"]').textContent = originalDay1;
      document.querySelector('[name="auto-fill-month1"]').textContent = originalMonth1;
      document.querySelector('[name="auto-fill-year1"]').textContent = originalYear1;

      document.querySelector('span[name="auto-fill-adults"]').textContent = adultsValue;
      document.querySelector('span[name="auto-fill-children"]').textContent = childrenValue;
    });

    // Handle form submission
    document.querySelector(".js-submit1").addEventListener("click", function () {
      // Gather form data
      var formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        note: document.getElementById("note").value,
        package: document.getElementById("package").value,

        iday: document.getElementById("auto-fill-day").innerHTML,
        imonth: document.getElementById("auto-fill-month").innerHTML,
        iyear: document.getElementById("auto-fill-year").innerHTML,

        oday: document.getElementById("auto-fill-day1").innerHTML,
        omonth: document.getElementById("auto-fill-month1").innerHTML,
        oyear: document.getElementById("auto-fill-year1").innerHTML,

        adults: document.getElementsByName("auto-fill-adults")[0].innerHTML,
        children: document.getElementsByName("auto-fill-children")[0].innerHTML,
      };

      // Prepare email template parameters
      var templateParamsForYou = {
        to_name: "Bhagya",
        from_name: formData.firstName + " " + formData.lastName,
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
        oyear: formData.oyear,
        adults1: formData.adults,
        children1: formData.children,
      };

      var templateParamsForCustomer = {
        to_name: "Bhagya",
        from_name: formData.firstName + " " + formData.lastName,
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
        oyear: formData.oyear,
        adults1: formData.adults,
        children1: formData.children,
      };

      // Send both emails in parallel
      Promise.all([
        emailjs.send("service_66vfecl", "template_l3sruvd", templateParamsForYou),
        emailjs.send("service_66vfecl", "template_9wwe9hr", templateParamsForCustomer)
      ])
      .then(function (responses) {
        console.log("Both emails sent successfully:", responses);

        // Email sent successfully, trigger success popup
        $(".popup").removeClass("opened");
        $("#contact-us-success").addClass("opened");

        // Clear form fields after sending emails
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
        document.getElementById("note").value = "";
        document.getElementById("package").value = "";
      })
      .catch(function (errors) {
        console.error("One or both emails failed to send:", errors);
        alert("Booking failed. Please try again later.");
      });
    });
  });

