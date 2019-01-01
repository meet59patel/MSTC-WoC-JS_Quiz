//<!--Created by Meet Patel (201801415). All rights reserved :P -->

/* function startTheQuiz(){
    var y;
    y = localStorage.getItem("storedName");
    document.getElementById("para2").innerHTML="Welcome to the quiz, " + y + "!<br>";
} */

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkifcorrect = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

/***************************** */
function Question(text, choices, answer){
    this.text = text;
    this.answer = answer;
    this.choices = choices;
}

Question.prototype.isCorrectAnswer = function(choice){
    return choice === this.answer;
}