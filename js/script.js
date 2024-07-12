function sendMail() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    swal({
      title: "Oops!",
      text: "All fields are required.",
      icon: "warning",
    });
    return;
  }

  // Email format validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    swal({
      title: "Oops!",
      text: "Please enter a valid email address.",
      icon: "warning",
    });
    return;
  }

  let parms = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send("service_f9uqczv", "template_wwy39ro", parms)
    .then(function(response) {
      swal({
        title: "Good job!",
        text: "Your message has been sent",
        icon: "success",
      });
      document.getElementById("contact-form").reset(); // Reset form after successful submission
    })
    
}
