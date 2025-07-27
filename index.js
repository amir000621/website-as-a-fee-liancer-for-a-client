// Get elements
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

// Show pop-up
openPopup.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Hide pop-up
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Hide when clicking outside the pop-up
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Handle form submission
document.getElementById('popupForm').addEventListener('submit', function(event) {
   // event.preventDefault(); // Prevent form from refreshing the page->i remove this line bcz this line make issue in submission
    alert("Form Submitted!"); // You can handle the form data here
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

//_______for footer____copyright line
// Automatically update the year
document.getElementById('year').textContent = new Date().getFullYear();


// Get the scroll up button 
const topButton = document.getElementById("topButton");

// Show the button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

// Scroll smoothly to the top when clicked
topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function validatePhone(input) {
    const phone = input.value;
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      input.focus();
    }
  }




