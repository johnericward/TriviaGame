
var card = $("#quizAreaCSS");

//questions
var questionObjsArray = [

    {
        question: "1) What is Harry Potter's middle name?",
        answers: ["James", "Winston", "Ronald", "Albus"],
        correctAnswer: "James"
    },
    {
        question: "2) What is Harry's owl's name?",
        answers: ["Alice", "Hedwig", "Phineus", "Billius"],
        correctAnswer: "Hedwig"
    },
    {
        question: "3) What is the first horcrux Harry finds?",
        answers: ["Diadem", "Cup", "Diary", "Locket"],
        correctAnswer: "Diary"
    },
    {
        question: "4) In what kind of car does Ron fly?",
        answers: ["Toyota Camry", "Ferrari Enzo", "Chevy Silverado", "Ford Anglia"],
        correctAnswer: "Ford Anglia"
    },
    {
        question: "5) What is Hermione's cat's name?",
        answers: ["Crookshanks", "Fezzywig", "Fluffy", "Tabitha"],
        correctAnswer: "Crookshanks"
    }
];

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    clock: 120,

    countdown: function () {
        game.clock--;
        $("#clockTime").html(game.clock);
        if (game.clock === 0) {
            console.log("TIMER HIT ZERO");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#timerPlaceCSS").prepend(
            "<h2>Time Remaining: <span id='clockTime'>120</span>seconds</h2>"
        );

        $("#startButtonCSS").remove();

        for (var i = 0; i < questionObjsArray.length; i++) {
            card.append("<h2>" + questionObjsArray[i].question + "</h2>");
            for (var j = 0; j < questionObjsArray[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i + "' value='" + questionObjsArray[i].answers[j] + "''>" + questionObjsArray[i].answers[j]);
            }
        }

        card.append("<button id='done'>DONE</button>");
    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questionObjsArray[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer);

        $("#timerPlaceCSS h2").remove();

        card.html("<h2>ALL DONE!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

//click events

$(document).on("click", "#startButtonCSS", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});




// ===================================================================
// ===================================================================
// ===================================================================
// ===================  stuff i tried first  =========================
// ===================================================================
// ===================================================================
// ===================================================================

// var q1 = {
//     question: "1) What is Harry Potter's middle name?",
//     answers: {
//         A: "James",
//         B: "Winston",
//         C: "Ronald",
//         D: "Albus",
//     },
//     correctAnswer: "A"
// }

// var q2 = {
//     question: "2) What is Harry's owl's name?",
//     answers: {
//         A: "Alice",
//         B: "Hedwig",
//         C: "Phineus",
//         D: "Billius",
//     },
//     correctAnswer: "B"
// }

// var q3 = {
//     question: "3) What is the first horcrux Harry finds?",
//     answers: {
//         A: "Diadem",
//         B: "Cup",
//         C: "Diary",
//         D: "Locket",
//     },
//     correctAnswer: "C"
// }

// var q4 = {
//     question: "4) In what kind of car does Ron fly?",
//     answers: {
//         A: "Toyota Camry",
//         B: "Ferrari Enzo",
//         C: "Chevy Silverado",
//         D: "Ford Anglia",
//     },
//     correctAnswer: "D"
// }

// var q5 = {
//     question: "5) What is Hermione's cat's name?",
//     answers: {
//         A: "Crookshanks",
//         B: "Fezzywig",
//         C: "Fluffy",
//         D: "Tabitha",
//     },
//     correctAnswer: "A"
// }

// var questionsArray = [q1, q2, q3, q4, q5];

// var score = 0;



// $( document ).ready(function() {
//     console.log( "ready!" );



//     $("#q1CSS").html(questionsArray[0].question);
//     $("#a1ButtonCSS").html(questionsArray[0].answers.A);
//     $("#b1ButtonCSS").html(questionsArray[0].answers.B);
//     $("#c1ButtonCSS").html(questionsArray[0].answers.C);
//     $("#d1ButtonCSS").html(questionsArray[0].answers.D);


//     $("#q2CSS").html(questionsArray[1].question);
//     $("#a2ButtonCSS").html(questionsArray[1].answers.A);
//     $("#b2ButtonCSS").html(questionsArray[1].answers.B);
//     $("#c2ButtonCSS").html(questionsArray[1].answers.C);
//     $("#d2ButtonCSS").html(questionsArray[1].answers.D);


//     $("#q3CSS").html(questionsArray[2].question);
//     $("#a3ButtonCSS").html(questionsArray[2].answers.A);
//     $("#b3ButtonCSS").html(questionsArray[2].answers.B);
//     $("#c3ButtonCSS").html(questionsArray[2].answers.C);
//     $("#d3ButtonCSS").html(questionsArray[2].answers.D);


//     $("#q4CSS").html(questionsArray[3].question);
//     $("#a4ButtonCSS").html(questionsArray[3].answers.A);
//     $("#b4ButtonCSS").html(questionsArray[3].answers.B);
//     $("#c4ButtonCSS").html(questionsArray[3].answers.C);
//     $("#d4ButtonCSS").html(questionsArray[3].answers.D);


//     $("#q5CSS").html(questionsArray[4].question);
//     $("#a5ButtonCSS").html(questionsArray[4].answers.A);
//     $("#b5ButtonCSS").html(questionsArray[4].answers.B);
//     $("#c5ButtonCSS").html(questionsArray[4].answers.C);
//     $("#d5ButtonCSS").html(questionsArray[4].answers.D);





//     if ($("a1ButtonCSS").on("click", function ())) {
//         score++;
//         console.log("q1worked")
//     } else if ($("b1ButtonCSS").on("click", function ())) {
//         score--;
//     } else if ($("c1ButtonCSS").on("click", function ())) {
//         score--;
//     } else if ($("d1ButtonCSS").on("click", function ()) {
//         score--;
//     }) else {console.log("idk???") };





//     $("#a1ButtonCSS").on("click", function (event) {
//         if (event.target.value === questionsArray[0].correctAnswer) {
//             score++;
//             console.log("q1worked")
//         } else {
//             score--;
//         }
//     });

//     $("#a1ButtonCSS").on("click", function (event) {
//         if (event.target.value === questionsArray[0].correctAnswer) {
//             score++;
//             console.log("q1worked")
//         } else {
//             score--;
//         }
//     });

//     $("body").on("click", "#q1CSS button", function () {
//         console.log("worked?")
//     })

// });