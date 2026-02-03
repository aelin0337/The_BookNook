import { apiRequest } from "./api.js";

const form = document.getElementById("registerForm");
const alertBox = document.getElementById("alert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  alertBox.classList.add("d-none");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    showError("Please fill all fields");
    return;
  }

  try {
    await apiRequest("/users/register", "POST", {
      name,
      email,
      password,
    });

    alert("Account created successfully 🎉");
    window.location.href = "login.html";
  } catch (e) {
    showError(e.message || "Registration failed");
  }
});

function showError(message) {
  alertBox.textContent = message;
  alertBox.classList.remove("d-none");
}
