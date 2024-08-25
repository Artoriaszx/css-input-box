function checkColor() {
    let theBox = document.getElementById("box");
    let elementText = document.getElementById('element').value;
    let inputText = document.getElementById('input').value;

    theBox.style.cssText = elementText + ": " + inputText + ";";

    console.log(theBox.style);
}