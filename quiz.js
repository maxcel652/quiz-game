const questions = [
    {
        question:"what is the correct way to declare a Javascript variable?",
        options:["var myVar,","variable myVar,","v myVar,","let var,"],
        correctAnswer:0
    },
    {
        question:"Which built-in method calls a function for each element in the array?",
        options:["while()","loop()","forEach()","None of gthe above"],
        correctAnswer:2
    },
    {
        question:"Which of the following is not a JavaScript data type?",
        options:["String","Number","Boolean","Character"],
        correctAnswer:3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");

function displayQuestion(){
    //get the current question object
    const currentQuestion = questions[currentQuestionIndex];

    //display question index
    questionElement.innerHTML = currentQuestion.question;

    //clear any existing options
    optionsElement.innerHTML = "";

    //loop through the options and create a radio button for each
    currentQuestion.options.forEach((option, index) => {
        const optionElement= document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerHTML = `
            <input type = "radio" name = "option" value = "${index}" id = "option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
        


    });
}
function checkAnswer(){
    //Get the selected answer
    const selectedOption = document.querySelector(`input[name="option"]:checked`);

    //if no answer is selected,return
    if(!selectedOption)return;
    const answer = parseInt(selectedOption.value);
    //check if the answer is correct
    if(answer===questions[currentQuestionIndex].correctAnswer){
        score++
    }
    //move to the next question
    currentQuestionIndex++;
    //if there are more questions,display the next one, otherwise show the score
    if(currentQuestionIndex < questions.length) {
        displayQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    questionElement.innerHTML = "Quiz Complete";
    optionsElement.innerHTML = "";
    submitBtn.style.display = "none";
    scoreElement.innerHTML = `Your final score is ${score} out of ${questions.length}`;
}

submitBtn.addEventListener("click",checkAnswer);
displayQuestion()