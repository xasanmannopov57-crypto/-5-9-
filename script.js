// Массив с вопросами (всего 25 штук)
const questions = [
    { q: "В каком году произошло Крещение Руси?", a: ["988", "1147", "1242", "862"], correct: 0 },
    { q: "Кто был первым царем из династии Романовых?", a: ["Петр I", "Алексей Михайлович", "Михаил Федорович", "Иван Грозный"], correct: 2 },
    { q: "Ледовое побоище произошло на озере:", a: ["Ладожском", "Чудском", "Онежском", "Байкал"], correct: 1 },
    { q: "В каком году началась Первая мировая война?", a: ["1905", "1914", "1917", "1939"], correct: 1 },
    { q: "Кто провел реформу отмены крепостного права?", a: ["Николай I", "Александр I", "Александр II", "Александр III"], correct: 2 },
    // Добавьте свои вопросы ниже по такому же шаблону:
    { q: "Как называлось египетское письмо?", a: ["Клинопись", "Иероглифы", "Латынь", "Кириллиц"], correct: 0 },
    { q: "Кто, согласно легенде, основал город Рим?", a: ["Цезарь", "Александр Македонский", "Ромул", "Леонид"], correct: 2 },
    { q: "Кто крестил Русь?", a: ["Владимир Святославич", "Ярослав Мудрый", "Олег Вещий", "Игорь Рюрикович"], correct: 0 },			
    { q: "Как назывался свод законов в Древней Руси?", a: ["Судебник", "Русская правда", "Домострой", "Уложение"], correct: 1 },		
    { q: "Кто основал Москву?", a: ["Иван Грозный", "Юрий Долгорукий", "Александр Невский", "Дмитрий Донской"], correct: 1 },			
    { q: "Какое событие произошло в 1380 году?", a: ["Стояние на Угре", "Куликовская битва", "Ледовое побоище", "Невская битва"], correct: 1 },			
    { q: "Кто был первым русским царем?", a: ["Петр I", "Иван III", "Иван IV", "Алексей Михайлович"], correct: 2 },				
    { q: "Как назывался период раздробленности Руси?", a: ["Смутное время", "Феодальная раздробленность", "Ордынское иго", "Реформы"], correct: 1 },			
    { q: "Кто возглавил народное ополчение в 1612 году?", a: ["Иван Грозный", "Дмитрий Донской", "Кузьма Минин и Дмитрий Пожарский", "Александр Невский"], correct: 2 },			
    { q: "Как называлась война 1812 года?", a: ["Северная война", "Крымская война", "Отечественная война", "Первая мировая"], correct: 2 },		
    { q: "Кто был императором во время войны 1812 года?", a: ["Николай I", "Александр I", "Петр I", "Александр II"], correct: 1 },			
    { q: "Когда было отменено крепостное право?", a: ["1801", "1825", "1861", "1905"], correct: 2 },		
    { q: "Кто провел отмену крепостного права?", a: ["Петр I", "Александр II", "Николай II", "Иван IV"], correct: 1 },		
    { q: "Когда произошла Октябрьская революция?", a: ["1905", "1917", "1922", "1939"], correct: 1 },		
    { q: "Кто был лидером большевиков?", a: ["Сталин", "Троцкий", "Ленин", "Керенский"], correct: 2 },		
    { q: "Когда началась Великая Отечественная война?", a: ["1939", "1940", "1941", "1945"], correct: 2 },		
    { q: "Какой город выдержал блокаду во время ВОВ?", a: ["Москва", "Сталинград", "Ленинград", "Киев"], correct: 2 },
    
];

let currentQuestionIndex = 0;
let score = 0;

// Элементы со страницы
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressText = document.getElementById('progress');
const nextBtn = document.getElementById('next-btn');
const quizBox = document.getElementById('quiz');
const resultBox = document.getElementById('result-container');
const finalScoreText = document.getElementById('final-score');

// Функция запуска вопроса
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Обновляем текст вопроса и счетчик
    progressText.innerText = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
    questionText.innerText = currentQuestion.q;
    
    // Очищаем старые варианты и создаем новые
    optionsContainer.innerHTML = '';
    currentQuestion.a.forEach((answer, index) => {
        const div = document.createElement('div');
        div.classList.add('option-item');
        div.innerHTML = `
            <input type="radio" name="answer" id="alt${index}" value="${index}">
            <label for="alt${index}">${answer}</label>
        `;
        div.onclick = () => div.querySelector('input').checked = true;
        optionsContainer.appendChild(div);
    });
}

// Логика нажатия кнопки "Далее"
nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Пожалуйста, выберите ответ!");
        return;
    }

    // Проверяем правильность
    if (parseInt(selectedOption.value) === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// Показ финала
function showResults() {
    quizBox.classList.add('hidden');
    nextBtn.classList.add('hidden');
    resultBox.classList.remove('hidden');
    finalScoreText.innerText = `Вы ответили правильно на ${score} из ${questions.length} вопросов.`;
}

// Первый запуск
showQuestion();
