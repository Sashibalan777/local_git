// Get the button element by its ID
const colorButton = document.getElementById('colorButton');

// Array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F7F7F7', '#FFC300', '#FF33A1'];

// Function to change the background color
function changeBackgroundColor() {
    // Get a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Add event listener to the button to trigger the changeBackgroundColor function
colorButton.addEventListener('click', changeBackgroundColor);
console.log("fnfaowdsnf")
