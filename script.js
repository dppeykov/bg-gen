var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient")
var btn = document.getElementById("random");
var randomlyGen = document.getElementById("random-css");

colorCur1 = color1.value;
colorCur2 = color2.value;
setGradient();


function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";  //textContent - adds a text content
}

color1.addEventListener("input", setGradient);    //we could do this with oninput="setGradient" in the properties of the html element
color2.addEventListener("input", setGradient);    //it is better to do it in JS - separation of concerns

function generateRandomColors() {
    var genColor1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; //generates random hue value
    var genColor2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; //generates random hue value

    return [genColor1, genColor2];
}

btn.addEventListener("click", function () {

    body.style.background = "linear-gradient(to right, "
        + generateRandomColors()[0]
        + ", "
        + generateRandomColors()[1]
        + ")";

    randomlyGen.textContent = body.style.background + ";";  //textContent - adds a text content

});


