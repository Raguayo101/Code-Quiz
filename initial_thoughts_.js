var startButton = document.querySelector("#start-btn");
var showQuestion = document.querySelector(".hide");
var changeQuestion = document.querySelector(".question");
var timeEl = document.querySelector(".time");
var answerOutput = document.querySelector("#outPut");
var showQutput = document.querySelector(".hidden");

// selecting the buttons 
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var allAnswers = document.querySelectorAll("button");
console.log(allAnswers);

// selection the buttons 
startButton.addEventListener("click", startGame)
answer1.addEventListener("click", questionOne)

// this makes the start button hide and make the answers pop into the page 
function startGame() {
    startButton.setAttribute('style', 'display:none');
    console.log(startButton)
    showQuestion.setAttribute('style', 'display:inline');
    changeQuestion.textContent = "What datatype assigns true or fasle to a value?"
   
//   this sets the timer once the game starts 
    var timeLeft = 5;
    
    function setTime() { 
        var timerInterval = setInterval(function() {
            timeLeft--;
            timeEl.textContent = timeLeft + " until quiz is over.";
        
            if(timeLeft === 0) {
              
                clearInterval(timerInterval);
              
            }
        
          }, 1000);
        }
    
    setTime();    

}

// when button is pressed, answer is correct 
function questionOne() {
    changeQuestion.textContent = "Please let this work!"
    showQutput.setAttribute('style', 'display:inline');
    answerOutput.textContent = "correct!"

    if(answer2.addEventListener("click", function(){
        answerOutput.textContent = "wrong!"
    })){
        
    }

}

// function storeScore(){
//     var storedvalues = {
//         correctAnswers: correctAnswer.value,
//         inputvalues: input.value,
//         wrongAnswers: wrongAnswer.value
//       };
//     console.log(input);
//     localStorage.setItem("int", JSON.stringify(storedvalues));
//     console.log(localStorage.setItem("int", JSON.stringify(input.value)));
// }

// function renderScore(){
//     var storedInput = JSON.parse(localStorage.getItem("int"));
//     console.log(storedInput);

//     document.getElementById("saved-int").innerHTML = storedInput.inputvalues
//     document.getElementById("saved-score").innerHTML =  storedInput.correctAnswers
    
// }

// submitBtn.addEventListener('click',function(event){
//     event.preventDefault();
//     storeScore();
//     renderScore();
// })