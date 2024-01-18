// Loader
window.addEventListener("load", () => {
  const lw = document.querySelector(".loaderWrapper");
  lw.classList.add("fade");
});

function checkSignin() {
  var lem = document.getElementById("lem").value;
  var lpass = document.getElementById("lpass").value;
  var lme = document.getElementById("lme");
  var lpe = document.getElementById("lpe");

  lme.innerHTML = "&nbsp;";
  lpe.innerHTML = "&nbsp;";

  let flag = true;

  if (lem == "") {
    lme.textContent = "Please enter email";
    flag = false;
  } else if (!validateEmail(lem)) {
    lme.textContent = "Enter valid email";
    flag = false;
  }
  if (lpass == "") {
    lpe.textContent = "Please enter password";
    flag = false;
  }

  if (flag) {
    if (
      lem == sessionStorage.getItem("storedEmail") &&
      lpass == sessionStorage.getItem("storedPass")
    ) {
      alert("Login Successful!");
      open("./index.html", "_parent");
    } else {
      lpe.innerHTML = "Invalid Email or Password";
    }
  }

  event.preventDefault();
}

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

function toggle() {
  var signin = document.getElementById("signin");
  var signup = document.getElementById("signup");

  if (signin.style.display == "none") {
    signin.style.display = "flex";
    signup.style.display = "none";
  } else {
    signup.style.display = "flex";
    signin.style.display = "none";
  }
}

function checkSignup() {
  var rn = document.getElementById("rn").value;
  var rem = document.getElementById("rem").value;
  var rpass = document.getElementById("rpass").value;
  var rcpass = document.getElementById("rcpass").value;

  var rne = document.getElementById("rne");
  var rme = document.getElementById("rme");
  var rpe = document.getElementById("rpe");
  var rcpe = document.getElementById("rcpe");

  rne.innerHTML = "&nbsp;";
  rme.innerHTML = "&nbsp;";
  rpe.innerHTML = "&nbsp;";
  rcpe.innerHTML = "&nbsp;";

  let flag = true;

  if (rn == "") {
    rne.textContent = "Please enter name";
    flag = false;
  }
  if (rem == "") {
    rme.textContent = "Please enter email";
    flag = false;
  } else if (!validateEmail(rem)) {
    rme.textContent = "Enter valid email";
    flag = false;
  }
  if (rpass == "") {
    rpe.textContent = "Please enter password";
    flag = false;
  }
  if (rcpass == "") {
    rcpe.textContent = "Please confirm your password";
    flag = false;
  } else if (rpass != rcpass) {
    rcpe.textContent = "Passwords are not matching";
    flag = false;
  }

  event.preventDefault();

  if (flag) {
    sessionStorage.setItem("storedName", rn);
    sessionStorage.setItem("storedEmail", rem);
    sessionStorage.setItem("storedPass", rpass);
    alert("Sign Up Successful!");
    window.location.reload();
  }
}
