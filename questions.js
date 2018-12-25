//<!--Created by Meet Patel (201801415). All rights reserved :P -->
function Question(text, choices, answer){
    this.text = text;
    this.answer = answer;
    this.choices = choices;
}

Question.prototype.isCorrectAnswer = function(choice){
    return choice === this.answer;
}