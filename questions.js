// Store your questions as an array of objects in a separate file,
//`questions.js`, that follows this format:
//

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
];

// TO-DO
// A) coding a function that takes an object from var questions and formats it into a quiz question
// 1. Take Title and put it into an <h2> tag
// 2. Take choices and assign them to 4 different buttons
// 3. Assign booleans to the buttons, where "answer" from questions gets "true"
//

//This sets the number/order of questions provided
for (var i = 0; i < questions.length; i++) {
  quizFormatter(questions[i]);
}
//function is passed the question object
function quizFormatter(question) {
  //.appendChild()
  //Take title form object and put it as h2 on page
  console.log(question.title);

  //take choice and set them to buttons with booleans
  //for loop with array
  //.appendChild() the buttons to page
  console.log(question.choices);

  //take answer and check with button from choices
  //set booleans
  //set onClick on each button
  console.logn(question.answer);
}

// B) Function that checks for user's choice and if it's correct
// 4. check for click event for user's answer to question (one of the choices buttons is clicked)
// 5. check if they clicked the correct button
// 6a. if correct, keep track
// 6b. if incorrect, lose time by 10 sec
//
// C) Repeatedly pull questions from var questions until set number of questions is answers or time out
// D) Go to High Score page

//* The length of the array in `questions.js` determines the length of play.
//Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.
