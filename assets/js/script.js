// questions object arrey - 10 objects
var questionList = [
    {
        "question": "What is the effect of 'appendTo' command in jquery",
        "a": "it appends a new 'div' to the main parent",
        "b": "it is simmilar to 'append' but reverses the order of appending",
        "c": "it appends a new 'background' to the 'body' element",
        "d": "it adds a css functionality to an object",
        "correct": "b",
        "userAnswer": null
    },

    {
        "question": "Is 'Javascript' a new word for 'Java'",
        "a": "Yes it is the same language , just abbriged for cell phones",
        "b": "'Javascript' is the newer version of 'Java'",
        "c": "first was 'javascript' which was improved later to 'Java'",
        "d": "They are different languages, despite 'Java' appearing in both names",
        "correct": "d",
        "userAnswer": null
    },

    {
        "question": "How can I set same margin on all sides af an element ",
        "a": "Using the same parameter 4 times 'margin 10px 10px 10px 10px'",
        "b": "Using te same two parameters: 'margin:10px 10px'",
        "c": "using one parameter only'margin:10px'",
        "d": "all of the above",
        "correct": "d",
        "userAnswer": null
    },

    {
        "question": "How do I check is a 'for loop' woking",
        "a": "set a 'cosole.log' to see the output in the dev tools ",
        "b": "trace the loop very carefully",
        "c": "nest it in a 'while loop' to double proof it",
        "d": "restart the computer",
        "correct": "a",
        "userAnswer": null
    },


    {
        "question": "How do I fix my mic",
        "a": "toggle the mic switch",
        "b": "check the audio setting in windows",
        "c": "change the mic",
        "d": "restart the computer",
        "correct": "d",
        "userAnswer": null
    },

    {
        "question": "which one is true about variables",
        "a": "It can be two words separated by a space",
        "b": "It is recomended that it can start with a Capital",
        "c": "It is a good practice to begin a variable name with a number",
        "d": "It can hold a String value",
        'correct': "d",
        "userAnswer": null
    },
    {
        "question": "which one is not a semanic tag",
        "a": "a 'section' tag",
        "b": " a 'header' tag ",
        "c": "a 'div' tag ",
        "d": "an 'aside' tag",
        "correct": "c",
        "userAnswer": null

    },
    {
        "question": "why it is agood practice to put the  'java script handler' after the HTML code?",
        "a": "it looks better",
        "b": "this gives time for the HTML code to load before JS starts ",
        "c": "it ia a cleaner code practice to pu the handler just before the closing 'body' tag",
        "d": "the script will crash the page if loads first",
        "correct": "b",
        "userAnswer": null

    },
    {
        "question": "How do not fix my wireless mouse",
        "a": "Take out und reinsert the wireless dongle",
        "b": "switch off the buetooth transmission on the computer",
        "c": "change the battery in the mouse ",
        "d": "restart the computer",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "How do connect a javascript script to an HTML file",
        "a": "by a link in the head section of the HTML file with the word 'defer'",
        "b": "by a link at the end of the 'body' segment of the HTML file",
        "c": "both 'a' and 'b' ",
        "d": "no need for a link , they have to be placed in the same folder to integrate correctly",
        "correct": "c",
        "userAnswer": null
    }
];

// setting of most of the glbal variables
var totalSeconds = 200;
var secondsElapsed = 0;
var secondsRemaining = totalSeconds;
var minutesRemaining = Math.floor(secondsRemaining / 60);
var secondsLeft = totalSeconds;
var currentQuestion = 0;
var interval;

var currentQuestion = 0;
var correctQuestions = 0;

var questionTag = document.body.querySelector("#question")
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var questionId;
var showQuestion = document.body.querySelector("#question-status");

var showTimer = document.body.querySelector("#timer-status");
var submitFm = document.createElement("submit");
var secondsElapsed = 0;
var secondsLeft = totalSeconds;
var score = document.body.querySelector("#score");
var interval;

// function when a button is clicked

function buttonHandler(event) {
    if (currentQuestion < 10) {
        var button = event.target;
        var userAnswer = button.getAttribute("data-answer");
        showQuestion.textContent = " " + (currentQuestion + 1) + "     ";
        var questionId = parseInt(button.getAttribute("data-question"));
        questionList[questionId]["userAnswer"] = userAnswer;


        //conditional check  if the  answer is correct    
        if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
            score.textContent = "You got it correct";
            currentQuestion++;
            correctQuestions++;
            console.log(correctQuestions);
            setTimeout(function () {
                initializeQuestion();
                score.textContent = "";
            }, 1200);
        }
        else {
            score.textContent = "You got it wrong";
            secondsElapsed = secondsElapsed + 10;
            currentQuestion++;
            secondsElapsed = secondsElapsed + 20;
            setTimeout(function () {
                initializeQuestion();
                score.textContent = "";
            }, 1200);

        }
    }
    else {
        writeScore();
    }
};

// function for initilizing each question
function initializeQuestion() {
    if (currentQuestion < 10) {
        var wholeObj = questionList[currentQuestion];

        var question = wholeObj.question;

        questionTag.textContent = question;
        questionTag.setAttribute("data-question", currentQuestion);

        answerTagA.textContent = wholeObj.a;
        answerTagB.textContent = wholeObj.b;
        answerTagC.textContent = wholeObj.c;
        answerTagD.textContent = wholeObj.d;

        buttonA.setAttribute("data-question", currentQuestion);
        buttonB.setAttribute("data-question", currentQuestion);
        buttonC.setAttribute("data-question", currentQuestion);
        buttonD.setAttribute("data-question", currentQuestion);

    }
    else {
        writeScore();
    }
};

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

initializeQuestion();


// function for the timer
function startTimer() {
    if (secondsRemaining > 0) {
        interval = setInterval(function () {

            renderTime();
        }, 1000);

    }
    else {

        alert("you are out of time. End of Quiz!");
        secondsRemaining = 0;
        writeScore();
    }

}
startTimer();

// global variables needed for the score and user initials
var initials = "";
var scoreDispaly = document.body.querySelector("#your-score");
var initials = document.body.querySelector("#initials");



// function to display the remaining time, and to prevent timer to continue after 0 , or 
// after the 10 questions 
function renderTime() {
    if (secondsRemaining > 0 && currentQuestion != 10) {
        secondsElapsed = secondsElapsed + 1;

        secondsRemaining = totalSeconds - secondsElapsed;
        minutesRemaining = Math.floor(secondsRemaining / 60);
        secondsLeft = secondsRemaining % 60;

        showTimer.textContent = " " + minutesRemaining + " : " + secondsLeft + "     ";
    }
    else {
        writeScore();

    }
}



// function to save the initials and score to the local storrage
function saveData() {


    var user = {
        initials: inputIn.value.trim(),
        score: score1,
    }

    //-validation
    if (initials === "") {
        displayMessage.textContent = ("error", "initials cannot be blank");
    } else {
        displayMessage.textContent = ("success", "Your score is saved successfully");
    }

    localStorage.setItem("user", user);
    // set new submission

    localStorage.setItem("user", user);


};

//global varables for the new DOM elements
var inputInForm = document.createElement("form");
var inputIn = document.createElement("INPUT");
var inputSubmit = document.createElement("INPUT");
var displayMessage = document.createElement("div");
var score1;

// eventlistener for the submit button

inputSubmit.addEventListener("click", function (event) {

    event.preventDefault()
    saveData()
});


// a variable to ensure the writeScore function will run only once per test.
var checking;




// this part creates the HTML elements and attaches to the index.html file to allow the submission of USER initials
function writeScore() {
    if (checking === undefined) {
        inputIn.setAttribute("type", "text");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("id", "form-submit");
        initials.appendChild(inputInForm);
        inputInForm.appendChild(inputIn);
        inputInForm.appendChild(displayMessage);
        inputIn.setAttribute("placeholder", "your initials here");
        // inputInForm.appendChild(submitFm);
        inputInForm.appendChild(inputSubmit);
        console.log(inputIn.value);
        checking = 1;
    }
    else {
        for (var i = 0; i < 2; i++) {
            interval = setInterval(function () {
            }, 6000);
        }
    }

    //test end info and score messages

    secondsRemaining = 0;
    score1 = correctQuestions * 5;
    scoreDispaly.textContent = "You scored " + score1 + "  points!" + "Please enter your initials below!";
    showTimer.textContent = " The Quiz has ended , no  ";


};