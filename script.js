// STEP 1: Select HTML elements
const subjectButtons = document.querySelectorAll(".subject-btn");
const scienceOptions = document.querySelector(
    "#science-option, #science-options"
);
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
// STEP 2: Create quiz variables
let selectedSubject = "";
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";
let currentQuestions = [];
let quizFinished = false;
// STEP 3: Select a subject
subjectButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const subject = button.dataset.subject;
        // If Science is clicked, show its sub-subjects
        if (subject === "science") {
            scienceOptions.style.display = "block";
            return;
        }
        // Remove previous selection
        subjectButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        // Select current subject
        button.classList.add("selected");
        selectedSubject = subject;
    });
});
// STEP 4: Start the quiz
startButton.addEventListener("click", function() {
    if (selectedSubject === "") {
        alert("Please select a subject first!");
        return;
    }
    currentQuestions = questions[selectedSubject];
    if (!currentQuestions || currentQuestions.length === 0) {
        alert("No questions available!");
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    quizFinished = false;
    nextButton.textContent = "Next";
    nextButton.style.display = "inline-block";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
});


// STEP 5: Display a question
function showQuestion() {
    selectedAnswer = "";
    const currentQuestion =
        currentQuestions[currentQuestionIndex];
    questionElement.textContent =
        "Question " + (currentQuestionIndex + 1) +
        ": " + currentQuestion.question;
    optionButtons.forEach(function(button, index) {
        // Make options visible again
        button.style.display = "block";
        // Display answer choices
        button.textContent = currentQuestion.options[index];
        // Enalble options
        button.disabled = false;
        // Remove previous styles
        button.classList.remove("selected", "correct", "incorrect");
    });
    nextButton.disabled = true;
} 
// button.style.display = "block";

// STEP 6: Check the selected answer

optionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (selectedAnswer !== "") {
            return;
        }

        selectedAnswer = button.textContent;

        const correctAnswer =
            currentQuestions[currentQuestionIndex].answer;

        if (selectedAnswer === correctAnswer) {

            score++;

            button.classList.add("correct");

        } else {

            button.classList.add("incorrect");

            optionButtons.forEach(function(btn) {

                if (btn.textContent === correctAnswer) {
                    btn.classList.add("correct");
                }

            });

        }

        // Disable all options after answering

        optionButtons.forEach(function(btn) {
            btn.disabled = true;
        });

        nextButton.disabled = false;

        if (currentQuestionIndex === currentQuestions.length - 1) {
            nextButton.textContent = "See Result";
        }

    });

});


// STEP 7: Move to the next question

nextButton.addEventListener("click", function() {

    if (quizFinished) {

        startButton.click();

        return;
    }

    if (selectedAnswer === "") {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// STEP 8: Display final result

function showResult() {
   
    quizFinished = true;

    questionElement.textContent =
        "Quiz Completed! Your Score: " +
        score + " / " + currentQuestions.length;

    optionButtons.forEach(function(button) {
        button.style.display = "none";
    });

    nextButton.textContent = "Restart Quiz";

    nextButton.disabled = false;

}