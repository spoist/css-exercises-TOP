function add7(){
  let number = document.getElementById("addnum").value;  
  console.log(`${number} + 7 is ${parseInt(number)+7}`);
}

function multiply(){
    let firstnum = document.getElementById("addnum").value;
    let secondnum = document.getElementById("second").value;
    console.log(`${firstnum} * ${secondnum} is ${parseInt(firstnum*secondnum)}`);
}

function capitalize(){
    let toConvert = document.getElementById("capital").value;
    let firstLetter = toConvert.charAt(0);
    let convertedToUpper = firstLetter.toUpperCase(0);
    let restOfText = toConvert.slice(1);
    console.log(`${convertedToUpper}${restOfText}`);
}