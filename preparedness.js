document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("preparednessForm");
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (!form || !resultBox || !resultText) {
    console.error("Some elements were not found in the DOM.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const state = form.state?.value || "";
    const disaster = form.disasterType?.value || "";
    const people = form.people?.value || 0;
    const items = Array.from(
      form.querySelectorAll("input[name='items']:checked")
    ).map((checkbox) => checkbox.value);

    // Simple logic to simulate prediction (replace with real API call later)
    let level = "Low";
    const score = items.length + (parseInt(people) > 10 ? 1 : 0);
    if (score >= 4) level = "High";
    else if (score >= 2) level = "Medium";

    resultText.textContent = `Based on your inputs, your preparedness level is: ${level}.`;
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: "smooth" });
  });
});
