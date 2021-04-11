var startButton = document.querySelector("#start-btn");
var showQuestion = document.querySelector(".hide");
var changeQuestion = document.querySelector(".question");
var timeEl = document.querySelector(".time");
var answerOutput = document.querySelector("#outPut");
var showQutput = document.querySelector(".hidden");

var correctAnswer = 0;
var wrongAnswer = 0;
var showBoard = document.querySelector("#scoreboard");

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var allAnswers = document.querySelectorAll("button");
var submitBtn = document.querySelector("#sub-btn");

// question for the event 
var questions = [
    
    {   question: "What datatype assigns true or fasle to a value?",
        choice: ["Bolean","Number","String","Jack-in-the-box"],  
        answer: "Bolean",
    }, 
    
    {
        question: "The first index of an arry is?",
        choice: ["0","1","2","3"],  
        answer: "0",
               
    },   

    {
        question: "What brings a prompt to the string?",
          choice: ["prompt","alert","confirm","carls jr"],  
          answer: "prompt",
                   
    } 
]


// selection the buttons 
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", setTime)
answer1.addEventListener("click",choice1)
answer2.addEventListener("click",choice2)
answer3.addEventListener("click",choice3)
answer4.addEventListener("click",choice4)



// Makes sure the first question is picked up when the quiz is started 
var questionIndex = 0;

//   this sets the timer once the game starts 
var timeLeft = 61;


// this makes the start button hide and make the answers pop into the page 
function startGame() {
    startButton.setAttribute('style', 'display:none');
    console.log(startButton)
    showQuestion.setAttribute('style', 'display:inline');
      
    newQuestions();

}

// sets timer
function setTime() { 
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " until quiz is over.";
    
        if(timeLeft === 0) {
          
            clearInterval(timerInterval);
          
        }
    
      }, 1000);
    }



// assigns the button with a choice from the object questions. 
function newQuestions() {
    changeQuestion.textContent =  questions[questionIndex].question;
    answer1.textContent =  questions[questionIndex].choice[0];
    answer2.textContent =  questions[questionIndex].choice[1];
    answer3.textContent =  questions[questionIndex].choice[2];
    answer4.textContent = questions[questionIndex].choice[3];
}


// checks if the the first question's answer is equal to the choice the user chooses
function checkAnswer(answer){

    if(questions[questionIndex].answer === questions[questionIndex].choice[answer]){
        console.log(answer);
        answerOutput.textContent = "Correct!"
        showQutput.setAttribute('style', 'display:inline');
        correctAnswer++;
    }
    else {
        console.log(answer);
        answerOutput.textContent = "Wrong!"
        showQutput.setAttribute('style', 'display:inline');
        timeLeft -= 15
        wrongAnswer++;
    }    
    
    // allows for a new question to be selection if the index is less than the length of the array
    questionIndex++
    if(questionIndex < questions.length){
        newQuestions();
    }

    else{
        timeEl.setAttribute('style', 'display: none');
        gameEnd();
    }
}

// when game ends, game shows scores
function gameEnd(){
    var rightAnswer = document.querySelector("#score");
    var showForm = document.querySelector("#formHide");

    showForm.setAttribute('style', 'display:inline');
    showQutput.setAttribute('style', 'display:none');
    showQuestion.setAttribute('style', 'display:none');
    changeQuestion.setAttribute('style', 'display:none');
    

    rightAnswer.textContent = `Correct answers: ${correctAnswer}  Wrong Answers: ${wrongAnswer}`;
}

// savings inital 
function storeScore(){
    var input = document.querySelector("#saveInitials");
    console.log(input);
    localStorage.setItem("int", JSON.stringify(input.value));
    console.log(localStorage.setItem("int", JSON.stringify(input.value)));
}

function renderScore(){
    var storedInput = JSON.parse(localStorage.getItem("int"));
    console.log(storedInput);

    document.getElementById("saved-int").innerHTML = storedInput;
    if (storedInput !== null) {
        document.getElementById("saved-int").innerHTML = storedInput;
        } else {
          return;
        }
}

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    showBoard.setAttribute('style', 'display: inline');
    storeScore();
    renderScore();
    
});


// checks the answer of one of the question against the choice from the array 
function choice1(){checkAnswer(0);}
function choice2(){checkAnswer(1);}
function choice3(){checkAnswer(2);}
function choice4(){checkAnswer(3);}


