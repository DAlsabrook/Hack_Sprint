//scripts for any and all our buttons

  // Toggle show password
  function ShowPassword() {
    x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
