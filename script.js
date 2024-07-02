const colourBtn = document.getElementById("btn-colour");

colourBtn.addEventListener("click", () => {
    colourBtn.style.background = getRandomColour();
});

function getRandomColour(){
    var makeColorCode = '0123456789ABCDEF';
      var code = '#';
      for (var count = 0; count < 6; count++) {
         code =code+ makeColorCode[Math.floor(Math.random() * 16)];
      }
      return code;
}
const greetingBox = document.getElementById("greeting");
greetingBox.addEventListener("click", () =>{
    getGreeting();
});
function getGreeting(){
const currentTime = new Date();
const currentHour = currentTime.getHours();

if(currentHour < 12){
     alert("Good Morning!");
}
else if(currentHour < 18){
     alert("Good Afternoon!");
}
else{
     alert("Good Night!");
}
}

const calculateBtn = document.getElementById("sum-btn");
const num1Input = document.getElementById("1st");
const num2Input = document.getElementById("2nd");
const resultBox = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
     const sum = num1 + num2;
     resultBox.innerHTML = `result: ${sum}`;
     resultBox.classList.remove("hidden");
});




