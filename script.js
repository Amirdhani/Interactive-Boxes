console.log("BOGO page loaded");

document.addEventListener("DOMContentLoaded", function () {
  const allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach((box) => {
    const radio = box.querySelector("input[type='radio']");
    const extra = box.querySelector(".extra-content");

    if (radio) {
      radio.addEventListener("change", function () {
        // Remove highlight and hide content from all boxes
        allBoxes.forEach((b) => {
          b.classList.remove("selected-box");
          const extraDiv = b.querySelector(".extra-content");
          if (extraDiv) extraDiv.classList.add("hidden");
        });

        // Add highlight and show content for current box
        box.classList.add("selected-box");
        if (extra) extra.classList.remove("hidden");
      });
    }
  });
});
