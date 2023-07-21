const questions = [
    {
      question: "Qual é a nacionalidade de Wangari Maathai?",
      options: {
        a: "Queniana",
        b: "Nigeriana",
        c: "Sul-africana",
        d: "Senegalesa"
      },
      correctAnswer: "a",
      answer: null
    },
    {
      question: "Em que ano Wangari Maathai foi agraciada com o Prêmio Nobel da Paz?",
      options: {
        a: "1998",
        b: "2004",
        c: "2010",
        d: "2016"
      },
      correctAnswer: "b",
      answer: null
    },
    {
      question: "Qual foi o movimento ambiental fundado por Wangari Maathai?",
      options: {
        a: "Greenpeace",
        b: "Movimento Cinturão Verde",
        c: "Amigos da Terra",
        d: "Extinction Rebellion"
      },
      correctAnswer: "b",
      answer: null
    },
    {
      question: "Wangari Maathai foi a primeira mulher africana a receber o Prêmio Nobel da Paz.",
      options: {
        a: "Verdadeiro",
        b: "Falso"
      },
      correctAnswer: "a",
      answer: null
    },
    {
      question: "Além do ativismo ambiental, Wangari Maathai também se envolveu na política e foi eleita para o parlamento do seu país.",
      options: {
        a: "Verdadeiro",
        b: "Falso"
      },
      correctAnswer: "a",
      answer: null
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");
    const optionD = document.getElementById("optionD");
  
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionA.textContent = currentQuestion.options.a;
      optionB.textContent = currentQuestion.options.b;
      optionC.textContent = currentQuestion.options.c;
      optionD.textContent = currentQuestion.options.d;
    } else {
      showResult();
    }
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.answer = selectedOption;
    if (currentQuestion.answer === currentQuestion.correctAnswer) {
      score++;
    }
    showResult();
  }
  
  function showResult() {
    const resultElement = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
    resultElement.textContent = "Sua pontuação: " + score + "/" + questions.length;
    nextBtn.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    const resultElement = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
    resultElement.textContent = "";
    nextBtn.style.display = "none";
  }
  
  showQuestion();
  