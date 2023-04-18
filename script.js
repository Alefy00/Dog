const generateBtn = document.getElementById("generate-btn");
const dogImage = document.getElementById("dog-image");

generateBtn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        dogImage.src = response.message;
        dogImage.style.display = "block";
    };
    xhr.send();
});
