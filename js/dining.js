const hoursBtn = document.getElementById("hoursBtn");
const hoursText = document.getElementById("hoursText");

if (hoursBtn && hoursText) {
  hoursBtn.addEventListener("click", () => {
    hoursText.textContent = "Dining Hall Hours: Monday–Friday, 7 AM – 8 PM";
  });
}