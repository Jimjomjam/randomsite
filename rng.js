const generateBtn = document.querySelector(".generation");
let lowNum = document.querySelector(".lownumber").value;
let highNum = document.querySelector(".highnumber").value;

generateBtn.addEventListener("click", function() {
  
  let generated = Math.floor(Math.random() * highNum  - lowNum);
  alert(generated);
  
//alert('Thank you for checking if this works! Unfortunetally, it is not.');
});
