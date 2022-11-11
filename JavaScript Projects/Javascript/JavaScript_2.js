function validateForm() {
    let x = document.forms["contactForm"]["firstName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }