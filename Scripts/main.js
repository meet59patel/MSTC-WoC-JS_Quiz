//<!--Created by Meet Patel (201801415). All rights reserved :P -->
var currentGenre = localStorage.getItem("genreSelected");
/* var isValidSession = localStorage.getItem("isValidSession"); */
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
    /* else if(isValidSession == false){
        alert("Quiz cannot be accessed directly. Redirecting to form page..."); //Makes quiz inaccessible directly via URL of quizPage.html
        javascript:window.location='index.html';
    } */
    else {
        // show question dynamically
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options dynamically
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
    document.getElementById("dot"+currentQuestionNumber).style.backgroundColor = "#99ff33";

};

function showScores() {
    if(isValidSession == true){
        localStorage.setItem("isValidSession", false);
    }
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    document.getElementById("time").remove();
    document.getElementById("creditfooter").style.fontSize = "40px";
    if(quiz.score == questions.length){
        gameOverHTML +=  "Perfect Score!    ";
        gameOverHTML += "<br>"+"<img src=\"dancing.gif\">";
    }
    else{
        gameOverHTML += "<br>" + "Do better next time.";
        gameOverHTML += "<br>"+"<img src=\"tenor.gif\">";
    }
    //var element = document.getElementById("quiz");
    var element = document.getElementById("question");
    element.innerHTML = gameOverHTML;
    document.getElementById("options").innerHTML = "";
    document.getElementById("questionStatus").innerHTML = "";
    var y = localStorage.getItem("storedName");
    document.getElementById("playAgain").innerHTML = "Click to play again, " + y + "!";
    document.getElementById("feedback").innerHTML = "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeQE6tjV0aU_iWYfYCPyBTlGKmdBEdy9O8ONvC1GwjdkrjVCQ/viewform?embedded=true\" width=\"1430\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"100\">Loading...</iframe>";
    document.getElementById("score").scrollIntoView();
    document.getElementById("statusDots").remove();
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
    new Question("WAV file format is associated with ___.", ["Audio", "Video", "Image", "MS Word Configuration File"], "Audio"),
    new Question("FORTRAN is acronym for?", ["For Translating", "Fortunate Randomiser","FORT Rain Action Network", "Formula Translation"], "Formula Translation"),
    new Question("GNU stands for ___.", ["German National University", "Galileo Node Ubuntu","Git Network Utility", "Gnu Not Linux"], "Gnu Not Linux"),
    new Question("Time complexity of Merge sort is ___.", ["O(nlogn)", "O(logn)","O(n*n)", "O(n!)"], "O(nlogn)"),
    new Question("Compiler generates ___ file.", ["Executable code", "Object code","Assembly code", "None"], "Object code"),
    new Question("The default access specifer for the class members in C++ is ___.", ["public", "private","protected", "None"], "private")
];
}
else if(currentGenre === string2){
questions = [
    new Question("What song does Sheldon require his caretaker to sing to him when he is sick?", ["Soft Kitty", "Baa Baa Black sheep","Despacito", "Dilbar"], "Soft Kitty"),
    new Question("Which actor plays Sheldon Cooper's role?", ["Johnny Galecki", "Simon Helberg", "Jim Parsons", "Stan Lee"], "Jim Parsons"),
    new Question("In what year did The Big Bang Theory premiere?", ["2006", "2007","2009", "2011"], "2007"),
    new Question("What actor on the show has a doctorate in real life?", ["Elon Musk", "Simon Helberg", "Mayim Bialik", "Jim Parsons"], "Mayim Bialik"),
    new Question("How old sheldon was when he started his college?", ["7", "11", "13", "15"], "11"),
    new Question("What is Sheldon's middle name?", ["Lee", "Reginald", "Thomas", "Stanley"], "Lee"),
    new Question("What is Raj's middle name?", ["Shivpalli", "Ramanujan", "Mahesh", "Ramayan"], "Ramayan"),
    new Question("What is Howard allergic to?", ["Fish", "Strawberries", "Eggs", "Nuts"], "Nuts"),
    new Question("Finish this game title: \"Rock, paper, scissors, lizard, ______\"", ["Kirk", "Picard", "Spock", "Data"], "Spock"),
    new Question("How old sheldon was when he got his PhD?", ["16", "12", "19", "23"], "16")
];
}
else if(currentGenre === string3){
 questions = [
    new Question("Who has nickname Pappu?", ["Narendra Modi", "Rahul Gandhi","Baba Ramdev", "Yogi Adityanath"], "Rahul Gandhi"),
    new Question("Who is current governor of Reserve Bank of India?", ["Raghuram Rajan", "Urjit Patel", "Shantikanta Das", "Arun Jaitley"], "Shantikanta Das"),
    new Question("What is NDA with respect to Indian Politics?", ["Non Disclosure Agreement", "National Democretic Alliance","National Defence Academy", "Narendra Damodardas Modi"], "National Democretic Alliance"),
    new Question("Where is Election Commission located?", ["Mumbai", "Pathik-Aashram", "New Delhi", "Chennai"], "New Delhi"),
    new Question("Who is president of Bahujan Samaj Party?", ["Mamta Banerjee", "Lalu Yadav", "Mayavati", "Kinjal Dave"], "Mayavati"),
    new Question("Who handles the Ministry of External Affairs?", ["Rajnath Singh", "Sushma Swaraj", "Uma Bharati", "Harsh Vardhan"], "Sushma Swaraj"),
    new Question("Department of Atomic Energy is lead by ___.", ["Narendra Modi", "Taimur Ali Khan", "Nirmala Sitharaman", "Rajnath Singh"], "Narendra Modi"),
    new Question("Vice President of India is ____.", ["Venkaiah Naidu", "Ramnath Kovind", "Thiru Edappadi K. Palaniswami", "Kamal Nath"], "Venkaiah Naidu"),
    new Question("Number of states in India?", ["26", "33", "29", "31"], "29"),
    new Question("Number of Union Territories in India is ___.", ["11", "12", "7", "6"], "7")
];
}
var quiz = new Quiz(questions); //makes new quiz instance
populate(); //starts the quiz