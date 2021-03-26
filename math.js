//Queing up the game with the start button

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container"); //allows questions to be shown
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener("click", startGame); // function to start the game
nextButton.addEventListener("click", () => {
  currentQuestionsIndex++;
  setNextQuestion();
});
function startGame() {
  console.log("started");
  startButton.classList.add("hide"); //hiding start button
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionsIndex = 0; //set to zero because we are starting on the first questions of the array
  questionContainerElement.classList.remove("hide"); //shows question
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionsIndex]); //take the randon question and actually show it
}

//function to set next question

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
  clearStatusClass(document.body);
  nextButton.classList.add("hide"); // hide the next button when the next quetion appear
  while (answerButtonsElement.firstChild) {
    //if there is an child in the answer this will remove it
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// function for answer

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionsIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 4 + 2?",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: true },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What is 50 + 7?",
    answers: [
      { text: "61", correct: false },
      { text: "87", correct: false },
      { text: "57", correct: true },
      { text: "45", correct: false },
    ],
  },
  {
    question: "What is 81 - 17?",
    answers: [
      { text: "64", correct: true },
      { text: "58", correct: false },
      { text: "53", correct: false },
      { text: "60", correct: false },
    ],
  },
  {
    question: "What is 50 / 10?",
    answers: [
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "8", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "What is 6 * 7?",
    answers: [
      { text: "42", correct: true },
      { text: "64", correct: false },
      { text: "58", correct: false },
      { text: "72", correct: false },
    ],
  },
  {
    question: "What is 21 + 19?",
    answers: [
      { text: "51", correct: false },
      { text: "32", correct: false },
      { text: "28", correct: false },
      { text: "40", correct: true },
    ],
  },
  {
    question: "What is 45 / 5?",
    answers: [
      { text: "20", correct: false },
      { text: "8", correct: false },
      { text: "5", correct: false },
      { text: "9", correct: true },
    ],
  },
  {
    question: "What is 9 * 9?",
    answers: [
      { text: "18", correct: false },
      { text: "84", correct: false },
      { text: "81", correct: true },
      { text: "72", correct: false },
    ],
  },
  {
    question: "What is 78 - 16?",
    answers: [
      { text: "55", correct: false },
      { text: "62", correct: true },
      { text: "41", correct: false },
      { text: "66", correct: false },
    ],
  },
  {
    question: "What is 7 * 18?",
    answers: [
      { text: "306", correct: true },
      { text: "178", correct: false },
      { text: "280", correct: false },
      { text: "409", correct: false },
    ],
  },
  {
    question: "What is 3 * 9?",
    answers: [
      { text: "14", correct: false },
      { text: "18", correct: false },
      { text: "27", correct: true },
      { text: "24", correct: false },
    ],
  },
  {
    question: "What is 64 - 8?",
    answers: [
      { text: "56", correct: true },
      { text: "48", correct: false },
      { text: "51", correct: false },
      { text: "49", correct: false },
    ],
  },
  {
    question: "What is 90 / 18?",
    answers: [
      { text: "24", correct: false },
      { text: "8", correct: false },
      { text: "11", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "What is 74 + 32?",
    answers: [
      { text: "89", correct: false },
      { text: "96", correct: false },
      { text: "106", correct: true },
      { text: "110", correct: false },
    ],
  },
  {
    question: "What is 102 - 43?",
    answers: [
      { text: "66", correct: false },
      { text: "59", correct: true },
      { text: "81", correct: false },
      { text: "70", correct: false },
    ],
  },
  {
    question: "What is 169 / 13?",
    answers: [
      { text: "15", correct: false },
      { text: "13", correct: true },
      { text: "18", correct: false },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What is 88 + 114?",
    answers: [
      { text: "202", correct: true },
      { text: "188", correct: false },
      { text: "119", correct: false },
      { text: "171", correct: false },
    ],
  },
  {
    question: "What is 44 - 51?",
    answers: [
      { text: "7", correct: false },
      { text: "-7", correct: true },
      { text: "-9", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What is 189 / 9?",
    answers: [
      { text: "32", correct: false },
      { text: "18", correct: false },
      { text: "9", correct: false },
      { text: "21", correct: true },
    ],
  },
  {
    question: "What is 89 + 209?",
    answers: [
      { text: "302", correct: false },
      { text: "188", correct: false },
      { text: "298", correct: true },
      { text: "271", correct: false },
    ],
  },
  {
    question: "What is 415 - 98?",
    answers: [
      { text: "317", correct: true },
      { text: "334", correct: false },
      { text: "299", correct: false },
      { text: "350", correct: false },
    ],
  },
  {
    question: "What is 144 / 12?",
    answers: [
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "18", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "What is 19 + 264?",
    answers: [
      { text: "301", correct: false },
      { text: "299", correct: false },
      { text: "184", correct: false },
      { text: "280", correct: true },
    ],
  },
  {
    question: "What is 77 - 14?",
    answers: [
      { text: "91", correct: false },
      { text: "58", correct: false },
      { text: "63", correct: true },
      { text: "88", correct: false },
    ],
  },
  {
    question: "What is 121 / 11?",
    answers: [
      { text: "15", correct: false },
      { text: "11", correct: true },
      { text: "13", correct: false },
      { text: "21", correct: false },
    ],
  },
  {
    question: "What is 551 + 109?",
    answers: [
      { text: "633", correct: false },
      { text: "641", correct: false },
      { text: "660", correct: true },
      { text: "658", correct: false },
    ],
  },
  {
    question: "What is 212 - 88?",
    answers: [
      { text: "124", correct: true },
      { text: "132", correct: false },
      { text: "141", correct: false },
      { text: "134", correct: false },
    ],
  },
  {
    question: "What is 88 / 8?",
    answers: [
      { text: "8", correct: true },
      { text: "13", correct: false },
      { text: "76", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "What is 19 + 9?",
    answers: [
      { text: "28", correct: true },
      { text: "24", correct: false },
      { text: "26", correct: false },
      { text: "29", correct: false },
    ],
  },
  {
    question: "What is 99 - 18?",
    answers: [
      { text: "88", correct: false },
      { text: "81", correct: true },
      { text: "78", correct: false },
      { text: "80", correct: false },
    ],
  },
];
