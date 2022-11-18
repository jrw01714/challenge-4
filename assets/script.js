let shuffledQuestions = []
let paragraph = document.getElementById("questions")

function mixQuestions() { 
    while (shuffledQuestions.length <= 8) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

const questions = [{
        question: "What is a Query Selector?",
        A: "I dont know, some kind of slur?",
        B: "A little thingie that you can do in javascript or something",
        C: "A way of getting a book from a library by asking the clerk politely",
        D: "A built-in javascript method for getting information from the DOM",
        correct: "D"
    }, {
        question: "What is the largest integer you can store in JS? (not BigInt)",
        A: "2^64",
        B: "a gazillion and one",
        C: "more than a hundred",
        D: "(2^1024)-1",
        correct: "D"
    }, {
        question: "In what year was Bootstrap created?",
        A: "1956",
        B: "2011",
        C: "Like, 2010?",
        D: "June 15th, 1215",
        correct: "C"
    }, {
        question: "What do 'for' loops do?",
        A: "Do something four times",
        B: "It's a thingie in javascript",
        C: "Do something as long as theres a thing to do or something",
        D: "You like do somethings for every item in a list or array",
        correct: "D"
    }, {
        question: "How long can a 'while' loop run for?",
        A: "30 hours",
        B: "Until the machine craps out, basically",
        C: "What is a Whylloop?",
        D: "Forever and ever",
        correct: "B"
    }, {
        question: "How many questions have you gotten right so far?",
        A: "11",
        B: "All of them, because I'm like sooooo smart :3",
        C: `${playerScore}`,
        D: "I was supposed to count??????",
        correct: "C"
    }, {
        question: "Why can't you just have the computer do it all for you?",
        A: "Computers are stupid",
        B: "The world is a cruel and unjust place",
        C: "...I never thought of that, why can't they?",
        D: "Cause the computer would get sad",
        correct: "A"
    }, {
        question: "How many primative types are there in JS?",
        A: "Too many",
        B: "7, I think",
        C: "BigInt(9^9^9^9^9^9^9^9^9^9^9)",
        D: "like, 8",
        correct: "B"
    }]


    
paragraph.textContent = JSON.stringify(questions)