const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("foodForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const request = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    requestType: document.getElementById("requestType").value,
    details: document.getElementById("details").value.trim(),
    submittedAt: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem("malharFoodEnquiries") || "[]");
  existing.push(request);
  localStorage.setItem("malharFoodEnquiries", JSON.stringify(existing));

  confirmation.textContent =
    `Thank you, ${request.name}. Your enquiry has been recorded on this device. ` +
    `Please note that all requests are subject to confirmation.`;
  confirmation.classList.add("show");
  form.reset();
});
