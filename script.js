//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentStep = 0;

  // Add event listeners to buttons
  nextButton.addEventListener('click', nextStep);
  prevButton.addEventListener('click', prevStep);

  // Function to handle next button click
  function nextStep() {
    if (currentStep < circles.length - 1) {
      circles[currentStep].classList.remove('active');
      currentStep++;
      circles[currentStep].classList.add('active');
      prevButton.disabled = false;
    }
    if (currentStep === circles.length - 1) {
      nextButton.disabled = true;
    }
  }

  // Function to handle previous button click
  function prevStep() {
    if (currentStep > 0) {
      circles[currentStep].classList.remove('active');
      currentStep--;
      circles[currentStep].classList.add('active');
      nextButton.disabled = false;
    }
    if (currentStep === 0) {
      prevButton.disabled = true;
    }
  }
});
