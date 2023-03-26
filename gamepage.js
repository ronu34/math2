player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    num1 = document.getElementById("num1").value;
    console.log("num1 = "+ num1);

    num2 = document.getElementById("num2").value;
    console.log("num2 = "+ num2);

    question_word = "<h4 id='word_display'>Q. "+num1+"X"+num2+"</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

