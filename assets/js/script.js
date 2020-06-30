
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
        "a": "set a 'cosole.log' to see the uotput in the dev tools ",
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

// var userAnswerInput = " ";
var currentQuestion = 0;

var questionTag = document.body.querySelector("#question")
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var showQuestion = document.body.querySelector("#question-status");
var score = document.body.querySelector("#score");
 var end="ended";

// dataQuestionA.textContent = (questionList[curentQuestion].a);
// dataQuestionB.textContent = (questionList[curentQuestion].b);
// dataQuestionC.textContent = (questionList[curentQuestion].c);
// dataQuestionD.textContent = (questionList[curentQuestion].d);

var currentQuestion = 0;



     
    console.log(currentQuestion);
    function buttonHandler(event) {
        showQuestion.textContent = " " + (currentQuestion + 1) + "     ";
        var button = event.target;
        var userAnswer = button.getAttribute("data-answer");
        var questionId = parseInt(button.getAttribute("data-question"));
        console.log(button);
        console.log(userAnswer);
        console.log(questionId);
        questionList[questionId]["userAnswer"] = userAnswer;
        if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
            score.textContent = "You got it correct";
            currentQuestion++;
            setTimeout(function () {
                initializeQuestion();
                score.textContent = "";
            }, 2000);
            
        }
        else {
            
            score.textContent = "You got it wrong";
            currentQuestion++;
            
            
            setTimeout(function () {
                initializeQuestion();
                score.textContent = "";
            }, 2000);
            
        }
    }
    


buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);


function initializeQuestion() {
    console.log(questionList[currentQuestion]);
    var wholeObj = questionList[currentQuestion];
    if (wholeObj === "undefined"){
        return (end);
        console.log(end + "   end questions");
    }
    var question = wholeObj.question;
    console.log(question);
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
    
    
};




initializeQuestion();
// set score