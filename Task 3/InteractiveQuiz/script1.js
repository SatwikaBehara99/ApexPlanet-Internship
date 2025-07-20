const quizData = [
  {
    question: "Which language is used to build web pages?",
    options: ["HTML", "Python", "C++", "Java"],
    answer: "HTML"
  },
  {
    question: "Which tag is used to display an image in HTML?",
    options: ["<link>", "<img>", "<src>", "<image>"],
    answer: "<img>"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Syntax"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which symbol is used for an ID in CSS?",
    options: ["#", ".", "@", "/"],
    answer: "#"
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: ["log.print()", "console.log()", "print.console()", "write.log()"],
    answer: "console.log()"
  },
  {
    question: "What does the 'href' attribute in HTML do?",
    options: ["Displays an image", "Adds a background", "Specifies link URL", "Changes font size"],
    answer: "Specifies link URL"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["background", "font-size", "text-align", "color"],
    answer: "color"
  },
  {
    question: "What does 'var' declare in JavaScript?",
    options: ["A value", "A method", "A variable", "A loop"],
    answer: "A variable"
  },
  {
    question: "Which one is a valid JavaScript variable name?",
    options: ["2value", "my-name", "myValue", "my value"],
    answer: "myValue"
  },
  {
    question: "Which event runs a function when a button is clicked?",
    options: ["onhover", "onclick", "onchange", "onload"],
    answer: "onclick"
  }
];

// 🎲 Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions once on load
shuffleArray(quizData);

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").textContent = q.question;
  document.getElementById("question-number").textContent = `Question ${current + 1} of ${quizData.length}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").className = "result";
  document.getElementById("score").textContent = "";
  document.getElementById("nextBtn").style.display = "none";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(button, selected) {
  const correct = quizData[current].answer;
  const resultDiv = document.getElementById("result");

  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selected) {
      btn.classList.add("incorrect");
    }
  });

  button.classList.add("selected");

  if (selected === correct) {
    score++;
    resultDiv.innerHTML = "✅ Correct!";
    resultDiv.classList.add("correct");
  } else {
    resultDiv.innerHTML = `❌ Your answer is incorrect.<br>The correct answer is: <strong>${correct}</strong>`;
    resultDiv.classList.add("incorrect");
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-number").textContent = "";
  document.getElementById("question").textContent = "🎉 You've completed the quiz!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("score").innerHTML = `Your Score: <strong>${score}/${quizData.length}</strong>`;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartQuiz() {
  current = 0;
  score = 0;
  shuffleArray(quizData); // 🔁 Reshuffle on restart too
  document.getElementById("restartBtn").style.display = "none";
  loadQuestion();
}

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("themeBtn");
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    body.classList.replace("dark-mode", "light-mode");
    themeBtn.textContent = "🌙 Dark Mode";
  }
}

window.onload = loadQuestion;
