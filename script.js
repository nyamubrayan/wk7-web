// Part 2: Functions, Scope, Parameters, Return

// Lessons array (local scope inside flipLesson)
let lessons = [
  "Opening Principles",
  "Control the Center",
  "Develop Knights before Bishops",
  "Castle Early",
  "Endgame Basics"
];
let currentLesson = 0;

// Function with return value
function getNextLesson() {
  currentLesson = (currentLesson + 1) % lessons.length;
  return lessons[currentLesson];
}

// Function to flip lesson card
function flipLesson() {
  const card = document.getElementById("lessonCard");
  card.classList.toggle("flip");
  setTimeout(() => {
    card.textContent = getNextLesson();
  }, 300);
}

// Part 3: Quiz Form Validation
document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const message = document.getElementById("quizMessage");

  if (answer === "") {
    message.style.color = "red";
    message.textContent = "❌ Please enter an answer.";
    return;
  }

  if (answer.includes("center") || answer.includes("development")) {
    message.style.color = "green";
    message.textContent = "✅ Correct! Control the center is key.";
  } else {
    message.style.color = "red";
    message.textContent = "❌ Not quite. Try again!";
  }
});
