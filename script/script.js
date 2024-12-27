// JavaScript to handle tab switching
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    const texts = document.querySelectorAll(".text");
  
    options.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options and texts
        options.forEach((opt) => opt.classList.remove("is--active"));
        texts.forEach((text) => text.classList.remove("is--visible"));
  
        // Add active class to the clicked option
        option.classList.add("is--active");
  
        // Show the corresponding text
        const targetClass = option.classList[1]; // Second class identifies the text
        const targetText = document.querySelector(`.text.${targetClass}`);
        if (targetText) {
          targetText.classList.add("is--visible");
        }
      });
    });
  });
  