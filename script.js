const container = document.querySelector(".testimonial-container");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

const scrollAmount =
  container.querySelector(".testimonial-card").offsetWidth + 20;

rightArrow.addEventListener("click", () => {
  container.scrollLeft += scrollAmount;
  toggleArrows();
});

leftArrow.addEventListener("click", () => {
  container.scrollLeft -= scrollAmount;
  toggleArrows();
});

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  const scrollStep = event.deltaY > 0 ? scrollAmount : -scrollAmount;
  container.scrollLeft += scrollStep;
  toggleArrows();
});

function toggleArrows() {
  leftArrow.disabled = container.scrollLeft <= 0;
  rightArrow.disabled =
    container.scrollLeft >= container.scrollWidth - container.offsetWidth;
}

toggleArrows();

/* product display */

// Color selection functionality
document.querySelectorAll(".color-circle").forEach((circle) => {
  circle.addEventListener("click", function () {
    document
      .querySelectorAll(".color-circle")
      .forEach((c) => c.classList.remove("selected"));
    this.classList.add("selected");
    console.log("Selected color:", this.getAttribute("data-color"));
  });
});

// Size selection functionality
document.querySelectorAll(".size-option").forEach((option) => {
  option.addEventListener("click", function () {
    document
      .querySelectorAll(".size-option")
      .forEach((opt) => opt.classList.remove("active"));
    this.classList.add("active");
    console.log("Selected size:", this.getAttribute("data-size"));
  });
});

// Quantity selection functionality
const quantityInput = document.getElementById("quantity-input");
document.getElementById("decrease-btn").addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});
document.getElementById("increase-btn").addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

alert("Hello");
