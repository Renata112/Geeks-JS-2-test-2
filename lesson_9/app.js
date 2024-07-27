console.log("Test");

let maxLimit=100;
function calculateSymbols() {
const textarea = document.getElementById("symbolsCalculator");
const wordsQuantity=document.querySelector(".wordsQuantity");
const remainingSymbols=document.querySelector(".remainingSymbols");

textarea.addEventListener('input',function(){
    let writtenText = textarea.value.length;
    wordsQuantity.textContent=`Overall: ${writtenText}`;
    remainingSymbols.textContent= `Remained:${maxLimit-writtenText}`;
});
}
calculateSymbols();