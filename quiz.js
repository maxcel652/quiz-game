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
    },
    {
        question:"What does 'NaN' stand for in JavaScript?",
        options:["Not a Number","New and Null","No available data","Next array navigation"],
        correctAnswer:0
    },
    {
        question:"How do you write 'Hello World' in an alert box?",
        options:["alertBox('Hello World');","msg('Hello World');","alert('Hello World');","msgBox('Hello World');"],
        correctAnswer:2
    },
    {
        question:"How do you call a function named 'myFunction'?",
        options:["call myFunction();","myFunction();","call function myFunction();","run myFunction();"],
        correctAnswer:1
    },
    {
        question:"How to write an IF statement in JavaScript?",
        options:["if i == 5 then","if (i == 5)","if i = 5","if i = 5 then"],
        correctAnswer:1
    },
    {
        question:"How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options:["if (i != 5)","if i <> 5","if (i not = 5)","if (i =! 5)"],
        correctAnswer:0
    },
    {
        question:"How does a FOR loop start?",
        options:["for (i = 0; i <= 5; i++)","for (i <= 5; i++)","for i = 1 to 5","for (i = 0; i <= 5)"],
        correctAnswer:0
    },
    {
        question:"How can you add a comment in a JavaScript?",
        options:["'This is a comment","","// This is a comment","* This is a comment *"],
        correctAnswer:2
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        options:["*","x","=","-"],
        correctAnswer:2
    },
    {
        question:"What will the following code return: Boolean(10 > 9)?",
        options:["false","NaN","true","undefined"],
        correctAnswer:2
    },
    {
        question:"Is JavaScript a case-sensitive language?",
        options:["No","Yes","Only for variables","Only for functions"],
        correctAnswer:1
    },
    {
        question:"Which symbol is used for comments in JavaScript?",
        options:["//","/* */","","Both // and /* */"],
        correctAnswer:3
    },
    {
        question:"What is the purpose of the 'typeof' operator?",
        options:["To check if a variable is defined","To get the data type of a variable","To convert a variable to a string","To compare two variables"],
        correctAnswer:1
    },
    {
        question:"Which method is used to remove the last element from an array and returns that element?",
        options:["push()","shift()","pop()","unshift()"],
        correctAnswer:2
    },
    {
        question:"Which statement is used to stop a loop?",
        options:["exit","stop","break","quit"],
        correctAnswer:2
    },
    {
        question:"Which method converts a JavaScript object or value to a JSON string?",
        options:["JSON.parse()","JSON.stringify()","JSON.toObject()","JSON.convert()"],
        correctAnswer:1
    },
    {
        question:"What is the correct way to write an array?",
        options:["var colors = (1:'red', 2:'green');","var colors = ['red', 'green'];","var colors = 'red', 'green';","var colors = {1:'red', 2:'green'};"],
        correctAnswer:1
    },
    {
        question:"How do you find the number with the highest value of x and y?",
        options:["ceil(x, y)","max(x, y)","Math.ceil(x, y)","Math.max(x, y)"],
        correctAnswer:3
    },
    {
        question:"Which event occurs when the user clicks on an HTML element?",
        options:["onchange","onclick","onmouseover","onmouseclick"],
        correctAnswer:1
    },
    {
        question:"What is the correct JavaScript syntax to change the content of the HTML element below: `<p id='demo'>This is a demonstration.</p>`",
        options:["document.getElement('p').innerHTML = 'Hello World!';","document.getElementById('demo').innerHTML = 'Hello World!';","document.getElementsById('demo').innerHTML = 'Hello World!';","document.getElementsByTagName('p')[0].innerHTML = 'Hello World!';"],
        correctAnswer:1
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        options:["The <head> section","The <body> section","Both the <head> section and the <body> section are correct","The <title> section"],
        correctAnswer:2
    },
    {
        question:"What is the correct file extension for JavaScript files?",
        options:[".js",".jvs",".javascript",".es"],
        correctAnswer:0
    },
    {
        question:"Which of the following is an example of a JavaScript framework?",
        options:["Laravel","Django","React","Ruby on Rails"],
        correctAnswer:2
    },
    {
        question:"What does the '===' operator do?",
        options:["Compares values only","Compares values and types","Assigns a value","Checks for inequality"],
        correctAnswer:1
    },
    {
        question:"Which global function is used to convert a string to an integer?",
        options:["parseInt()","toFloat()","stringToNumber()","Number()"],
        correctAnswer:0
    },
    {
        question:"What is the output of `console.log(typeof null)`?",
        options:["'object'","'null'","'undefined'","'number'"],
        correctAnswer:0
    },
    {
        question:"Which method is used to add new items to the end of an array and returns the new length?",
        options:["pop()","shift()","unshift()","push()"],
        correctAnswer:3
    },
    {
        question:"What does `DOM` stand for?",
        options:["Data Object Model","Document Order Model","Document Object Model","Dynamic Object Management"],
        correctAnswer:2
    },
    {
        question:"What will `2 + '2'` evaluate to in JavaScript?",
        options:["4","'22'","NaN","'4'"],
        correctAnswer:1
    },
    {
        question:"Which array method creates a new array with the results of calling a provided function on every element in the calling array?",
        options:["filter()","reduce()","map()","forEach()"],
        correctAnswer:2
    },
    {
        question:"What is a closure in JavaScript?",
        options:["A function without a name","A function that is defined inside another function, and has access to the outer function's variables and parameters","A loop that never ends","A method to close a webpage"],
        correctAnswer:1
    },
    {
        question:"Which keyword is used to declare a constant variable in JavaScript?",
        options:["var","let","const","constant"],
        correctAnswer:2
    },
    {
        question:"How do you select an HTML element by its ID using JavaScript?",
        options:["document.querySelector('#myId')","document.getElementByID('myId')","document.getElementById('myId')","document.find('myId')"],
        correctAnswer:2
    },
    {
        question:"What does `var` allow that `let` and `const` do not?",
        options:["Block scoping","Hoisting without initialization errors","Redeclaration in the same scope","Temporal Dead Zone"],
        correctAnswer:2
    },
    {
        question:"Which of these is a correct way to start a `while` loop?",
        options:["while i = 1 to 10","while (i <= 10)","while (i < 10; i++)","while i < 10"],
        correctAnswer:1
    },
    {
        question:"Which property is used to get the length of a string?",
        options:["length()","size","count","length"],
        correctAnswer:3
    },
    {
        question:"What is event bubbling in JavaScript?",
        options:["When an event fires directly on the target element","When an event starts at the deepest element and propagates outwards to its parents","When an event only fires on the document root","When an event captures from the outermost element inwards"],
        correctAnswer:1
    },
    {
        question:"Which of the following is used to handle asynchronous operations in JavaScript?",
        options:["Callbacks","Promises","Async/Await","All of the above"],
        correctAnswer:3
    },
    {
        question:"What is the purpose of the `bind()` method?",
        options:["To attach an event listener","To create a new function that, when called, has its `this` keyword set to the provided value","To concatenate strings","To convert a function to a string"],
        correctAnswer:1
    },
    {
        question:"Which method would you use to add an item to the beginning of an array?",
        options:["pop()","push()","unshift()","shift()"],
        correctAnswer:2
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