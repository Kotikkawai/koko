const quizData = [
  {
    question: "Where and when was Taras Shevchenko born?",
    options: [
      "Moryntsi village, March 9, 1816.",
      "Kyrylivka, March 9, 1814",
      "Moryntsi, March 9, 1814.",
      "Kyrylivka, March 9, 1816.",
    ],
    correct: 2,
  },
  {
    question: "Social status of Taras at birth.",
    options: ["orphan", "serf", "half-orphan", "free man"],
    correct: 0,
  },

  {
    question: "Shevchenko's mother's maiden name",
    options: ["Boyko", "Shevchenko", "Kovalenko", "Engelhardt"],
    correct: 0,
  },

  {
    question: "Why did Shevchenko end up in St. Petersburg?",
    options: [
      "Went to earn money",
      "Went to study",
      "he went to my friends",
      "Mr. took with him",
    ],
    correct: 3,
  },
  {
    question: "When was Shevchenko redeemed from serfdom?",
    options: ["1838", "1840 ", "1836", "1841"],
    correct: 0,
  },
  {
    question: "How many years was Shevchenko in exile?",
    options: ["5", "8", "12", "10"],
    correct: 3,
  },
  {
    question: "Where is T. Shevchenko buried?",
    options: [
      "In Kanev on Chernechaya Gora",
      "In St. Petersburg",
      "In Kyiv at the Baikovo cemetery",
      "In Kyrylivka",
    ],
    correct: 0,
  },
  {
    question: "Where was the poem Cherry orchard around the house written?",
    options: [
      "In Pereyaslav",
      "In the casemate",
      "In Kiev",
      "In his native village",
    ],
    correct: 2,
  },
  {
    question:
      "To which type of lyrics do the poems Cherry orchard around the house, A little cloud floats behind the sun  belong?",
    options: ["Landscape", "Civil", "Intimate", "Philosophical"],
    correct: 0,
  },
  {
    question:
      "What moods are interwoven in T. Shevchenko's poem A little cloud floats behind the sun?",
    options: [
      "Joy and affection",
      "Sadness and insight",
      "Spiritual formation and inspiration",
      "Affection, joy and anticipation of danger, anxiety",
    ],
    correct: 2,
  },
  {
    question: "What other talent, apart from writing, was Kobzar endowed with?",
    options: [
      "Artistic",
      "He sang well",
      "He was a famous sculptor",
      "He was only a writer",
    ],
    correct: 0,
  },
  {
    question:
      "The lines And the fog, like an enemy, covers the sea.  is an artistic device. Name him.",
    options: ["Epithet", "Comparison", "Personification", "Affectionate words"],
    correct: 2,
  },
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultsElement = document.getElementById("results");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  for (let i = 0; i < currentQuizData.options.length; i++) {
    const option = document.createElement("button");
    option.innerText = currentQuizData.options[i];
    option.addEventListener("click", () => checkAnswer(i));
    optionsElement.appendChild(option);
  }
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quiz.style.display = "none";
  resultsElement.style.display = "block";
  scoreElement.innerText = score + "  out of" + quizData.length;
}

nextButton.addEventListener("click", () => {
  if (currentQuestion < quizData.length) {
    loadQuestion();
  }
});

loadQuestion();
