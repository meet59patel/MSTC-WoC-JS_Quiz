var currentName = localStorage.getItem("storedName");
var currentScore = localStorage.getItem("currentScore");
var scores = [{ name: "Naman Agrawal", score: 10 }, 
                { name: "Vatsal Modi", score: 8 }, 
                { name: "Harsh Patil", score: 5 }, 
                { name: "Parth Watson", score: 2 }, 
                { name: currentName+" (You)", score: currentScore}
            ];

function compare(a, b){
    return b.score-a.score;
}
console.log(scores);
scores.sort(compare);
console.log(scores);

for(var i=1; i<=scores.length; i++){
    document.getElementById("name"+i).innerHTML = scores[i-1].name;
    document.getElementById("score"+i).innerHTML = scores[i-1].score;
    if(scores[i-1].name === currentName+" (You)"){
        document.getElementById("name"+i).style.color = "white";
        document.getElementById("score"+i).style.color = "white";
    }
}

function playAgain(){
    javascript: window.location='index.html';
}