(() => {
  const questions = window.ZHONGSHAN_QUESTIONS;
  const storageKey = 'zhongshan-grade9-first-exam-progress-v1';
  const defaultState = { current: 1, answers: {} };
  let state = loadState();
  let selectedAnswer = null;

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const elements = {
    cover: $('#cover'),
    exam: $('#exam'),
    start: $('#start-btn'),
    resume: $('#resume-btn'),
    home: $('#home-btn'),
    menu: $('#menu-btn'),
    menuBottom: $('#menu-bottom-btn'),
    closeMenu: $('#close-menu-btn'),
    drawer: $('#question-drawer'),
    scrim: $('#drawer-scrim'),
    grid: $('#question-grid'),
    clear: $('#clear-progress-btn'),
    answeredCount: $('#answered-count'),
    progressBar: $('#progress-bar'),
    number: $('#question-number'),
    unit: $('#unit-label'),
    topic: $('#question-topic'),
    image: $('#question-image'),
    passage: $('#passage-image'),
    scroll: $('#question-scroll'),
    submit: $('#submit-btn'),
    retry: $('#retry-btn'),
    hint: $('#selection-hint'),
    feedback: $('#feedback'),
    feedbackIcon: $('.feedback-icon'),
    feedbackTitle: $('#feedback-title'),
    feedbackAnswer: $('#feedback-answer'),
    feedbackExplanation: $('#feedback-explanation'),
    prev: $('#prev-btn'),
    next: $('#next-btn'),
    answerButtons: $$('.answer-btn'),
  };

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey));
      if (!parsed || typeof parsed !== 'object') return structuredClone(defaultState);
      return {
        current: Math.min(50, Math.max(1, Number(parsed.current) || 1)),
        answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
      };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function queryQuestion() {
    const value = Number(new URLSearchParams(location.search).get('q'));
    return Number.isInteger(value) && value >= 1 && value <= 50 ? value : null;
  }

  function updateUrl(number) {
    const url = new URL(location.href);
    url.searchParams.set('q', number);
    history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function showExam(number = state.current) {
    elements.cover.hidden = true;
    elements.exam.hidden = false;
    goToQuestion(number);
  }

  function showCover() {
    closeDrawer();
    elements.exam.hidden = true;
    elements.cover.hidden = false;
    const url = new URL(location.href);
    url.searchParams.delete('q');
    history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function goToQuestion(number) {
    state.current = Math.min(50, Math.max(1, number));
    saveState();
    updateUrl(state.current);
    renderQuestion();
  }

  function renderQuestion() {
    const question = questions[state.current - 1];
    const record = state.answers[state.current];
    selectedAnswer = record?.choice || null;

    elements.number.textContent = question.number;
    elements.unit.textContent = question.unit;
    elements.topic.textContent = question.topic;
    elements.image.src = question.image;
    elements.image.alt = `第 ${question.number} 題題目：${question.topic}`;
    elements.passage.hidden = !question.passage;
    if (question.passage) elements.passage.src = question.passage;

    elements.answerButtons.forEach((button) => {
      const value = button.dataset.answer;
      button.disabled = Boolean(record?.submitted);
      button.className = 'answer-btn';
      button.setAttribute('aria-pressed', String(value === selectedAnswer));
      if (value === selectedAnswer) button.classList.add('selected');
      if (record?.submitted && value === question.answer) button.classList.add('correct');
      if (record?.submitted && value === record.choice && !record.correct) button.classList.add('incorrect');
    });

    elements.submit.hidden = Boolean(record?.submitted);
    elements.submit.disabled = !selectedAnswer;
    elements.retry.hidden = !record?.submitted;
    elements.hint.hidden = Boolean(record?.submitted || selectedAnswer);
    elements.feedback.hidden = !record?.submitted;
    elements.feedback.className = `feedback${record?.correct ? ' is-correct' : record?.submitted ? ' is-incorrect' : ''}`;

    if (record?.submitted) {
      elements.feedbackIcon.textContent = record.correct ? '✓' : '!';
      elements.feedbackTitle.textContent = record.correct ? '答對了，判讀很精準！' : '再校準一次觀念就好';
      elements.feedbackAnswer.textContent = `正確答案：${question.answer}`;
      elements.feedbackExplanation.textContent = question.explanation;
    }

    elements.prev.disabled = state.current === 1;
    elements.next.disabled = state.current === 50;
    elements.scroll.scrollTop = 0;
    renderProgress();
    renderQuestionGrid();
  }

  function selectAnswer(answer) {
    const record = state.answers[state.current];
    if (record?.submitted) return;
    selectedAnswer = answer;
    state.answers[state.current] = { choice: answer, submitted: false, correct: false };
    saveState();
    renderQuestion();
  }

  function submitAnswer() {
    if (!selectedAnswer) return;
    const question = questions[state.current - 1];
    state.answers[state.current] = {
      choice: selectedAnswer,
      submitted: true,
      correct: selectedAnswer === question.answer,
    };
    saveState();
    renderQuestion();
    elements.feedback.focus({ preventScroll: true });
    elements.scroll.scrollTo({ top: elements.scroll.scrollHeight, behavior: 'smooth' });
  }

  function retryQuestion() {
    delete state.answers[state.current];
    selectedAnswer = null;
    saveState();
    renderQuestion();
  }

  function renderProgress() {
    const submitted = Object.values(state.answers).filter((answer) => answer?.submitted).length;
    elements.answeredCount.textContent = `${submitted} / 50`;
    elements.progressBar.style.width = `${submitted * 2}%`;
    elements.resume.hidden = submitted === 0;
    if (submitted > 0) elements.resume.textContent = `繼續上次進度（${submitted} / 50）`;
  }

  function renderQuestionGrid() {
    elements.grid.replaceChildren(...questions.map((question) => {
      const button = document.createElement('button');
      const record = state.answers[question.number];
      button.type = 'button';
      button.textContent = question.number;
      button.title = `第 ${question.number} 題：${question.topic}`;
      if (question.number === state.current) button.classList.add('current');
      if (record?.submitted) button.classList.add(record.correct ? 'correct' : 'incorrect');
      button.addEventListener('click', () => {
        goToQuestion(question.number);
        closeDrawer();
      });
      return button;
    }));
  }

  function openDrawer() {
    elements.drawer.classList.add('open');
    elements.drawer.setAttribute('aria-hidden', 'false');
    elements.menu.setAttribute('aria-expanded', 'true');
    elements.scrim.hidden = false;
    elements.closeMenu.focus();
  }

  function closeDrawer() {
    elements.drawer.classList.remove('open');
    elements.drawer.setAttribute('aria-hidden', 'true');
    elements.menu.setAttribute('aria-expanded', 'false');
    elements.scrim.hidden = true;
  }

  function clearProgress() {
    if (!confirm('確定要清除 50 題的全部作答紀錄嗎？此動作無法復原。')) return;
    state = structuredClone(defaultState);
    selectedAnswer = null;
    localStorage.removeItem(storageKey);
    goToQuestion(1);
    closeDrawer();
  }

  elements.start.addEventListener('click', () => showExam(1));
  elements.resume.addEventListener('click', () => showExam(state.current));
  elements.home.addEventListener('click', showCover);
  elements.menu.addEventListener('click', openDrawer);
  elements.menuBottom.addEventListener('click', openDrawer);
  elements.closeMenu.addEventListener('click', closeDrawer);
  elements.scrim.addEventListener('click', closeDrawer);
  elements.clear.addEventListener('click', clearProgress);
  elements.prev.addEventListener('click', () => goToQuestion(state.current - 1));
  elements.next.addEventListener('click', () => goToQuestion(state.current + 1));
  elements.submit.addEventListener('click', submitAnswer);
  elements.retry.addEventListener('click', retryQuestion);
  elements.answerButtons.forEach((button) => button.addEventListener('click', () => selectAnswer(button.dataset.answer)));

  document.addEventListener('keydown', (event) => {
    if (elements.exam.hidden) return;
    if (event.key === 'Escape') return closeDrawer();
    if (elements.drawer.classList.contains('open')) return;
    if (event.key === 'ArrowLeft' && state.current > 1) goToQuestion(state.current - 1);
    if (event.key === 'ArrowRight' && state.current < 50) goToQuestion(state.current + 1);
    const answerMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', a: 'A', b: 'B', c: 'C', d: 'D' };
    if (answerMap[event.key.toLowerCase()]) selectAnswer(answerMap[event.key.toLowerCase()]);
    if (event.key === 'Enter') submitAnswer();
  });

  renderProgress();
  renderQuestionGrid();
  const directQuestion = queryQuestion();
  if (directQuestion) showExam(directQuestion);
})();
