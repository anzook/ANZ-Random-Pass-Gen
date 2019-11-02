var passSpecial = document.querySelector("#pass-special");
var passLength = document.querySelector("#pass-length");
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var passPrint = document.querySelector("#password");


var length = 8;
var mode = "standard";

const upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passBank = upperLet + lowerLet + numbers;         //defines initial set of possible charachters

var password;


passSpecial.addEventListener("click", function () {
  if (mode === "standard") {
    mode = "special";
  }
  else {
    mode = "standard";
  }
});

generate.addEventListener("click", function () {
  length = passLength.value.trim();
  length = parseInt(length);
  // validate the fields
  if (!Number.isNaN(length)) {

    if (length < 8 || length > 128) {
      alert("Length must be between 8 and 128");
      return;
    }
    createPass();
  } else {

    alert("Length must be an integer");
  }
});

function createPass() {           //creates random pass
  if (mode === "special") {
    var passBank = upperLet + lowerLet + numbers;
    password = passBank.charAt(Math.floor(Math.random() * passBank.length));
    var passBank = upperLet + lowerLet + numbers + specials;            //I just don't like when passwords start with a special charachter

    for (let i = 0; i < (length - 1); i++) {
      password += passBank.charAt(Math.floor(Math.random() * passBank.length));

    }
    console.log(password);
    passPrint.textContent = password;
  } else {
    var passBank = upperLet + lowerLet + numbers;

    password = passBank.charAt(Math.floor(Math.random() * passBank.length));

    for (let i = 0; i < (length - 1); i++) {
      password += passBank.charAt(Math.floor(Math.random() * passBank.length));

    }
    console.log(password);
    passPrint.textContent = password;
  }

}

copy.addEventListener("click", function () {  //user copy function
  passPrint.select();
  document.execCommand("copy");

})