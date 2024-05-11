const imageFile = document.querySelector("#imageFile");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const canvas = document.querySelector("canvas");
const generateButton = document.querySelector("#generateButton");
const deleteButton = document.querySelector("#deleteButton");


generateButton.addEventListener("click", () => {
    // Get the selected image
    const imageDataURL = URL.createObjectURL(imageFile.files[0]);
    const image = new Image();
    image.src = imageDataURL;

    // Draw the meme on the canvas
    image.onload = () => {
        renewMemeCanvas(canvas, image, topText.value, bottomText.value);
    };
});

// Event listener for deleting the meme
deleteButton.addEventListener('click', function() {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
});

// Event listener for image file selection
imageFile.addEventListener("change", () => {
    const imageDataURL = URL.createObjectURL(imageFile.files[0]);
    const image = new Image();
    image.src = imageDataURL;
    image.onload = () => {
        renewMemeCanvas(canvas, image, topText.value, bottomText.value);
    };
});

// Event listeners for text inputs
topText.addEventListener("input", () => {
    renewMemeCanvas(canvas, image, topText.value, bottomText.value);
});

bottomText.addEventListener("input", () => {
    renewMemeCanvas(canvas, image, topText.value, bottomText.value);
});

function renewMemeCanvas(canvas, image, topText, bottomText) {
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Draw the image onto the canvas
    context.drawImage(image, 0, 0, width, height);

    // Define font size and offset for text
    const fontSize = width / 20;
    const yOffSet = height / 20;

    // Set text properties
    context.strokeStyle = "black";
    context.lineWidth = fontSize / 5;
    context.font = `${fontSize}px Arial`;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.lineJoin = "round";

    // Draw top text
    context.textBaseline = "top";
    context.strokeText(topText, width / 2, yOffSet);
    context.fillText(topText, width / 2, yOffSet);

    // Draw bottom text
    context.textBaseline = "bottom";
    context.strokeText(bottomText, width / 2, height - yOffSet);
    context.fillText(bottomText, width / 2, height - yOffSet);
}
