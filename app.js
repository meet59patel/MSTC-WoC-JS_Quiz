//<!--Created by Meet Patel (201801415). All rights reserved :P -->
var currentGenre = localStorage.getItem("genreSelected");

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("questionStatus");
    var y = localStorage.getItem("storedName");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length +  ".&nbsp;&nbsp;" + y + " is playing.";
    element.innerHTML += "<br>" + "Genre: " + currentGenre;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    //var element = document.getElementById("quiz");
    var element = document.getElementById("question");
    element.innerHTML = gameOverHTML;
    document.getElementById("options").innerHTML = "";
    document.getElementById("questionStatus").innerHTML = "";
    var y = localStorage.getItem("storedName");
    document.getElementById("playAgain").innerHTML = "Click to play again, " + y + "!" + "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeQE6tjV0aU_iWYfYCPyBTlGKmdBEdy9O8ONvC1GwjdkrjVCQ/viewform?embedded=true\" width=\"1430\" height=\"1022\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"100\">Loading...</iframe>";
};


 /* var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];  */

var string1 = "Computer";
var string2 = "BigBangTheory";
var string3 = "Politics";
var questions;
if(currentGenre === string1){
questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];
}
else if(currentGenre === string2){
questions = [
    new Question("What song does Sheldon require his caretaker to sing to him when he is sick?", ["Soft Kitty", "Baa Baa Black sheep","Despacito", "Dilbar"], "Soft Kitty"),
    new Question("Which actor plays Sheldon Cooper's role?", ["Johnny Galecki", "Simon Helberg", "Jim Parsons", "Stan Lee"], "Jim Parsons"),
    new Question("In what year did The Big Bang Theory premiere?", ["2006", "2007","2009", "2011"], "2007"),
    new Question("What actor on the show has a doctorate in real life?", ["Elon Musk", "Simon Helberg", "Mayim Bialik", "Jim Parsons"], "Mayim Bialik"),
    new Question("How old sheldon was when he started his college?", ["7", "11", "13", "15"], "11")
];
}
else if(currentGenre === string3){
 questions = [
    new Question("Who has nickname Pappu?", ["Narendra Modi", "Rahul Gandhi","Baba Ramdev", "Yogi Adityanath"], "Rahul Gandhi"),
    new Question("Who is current governor of Reserve Bank of India?", ["Raghuram Rajan", "Urjit Patel", "Shantikanta Das", "Arun Jaitley"], "Shantikanta Das"),
    new Question("What is NDA with respect to Indian Politics?", ["Non Disclosure Agreement", "National Democretic Alliance","National Defence Academy", "Narendra Damodardas Modi"], "National Democretic Alliance"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("Who is president of Bahujan Samaj Party?", ["Mamta Banerjee", "Lalu Yadav", "Mayavati", "Kinjal Dave"], "Mayavati")
];
}
var quiz = new Quiz(questions);
populate();