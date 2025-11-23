const quizQuestions = [
    {
        question: "Which company created the PlayStation console?",
        answer: "sony"
    },
    {
        question: "What is the name of Mario's brother?",
        answer: "luigi"
    },
    {
        question: "In Minecraft, what material do you need to go to the Nether?",
        answer: "obsidian"
    },
    {
        question: "What is the best-selling video game of all time?",
        answer: "minecraft"
    },
    {
        question: "Which game features the character 'Master Chief'?",
        answer: "halo"
    },
    {
        question: "Which battle royale game features characters like Pathfinder and Wraith?",
        answer: "apex legends"
    },
    {
        question: "In GTA V, what is the name of the city the game is set in?",
        answer: "los santos"
    },
    {
        question: "What is the main currency used in Fortnite?",
        answer: "v bucks"
    },
    {
        question: "In PUBG, how many players are in a classic match lobby?",
        answer: "100"
    },
    {
        question: "Which company makes the Nintendo Switch?",
        answer: "nintendo"
    }
];

function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question);

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    alert(`Quiz Complete! Your final score is ${score} out of ${quizQuestions.length}.`);
}

runQuiz();