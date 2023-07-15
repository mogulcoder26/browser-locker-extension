document.addEventListener("DOMContentLoaded", function () {
  const setTimeBtn = document.getElementById("setTimeBtn");
  const passwordInput = document.getElementById("passwordInput");
  const statusMessage = document.getElementById("statusMessage");

  setTimeBtn.addEventListener("click", function () {
    setTime();
  });

  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    chrome.storage.sync.set({ password: password });
  });

  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setTime();
    }
  });

  function setTime() {
    const time = prompt("Enter the time in minutes (1, 5, 10, ..., 90):");
    if (time) {
      chrome.storage.sync.set({ time: parseInt(time) }, function () {
        statusMessage.textContent = "Time set successfully!";
        statusMessage.style.color = "black";
        statusMessage.style.display = "block"; // Make the status message visible
      });
    }
  }
});
