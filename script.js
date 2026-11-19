
/* =========================================
   1. SELECT HTML ELEMENTS
========================================= */

// Subject buttons
const subjectButtons = document.querySelectorAll(".subject-btn");

// Science category container
const scienceOptions = document.getElementById("science-option");

// Home and quiz sections
const homeSection = document.querySelector(".home");
const quizSection = document.getElementById("quiz");

// Quiz elements
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const quizHeading = document.getElementById("quiz-heading");


/* =========================================
   2. QUIZ VARIABLES
========================================= */

let selectedSubject = "";
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let currentQuestions = [];
let quizFinished = false;


// Science subjects
const scienceSubjects = [
    "physics",
    "chemistry",
    "biology"
];


/* =========================================
   3. CREATE CHANGE SUBJECT BUTTON
========================================= */

const changeSubjectButton = document.createElement("button");

changeSubjectButton.type = "button";
changeSubjectButton.textContent = "Choose Another Subject";
changeSubjectButton.className = "subject-btn";
changeSubjectButton.style.display = "none";

quizSection.appendChild(changeSubjectButton);


/* =========================================
   4. SELECT A SUBJECT
========================================= */

subjectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const subject = button.dataset.subject;

        // Science is a category, not a quiz itself.
        if (subject === "science") {

            selectedSubject = "";

            subjectButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            scienceOptions.style.display = "block";

            return;
        }

        // Save the selected subject.
        selectedSubject = subject;

        // Remove previous selections.
        subjectButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        // Highlight the selected subject.
        button.classList.add("selected");

        // Show science categories when appropriate.
        if (scienceSubjects.includes(subject)) {
            scienceOptions.style.display = "block";
        } else {
            scienceOptions.style.display = "none";
        }

    });

});


/* =========================================
   5. START THE QUIZ
========================================= */

startButton.addEventListener("click", startQuiz);


function startQuiz() {

    // Check whether a subject was selected.
    if (selectedSubject === "") {

        alert("Please select a subject first!");

        return;
    }

    // Get questions for the selected subject.
    currentQuestions = questions[selectedSubject];

    // Check whether questions are available.
    if (!Array.isArray(currentQuestions) ||
        currentQuestions.length === 0) {

        alert("No questions are available for this subject.");

        return;
    }

    // Reset quiz values.
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizFinished = false;

    // Reset quiz heading and buttons.
    quizHeading.textContent = "Your Quiz";

    nextButton.textContent = "Next";
    nextButton.disabled = true;
    nextButton.style.display = "inline-block";

    changeSubjectButton.style.display = "none";

    // Show quiz and hide home page.
    homeSection.style.display = "none";
    quizSection.style.display = "block";

    // Display the first question.
    showQuestion();

    // Move the screen to the quiz.
    quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   6. DISPLAY A QUESTION
========================================= */

function showQuestion() {

    selectedAnswer = null;

    const currentQuestion =
        currentQuestions[currentQuestionIndex];

    // Display question number and text.
    questionElement.textContent =
        "Question " +
        (currentQuestionIndex + 1) +
        " of " +
        currentQuestions.length +
        ": " +
        currentQuestion.question;


    // Display answer options.
    optionButtons.forEach(function(button, index) {

        const option = currentQuestion.options[index];

        if (option === undefined) {

            button.style.display = "none";

            return;
        }

        button.style.display = "block";

        button.textContent = option;

        button.disabled = false;

        // Remove previous answer styles.
        button.classList.remove(
            "selected",
            "correct",
            "incorrect"
        );

    });

    // User must answer before moving forward.
    nextButton.disabled = true;

}


/* =========================================
   7. CHECK THE ANSWER
========================================= */

optionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Prevent selecting multiple answers.
        if (
            selectedAnswer !== null ||
            quizFinished
        ) {
            return;
        }

        selectedAnswer = button.textContent;

        const correctAnswer =
            currentQuestions[currentQuestionIndex].answer;


        // Check whether the answer is correct.
        if (selectedAnswer === correctAnswer) {

            score++;

            button.classList.add("correct");

        } else {

            button.classList.add("incorrect");

            // Highlight the correct answer.
            optionButtons.forEach(function(btn) {

                if (btn.textContent === correctAnswer) {

                    btn.classList.add("correct");

                }

            });

        }


        // Disable all answers after selection.
        optionButtons.forEach(function(btn) {

            btn.disabled = true;

        });


        // Enable the Next button.
        nextButton.disabled = false;


        // Change button text on the last question.
        if (
            currentQuestionIndex === currentQuestions.length - 1
        ) {

            nextButton.textContent = "See Results";

        }

    });

});


/* =========================================
   8. MOVE TO THE NEXT QUESTION
========================================= */

nextButton.addEventListener("click", function() {

    // Restart if the quiz is finished.
    if (quizFinished) {

        startQuiz();

        return;
    }

    // Do nothing if no answer is selected.
    if (selectedAnswer === null) {

        return;
    }

    currentQuestionIndex++;

    // Display the next question.
    if (currentQuestionIndex < currentQuestions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


/* =========================================
   9. DISPLAY FINAL RESULTS
========================================= */

function showResult() {

    quizFinished = true;

    const totalQuestions = currentQuestions.length;

    const percentage = Math.round(
        (score / totalQuestions) * 100
    );

    // Change heading.
    quizHeading.textContent = "Quiz Completed!";

    // Display final score.
    questionElement.textContent =
        "Your Score: " +
        score +
        " / " +
        totalQuestions +
        " (" +
        percentage +
        "%)";


    // Hide answer buttons.
    optionButtons.forEach(function(button) {

        button.style.display = "none";

    });


    // Show restart option.
    nextButton.textContent = "Restart Quiz";
    nextButton.disabled = false;

    // Show option to choose another subject.
    changeSubjectButton.style.display = "inline-block";

}


/* =========================================
   10. CHOOSE ANOTHER SUBJECT
========================================= */

changeSubjectButton.addEventListener("click", function() {

    // Reset selected subject.
    selectedSubject = "";

    // Reset quiz state.
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    currentQuestions = [];
    quizFinished = false;

    // Remove selected subject styles.
    subjectButtons.forEach(function(button) {

        button.classList.remove("selected");

    });

    // Hide science categories.
    scienceOptions.style.display = "none";

    // Restore quiz elements.
    quizHeading.textContent = "Your Quiz";

    questionElement.textContent =
        "Your question will appear here.";

    optionButtons.forEach(function(button) {

        button.style.display = "block";
        button.disabled = false;

        button.classList.remove(
            "selected",
            "correct",
            "incorrect"
        );

    });

    nextButton.textContent = "Next";
    nextButton.disabled = true;

    changeSubjectButton.style.display = "none";

    // Return to the home page.
    quizSection.style.display = "none";
    homeSection.style.display = "block";

    // Scroll to the top.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
