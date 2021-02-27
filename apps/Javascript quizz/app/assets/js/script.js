"use:strict";

/****************************************
 *            ASSIGNMENTS 
 *****************************************/
const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");





form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  /*   input values on html doc   */
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  /*  check answers  
  call back function
  answer actual value iterating, the index is the position 
  check if the answers are equal to the correctAnswers */
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25; // for percent
    }
  });


  /*  show result on page  
  scrollTo() method have 2 prm X & Y*/
  scrollTo(0, 0);
  showResult.classList.remove("d-none");


  /*  the output will count until the score number then will do clear */
  let output = 0;
  const timer = setInterval(() => {
    showResult.querySelector("span").textContent = `${output} %`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});