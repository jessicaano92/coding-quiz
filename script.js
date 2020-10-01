





//question array
var questions = [{title: "Commonly used data types don't include:", 
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


var currQuestionIdx = 0;
var time = questions.length * 30;
var timerId;

//variables for the DOM elements
var beginBtn = document.getElementById("begin");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var timerEl = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var questionsEl = document.getElementById("questions");


function beginQuiz() {                     
   var startScreenEl = document.getElementById("start screen");

     startScreenEl.setAttribute("class", "hide");     //hide start screen

      questionsEl.removeAttribute("class");

        timerId = setInterval(clockTick, 2000);     //start of timer

      timerEl.textContent = time;   //showing the start of the time

    
          
   }  startQuestion();  


   function startQuestion() {
    var currQuestion = questions[currQuestionIdx];  //current question from the array 
      var titleEl = document.getElementById("question title");
        titleEl.textContent = currQuestion.title;

    choicesEl.innerHTML = ""; //clear old questions

              //loop through choices here
    currQuestion.choices.forEach(function (choice) {
        var optionNode = document.createElement("button");
          optionNode.setAttribute("class", "choice");
           optionNode.setAttribute("value", choice);
            optionNode.textContent = choice;
                //
            optionNode.onClick = questionClick;
          choicesEl.appendChild(optionNode);

    });
 }
   

   function questionClick() {          
    if (this.value !== questions[currQuestionIdx].answer) {
      time -= 10;     //time gets penalized
      
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;    //to display new time
      feedbackEl.textContent = "Right!";
  
    } else{
      feedbackEl.textContent = "Wrong!";
    }
              //will flash right or wrong on page for user to see
    feedbackEl.setAttribute("class", "feedback");
      setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
        
      }, 2000);
  
      currQuestionIdx++;

    if (currQuestionIdx === questions.length) {
          endQuiz ();

    } else {
      startQuestion();
    }
   }
   
   function endQuiz() {
     clearInterval (timerId);  //timer stopped
        var endScreenEl = document.getElementById("end screen");  
          endScreenEl.removeAttribute("class");
            var finalScoreEl = document.getElementById("final score");
            finalScoreEl.textContent = time;

            questionsEl.setAttribute("class", "hide");

      }

      function clockTick() {     //supposed to make the timer run
        time--;
        timerEl.textContent = time;

        if (time <= 0) {
          endQuiz();
        }
      }




      //player clicks button to begin quiz
      beginBtn.onclick = beginQuiz;

      
      
      


  

     

          

