const time = document.querySelector('.time');
const points = document.querySelector('.points');
const container = document.querySelector('.container');
const nextBtn = document.querySelector('.nxt-btn');
// const text = document.querySelector('.text');
let qNumber = 0;
let score = 0;
let T = 60;
// questions
const questions = [
  {
    questionText: 'Commonly used data types DO NOT include:',
    options: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    answer: '3. alerts',
  },
  {
    questionText: 'Arrays in JavaScript can be used to store ______.',
    options: [
      '1. numbers and strings',
      '2. other arrays',
      '3. booleans',
      '4. all of the above',
    ],
    answer: '4. all of the above',
  },
  {
    questionText:
      'String values must be enclosed within _____ when being assigned to variables.',
    options: ['1. commas', '2. curly brackets', '3. quotes', '4. parentheses'],
    answer: '3. quotes',
  },
  {
    questionText:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: [
      '1. JavaScript',
      '2. terminal/bash',
      '3. for loops',
      '4. console.log',
    ],
    answer: '4. console.log',
  },
  {
    questionText:
      'Which of the following is a statement that can be used to terminate a loop, switch or label statement?',
    options: ['1. break', '2. stop', '3. halt', '4. exit'],
    answer: '1. break',
  },
];

const createBtn = () => {
  questions[qNumber].options.map((item, index) => {
    const btn = document.createElement('button');
    container.appendChild(btn);
    btn.classList.add('optBtn');
    btn.innerText = questions[qNumber].options[index];
    btn.addEventListener('click', () => {
      if (questions[qNumber].options[index] == questions[qNumber].answer) {
        score += 10;
        points.innerText = score;
        container.children[index + 1].style.backgroundColor = 'green';
      } else {
        container.children[index + 1].style.backgroundColor = 'red';
        score -= 10;
      }
    });
  });
};

const displayQuestion = () => {
  const text = document.createElement('h1');
  container.appendChild(text);
  text.innerText = questions[qNumber].questionText;
  createBtn();
};
displayQuestion();

nextBtn.addEventListener('click', () => {
  qNumber++;
  container.innerHTML = '';
  displayQuestion();
});
// time interval

function interval() {
  T--;
  if (T == 0) {
    alert(`your score is ${(points.innerText = score)}`);
  }
  time.innerHTML = T;
  timeStop();
}
let timer = setInterval(interval, 1000);
// stop time
function timeStop() {
  if (T == 0) {
    clearInterval(timer);
  }
}
