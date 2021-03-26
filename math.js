//Queing up the game with the start button

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container"); //allows questions to be shown
// const gameQuestions = document.getElementById("questions");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffleQuestions, currentQuestionsIndex;

startButton.addEventListener("click", startGame);
// function to start the game
function startGame() {
  console.log("started");
  startButton.classList.add("hide"); //hiding start button
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionsIndex = 0; //set to zero because we are starting on the first questions of the array
  questionContainerElement.classList.remove("hide"); //shows question
  setNextQuestion();
}

//function to set next question

function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionsIndex]); //take the randon question and actually show it
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button"); //creating a button for the answer
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct; // add a data attribute to button element to correct and only correct. Otherwise it was false then it would be difficult to tell which one is correct
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide"); // hide the next button when the next quetion appear
  while (answerButtonsElement.firstChild) {
    //looping thru all the children of the answer button element
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// function for answer

function selectAnswer(e) {
  const selectedButton = e.target; // e.target checking whatever we clicked on
  const correct = selectedButton.dataset.correct; //checking dataset if its correct
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "4", correct: true },
    ],
  },
];
