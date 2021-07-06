const generateBtn = document.querySelector(".generation");
    
    generateBtn.addEventListener("click", function() {
    function random(min, max) {
    // Random number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    let lowNum = Number(document.querySelector("#lownumber").value);
    let highNum = Number(document.querySelector("#highnumber").value);
    let generated = random(lowNum, highNum) 
    document.getElementById("output").innerHTML = generated;
})
