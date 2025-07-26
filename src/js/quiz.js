import questions from '../data/questions.json' assert { type: 'json' };

const container = document.getElementById('quiz-container');
let current = 0;
let answers = [];

function renderQuestion() {
  if (current >= questions.length) {
    container.innerHTML = `<p class="font-bold">Thanks for completing the quiz!</p>`;
    return;
  }
  const q = questions[current];
  container.innerHTML = `
    <div class="mb-4">
      <p class="mb-2">${q.question}</p>
      ${q.options.map((o,i)=>`<button class='answer border px-4 py-2 m-1' data-index="${i}">${o}</button>`).join('')}
    </div>
  `;
  container.querySelectorAll('.answer').forEach(btn => {
    btn.addEventListener('click', () => {
      answers[current] = btn.dataset.index;
      current++;
      renderQuestion();
    });
  });
}

document.addEventListener('DOMContentLoaded', renderQuestion);
export { answers };
