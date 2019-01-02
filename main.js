//<!--Created by Meet Patel (201801415). All rights reserved :P -->
var currentGenre = localStorage.getItem("genreSelected");

/* function countdownTimer(secondsLeft, timerElement){
    var element1 = document.getElementById("timer1");
    element1.innerHTML = "Time Left: " + secondsLeft + " seconds";
    if(secondsLeft<1){
        clearTimeout(timer);
        showScores();
    }
    secondsLeft--;
    var timer = setTimeout('countdownTimer('+secs+', " '+timerElement+' ")' , 1000);
} */

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
            checkifcorrect("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function checkifcorrect(id, checkifcorrect) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkifcorrect(checkifcorrect);
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
    if(quiz.score == 5){
        gameOverHTML +=  "Perfect Score!";
        gameOverHTML += "<img src=\"dancing.gif\">";
    }
    else{
        gameOverHTML += "<br>" + "Do better next time.";
        gameOverHTML += "<img src=\"tenor.gif\">";
    }
    //var element = document.getElementById("quiz");
    var element = document.getElementById("question");
    element.innerHTML = gameOverHTML;
    document.getElementById("options").innerHTML = "";
    document.getElementById("questionStatus").innerHTML = "";
    var y = localStorage.getItem("storedName");
    document.getElementById("playAgain").innerHTML = "Click to play again, " + y + "!" + "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeQE6tjV0aU_iWYfYCPyBTlGKmdBEdy9O8ONvC1GwjdkrjVCQ/viewform?embedded=true\" width=\"1430\" height=\"1022\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"100\">Loading...</iframe>";
};

var string1 = "Computer";
var string2 = "BigBangTheory";
var string3 = "Politics";
var questions;
if(currentGenre === string1){
questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","Ruby", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which among the following facilitates users to upload web page files from the personal computers to server?", ["Transmission Control Protocol", "File Transfer Protocol","PHP", "HTTP"], "File Transfer Protocol"),
    new Question("BIOS is ______.", ["Better Integrated Operating System", "Battery Integrated Operating System", "Basic Input Output System", "Backup Input Output System"], "Basic Input Output System"),
    new Question("WAV file format is associated with ___.", ["Audio", "Video", "Image", "MS Word Configuration File"], "Audio")
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
    new Question("Where is Election Commission located?", ["Mumbai", "Pathik-Aashram", "New Delhi", "Chennai"], "New Delhi"),
    new Question("Who is president of Bahujan Samaj Party?", ["Mamta Banerjee", "Lalu Yadav", "Mayavati", "Kinjal Dave"], "Mayavati")
];
}
var quiz = new Quiz(questions);
populate();