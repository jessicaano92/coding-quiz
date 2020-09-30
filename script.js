

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and 
// I am presented with a question     <<---how does this happen?!?!?>>
// WHEN I answer a question correctly    <<HOW WILL THE CODE KNOW WHICH ANSWER IS CORRECT?>>
// THEN I am presented with another question   <<--FUNCTION>>
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0    <<--FUNCTION AGAIN  >>
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



// need to display a code quiz that prompts the user to "start quiz"
// need to input a timer 

// present question using a function
// user answers it correctly
// then present user with another question using a function
// user answers incorrectly
// then subtract time from the clock
// when all questions are answered or timer reaches 0 add in another function
// then the game ends 
// then prompt user to save initials and score 

//for quiz state
var questionIndex = 0
var time = questions.length * 30;
var timerId;


var questions = [{ title: "Commonly used data types don't include:", 
                   choices: ["strings", "alerts", "booleans", "numbers"],
                   answer: "alerts"
                 },
                 

                 { title: "The condition in an if/else statement is enclosed within ___?",
                   choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
                   answer: "parentheses"
                },


                { title: "Arrays in Javascript can be used to store __?",
                  choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
                  answer: "all of the above"
                },


                { title: "A very useful tool used during development and debugging for printing content to the debugger is:",
                  choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
                  answer: "console.log"
                }

                
                ];


//variables for the DOM elements
var beginBtn = document.getElementById("begin");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var timerEl = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var questionsEl = document.getElementById("questions");



function beginQuiz(){
   var startScreenEl = document.getElementById("start-screen");
   startScreenEl.setAttribute("class", "hide");
   questionsEl.removeAttribute("class");

   timerId = setInterval(clockTick, 1000);
   timerEl.textContent = time;

   startQuestion();
  }
  

  function startQuestion () {

  }
  
  
  
 

