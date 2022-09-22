var readlinesync = require("readline-sync")
var username = readlinesync.question('May i know your name:- ')
var score = 0
var quesno = 0
console.log("Hey " + username)
console.log("How much do you know me?")
console.log("Lets check with a simple quiz")

function question(ques, answer) {
  quesno += 1
  console.log("-------------------------------");
  console.log("Question No " + quesno + ":-");
  var useranswer = readlinesync.question(ques)
  if (useranswer.toLowerCase() == answer) {
    console.log("You are right");
    score += 1;
    console.log("Your score is:- ", score);
  } else {
    console.log("You are Wrong");
    score -= 1;
    console.log("Your score is:- ", score);
  }
}

question('Where do I live? ', "pune")
question('What is my favorite fruit? ', "chikoo")
question('Who is my favorite singer? ', "arijit")
question('Which season do i like most? ', "winter")
question('And the last one, Which is my favorite pet? ', "dog")

console.log("x----x----x----x----x----x----x----x----x")
console.log("Yeah! You scored:- ", score)
console.log("x----x----x----x----x----x----x----x----x")