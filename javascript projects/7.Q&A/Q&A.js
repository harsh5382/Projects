document.addEventListener("DOMContentLoaded", function () {
  const questionInput = document.getElementById("question");
    const askButton = document.getElementById("askButton");
    const answerDisplay = document.getElementById("answer");

    const answers = ["Yes", "No", "Maybe", "Ask again later", "I'm not sure", "Absolutely", "Definitely not"];

    askButton.addEventListener("click", function () {
      const question = questionInput.value;

      answerDisplay.innerHTML = "";

      const randomIndex = Math.floor(Math.random() * answers.length);
      const randomAnswer = answers[randomIndex];

      answerDisplay.innerText = randomAnswer;
    });
});