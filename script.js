const subjectButtons = document.querySelectorAll(".subject-btn");
subjectButtons.forEach(function(button)
{
    button.addEventListener("click", function()
 {
    subjectButtons.forEach(function(btn){
        btn.classList.remove("selected");

    });
    button.classList.add("selected");
 });
});
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", function(){
    alert("Start Quiz clicked!");
});