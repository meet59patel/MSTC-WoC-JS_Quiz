function getDetails(){
    var x = document.getElementById("form1");
    var y = x.elements["name"].value;
    document.getElementById("para1").innerHTML="Hello "+y+"!<br>";
}