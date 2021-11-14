
var readlineSync = require ('readline-sync');
  
var score = 0;

var highScores = [
  {
    name: "Ayussh",
    score: 7,
  },

  {
    name: "Adi",
    score: 5,
  },
]

//array of objects 
  var questions = [{
    question: " Q.1 Sensex is a barometer for the market behavior. It gives a general idea about whether most of the stocks have gone up or gone down.. TRUE or FALSE ",
              
    answer: "TRUE"
    },
    {
    question: "Q2. A low PE stock is always better than a high PE stock? TRUE or FALSE ",
    answer: "FALSE "
    }, 
     {
    question: "Q3. The Largest Stock Market in India is: NSE or BSE ",
    answer: "NSE"
    }, 
     {
    question: "Q4. The Oldest Stock Market in India is: NSE or BSE ",
    answer: "BSE"
    }, 
     {
    question: "Q5. What is the expansion of SENSEX ?",
    answer: "Stock Exchange Sensitive Index "
     }, 
     {
    question: "Q6. An economic value that a company controls with an expectation that it will provide future benefit is called... ",
    answer: "Asset"
    }, 
    {
    question: "Q7. The current market price per share multiplied by the total number of outstanding shares of that company will give.. ",
    answer: "Market Capitalization"
     }];

            
     function welcome() {
     const chalk = require('chalk');
        var userName = readlineSync.question("What's your name? ");

        console.log(chalk.blue.underline.bold("Welcome "+ userName + " to my quiz. Let's find out how well do you know about the basics of STOCK MARKET!!!!! "));
    }




            
            
            //play function
            function quiz (question, answer) {
              var userAnswer = readlineSync.question(question);



              if(userAnswer.toUpperCase() === answer.toUpperCase()) {
                const log = console.log;
                const chalk = require('chalk');
                log(chalk.bgGreen.bold("You are right! "));
                score = score + 1;
                
              }
              else {
                const log = console.log;
                const chalk = require('chalk');
                log(chalk.bgRed.bold("You were wrong! "));
                score = score;
              }
              console.log("Current Score: ", score);
              console.log("---------");
            }

            

        //loop
        function play (){
            for(var i = 0; i<questions.length; i++) {
          var currentQuestion = questions[i];
          quiz(currentQuestion.question, currentQuestion.answer)
        }
        }
      function showScores() {
      console.log("YAY! You SCORED: ", score);

      console.log("Check out the high scores, if you should be there ping me and I'll update it");

      highScores.map(score => console.log(score.name, " : ", score.score))
}

        
        
      welcome();
      play ();
      showScores();

