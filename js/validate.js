function validateLogin() {
  const user = document.getElementById("loginUsername").value;
  const pass = document.getElementById("loginPassword").value;
  if (user.length < 4 || pass.length < 6) {
    alert("Invalid login credentials.");
    return false;
  }
  return true;
}

function validateRegister() {
  const user = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPassword").value;
  if (!email.includes("@") || user.length < 4 || pass.length < 6) {
    alert("Invalid registration data.");
    return false;
  }
  return true;
}