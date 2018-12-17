function Question(text, choices, answer){
    this.text = text;
    this.answer = answer;
    this.choices = choices;
}

Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}