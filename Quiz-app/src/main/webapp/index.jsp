<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <link rel="stylesheet" href="style.css"/>
    </head>
<body>
<div class="container">
    <div class="screen active" id="start-screen">
        <h1>Quiz time!</h1>
        <p>Kiểm tra hiểu biết của bạn qua các câu hỏi thú vị về DHV nhé!</p>
        <button id="start-btn">
            Bắt đầu nào!
        </button>
    </div>
    <div class="screen" id="quiz-screen">
        <div class="quiz-header">
            <h2 id="question-text">
                Câu hỏi tại đây 
            </h2>
            <div class="quiz-info">
                <p>
                    Câu hỏi số <span id="current-question">1</span> của <span id="total-questions">5</span>
                </p>
                <p>Điểm số <span id="score">0</span></p>
            </div>
        </div>
        <div id="answer-container" class="answer-container">
        </div>
        <div class="progres-bar">
            <div id="progress" class="progress">

            </div>

        </div>
    </div>
    <div id="result-screen" class="screen">
        <h1>Kết quả trắc nghiệm</h1>
        <div class="result-info">
            <p>Điểm số của bạn <span id="final-score">0</span> trong tổng số <span id="max-score">5</span></p>
            <div id="result-message">Hoàn thành!!!</div>
        </div>
        <button id="restart-btn">Khởi động lại!</button>
    </div>
</div>
</body>
</html>
