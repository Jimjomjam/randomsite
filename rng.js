const generateBtn = document.querySelector(".generation");
    
    generateBtn.addEventListener("click", function() {
    function random(lowNum, highNum) {
    // Random number between min and max
        return Math.floor(Math.random() * (highNum - lowNum + 1) - highNum)
    }
    let lowNum = document.querySelector("#lownumber").value;
    let highNum = document.querySelector("#highnumber").value;
    let generated = random(lowNum, highNum) 
    document.getElementById("output").innerHTML = generated;
})

