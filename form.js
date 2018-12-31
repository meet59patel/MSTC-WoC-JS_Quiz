//<!--Created by Meet Patel (201801415). All rights reserved :P -->

function setGenreComp(){
    localStorage.setItem("genreSelected", "Computer");
    document.getElementById("dropButton").innerHTML = "Selected Genre: Computer";
}
function setGenreBBT(){
    localStorage.setItem("genreSelected", "BigBangTheory");
    document.getElementById("dropButton").innerHTML = "Selected Genre: Big Bang Theory TV Series";
}
function setGenrePolitics(){
    localStorage.setItem("genreSelected", "Politics");
    document.getElementById("dropButton").innerHTML = "Selected Genre: Indian Politics";
}

function getDetails(){
    var x = document.getElementById("form1");
    var y = x.elements["name"].value;
     if(y == ""){
        document.getElementById("para1").innerHTML="Please enter name to continue...<br>";
        return false;
    }
    else{
        document.getElementById("para1").innerHTML="Hello "+y+"!<br>"+"Please wait till the questions are loaded.";
        localStorage.setItem("storedName", y);
        javascript:window.location='quizPage.html';
        /* startTheQuiz(); */
    }
}

function guess(id, guess) {//added again
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
function showScores() {//added again
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


function onclickDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }