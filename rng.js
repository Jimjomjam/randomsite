const generateBtn = document.querySelector(".generation");

generateBtn.addEventListener("click", function() {
    let lowNum = document.querySelector("#lownumber").value;
    let highNum = document.querySelector("#highnumber").value;
    let generated = Math.floor(Math.random() * highNum  - lowNum);
    document.getElementById("output").innerHTML = generated;
});
