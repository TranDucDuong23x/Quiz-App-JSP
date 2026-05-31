const startScreen=document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')
const startButton = document.getElementById('start-btn')
const questionText = document.getElementById('question-text')
const answerContainer = document.getElementById('answer-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-question');
const scoreSpan = document.getElementById('score')
const finalScoreSpan = document.getElementById('final-score')
const maxScoreSpan = document.getElementById('max-score')
const resultMessage = document.getElementById('result-message')
const restartButton = document.getElementById('restart-btn')
const progressBar = document.getElementById('progress')
const quizQuestion = [
    {
        question: "Mã trường đại học hùng vương Tp.HCM là gì?",
        answers:[
            {text:"HHD", correct:false},
            {text:"VHD", correct:false},
            {text:"DHV", correct:true},
            {text:"VVH" , correct:false}
        ]
    },
    {
        question:"Cơ sở chính của trường tại đường nào?",
        answers:[
            {text:"Nguyễn Trãi",correct:false},
            {text:"Lê Đức Thọ",correct:true},
            {text:"Kinh dương vương",correct:false},
            {text:"New York", correct:false}
        ]
    },
    {
        question: "Tên linh vật của trường là gì?",
        answers:[
            {text:"Heo đi bộ",correct:false},
            {text:"Con vịt",correct:false},
            {text:"Trống đồng",correct:false},
            {text:"Lạc Lạc",correct:true}
        ]
    },
    {
        question: "Trường có bao nhiêu khoa?",
        answers:[
            {text:"5",correct:false},
            {text:"6",correct:false},
            {text:"7",correct:false},
            {text:"8", correct:true}
        ]
    },
    {
        question: "Trường có bao nhiêu viện?",
        answers:[
            {text:"6",correct:false},
            {text:"8",correct:false},
            {text:"5",correct:true},
            {text:"2",correct:false}
        ]
    }
]
let currentQuestionIndex = 0;
let score = 0;
let answerDisable=false;

totalQuestionSpan.textContent = quizQuestion.length
maxScoreSpan.textContent = quizQuestion.length

startButton.addEventListener("click",() => {
    console.log("quiz start!")
    currentQuestionIndex = 0;
    score=0;
    scoreSpan.textContent = 0;
    startScreen.classList.remove('active')
    startScreen.classList.add('active')
    showQuestion();
});
function showQuestion(){
    answersDisable=false;
    const currentQuestion = quizQuestion[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex/quizQuestion.length)*100;
    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;
    answerContainer.innerHTML = "";
    currentQuestion.answers.forEach((answers) => {
        const button= document.createElement("button");
        button.textContent = answers.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answers.correct;
        answerContainer.appendChild(button);
    })
}