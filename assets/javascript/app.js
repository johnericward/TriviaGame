// questions
var q1 = {
    question: "What is Harry Potter's middle name?",
    answers: {
        A: "James",
        B: "Winston",
        C: "Herbert",
        D: "Albus",
    },
    correctAnswer: "A"
};

var q1 = {
    question: "What is Harry Potter's middle name?",
    answers: {
        A: "James",
        B: "Winston",
        C: "Ronald",
        D: "Albus",
    },
    correctAnswer: "A"
}

var q2 = {
    question: "What is Harry's owl's name?",
    answers: {
        A: "Alice",
        B: "Hedwig",
        C: "Phineus",
        D: "Billius",
    },
    correctAnswer: "B"
}

var q3 = {
    question: "What is the first horcrux Harry finds?",
    answers: {
        A: "Diadem",
        B: "Cup",
        C: "Diary",
        D: "Locket",
    },
    correctAnswer: "C"
}

var q4 = {
    question: "In what kind of car does Ron fly?",
    answers: {
        A: "Toyota Camry",
        B: "Ferrari Enzo",
        C: "Chevy Silverado",
        D: "Ford Anglia",
    },
    correctAnswer: "D"
}

var q5 = {
    question: "What is Hermione's cat's name?",
    answers: {
        A: "Crookshanks",
        B: "Fezzywig",
        C: "Fluffy",
        D: "Tabitha",
    },
    correctAnswer: "A"
}

var questionsArray = [q1, q2, q3, q4, q5];

var score = 0;


$( document ).ready(function() {
    console.log( "ready!" );

// function getQuestion(qNum) {
//     $("#qs1CSS").text(questionsArray[qNum].question)
//     $("#aButtonCSS").text(questionsArray[qNum].answers.A)
//     $("#bButtonCSS").text(questionsArray[qNum].answers.B)
//     $("#cButtonCSS").text(questionsArray[qNum].answers.C)
//     $("#dButtonCSS").text(questionsArray[qNum].answers.D)
// }
    
    $("#q1CSS").html(questionsArray[0].question);
    $("#a1ButtonCSS").html(questionsArray[0].answers.A);
    $("#b1ButtonCSS").html(questionsArray[0].answers.B);
    $("#c1ButtonCSS").html(questionsArray[0].answers.C);
    $("#d1ButtonCSS").html(questionsArray[0].answers.D);


    $("#q2CSS").html(questionsArray[1].question);
    $("#a2ButtonCSS").html(questionsArray[1].answers.A);
    $("#b2ButtonCSS").html(questionsArray[1].answers.B);
    $("#c2ButtonCSS").html(questionsArray[1].answers.C);
    $("#d2ButtonCSS").html(questionsArray[1].answers.D);


    $("#q3CSS").html(questionsArray[2].question);
    $("#a3ButtonCSS").html(questionsArray[2].answers.A);
    $("#b3ButtonCSS").html(questionsArray[2].answers.B);
    $("#c3ButtonCSS").html(questionsArray[2].answers.C);
    $("#d3ButtonCSS").html(questionsArray[2].answers.D);

    
    $("#q4CSS").html(questionsArray[3].question);
    $("#a4ButtonCSS").html(questionsArray[3].answers.A);
    $("#b4ButtonCSS").html(questionsArray[3].answers.B);
    $("#c4ButtonCSS").html(questionsArray[3].answers.C);
    $("#d4ButtonCSS").html(questionsArray[3].answers.D);


    $("#q5CSS").html(questionsArray[4].question);
    $("#a5ButtonCSS").html(questionsArray[4].answers.A);
    $("#b5ButtonCSS").html(questionsArray[4].answers.B);
    $("#c5ButtonCSS").html(questionsArray[4].answers.C);
    $("#d5ButtonCSS").html(questionsArray[4].answers.D);


    // $("#score").html(score);

    // $("#a1ButtonCSS").on("click", function () {
    //     score++ ,
    // });

});