$( document ).ready(function(){
  // To make Trivia Game need to count correct and incorrect answers


  // Need to compare question choices and answers


  // Need to compare User Choices and correct answers


  // Need to write to HTML

  // Start Timer for the Quiz 


  // Step 1 create HTML with all the questions listed.

      // Questions will have buttons with id's called by javascript

      // on.click will add to a counter of correct or incorrect

          // if 


      // running score will be held at the bottom


  // Step 2 print running score if all the questions have been answered

      // need a script using if statement to count the questions answered

  //Create an array of all the questions

  //var questions = ["What is 2+2","What is 3+5"];
  var rightcount = 0;
  var wrongcount = 0;
  var choices = ["4","8","11","12"];

  var answers = []

  //var question = [];

  var question1 = {
    q: "what is 2+2?",
    a1: "8",
    a2: "4",
    a3: "9",
    a4: "6",
    correct: "4",
  };

// question1.q to reference 2+2

//function getsum(a,b) {
  //var sum = a+b;
  //console.log(sum);
//}
//getsum(4,5);

function showquestion() {
  console.log(question1.q);
  //question = "question1.q"
  $("#questionHeader").html("<h2 id='questionHeader'>"+question1.q+"</h2>");
  $("#q1").attr("data-attr",question1.a1);
  $("#q2").attr("data-attr",question1.a2);
  $("#q3").attr("data-attr",question1.a3);
  $("#q4").attr("data-attr",question1.a4);
  $("#q1").text(question1.a1);
  $("#q2").text(question1.a2);
  $("#q3").text(question1.a3);
  $("#q4").text(question1.a4);
};
showquestion();

$(".userchoice").on("click",function(){
  console.log(this);

  if ($(this).attr("data-attr") == question1.correct){
    alert("correct");
    rightcount ++;

  }
  else {
    alert("incorect");
    wrongcount ++;
  };
});

// Function that listens for class on user choice.  Runs function that looks for value of this and function 




//function answer() {
  //on.click
//}



});