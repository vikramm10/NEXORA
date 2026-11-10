const toast = (message) => {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__nexoraToast);
  window.__nexoraToast = setTimeout(() => el.classList.remove('show'), 2600);
};

document.querySelectorAll('.side-link[data-page]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.side-link[data-page]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const page = button.dataset.page;
    const title = document.getElementById('pageTitle');
    const crumb = document.getElementById('crumb');
    if (title) title.innerHTML = `${page}. <span>Your workspace is ready to grow.</span>`;
    if (crumb) crumb.textContent = page;
    if (page !== 'Overview') toast(`${page} is part of the NEXORA roadmap. We're building it step by step.`);
    document.getElementById('sidebar')?.classList.remove('open');
  });
});

document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('sidebar')?.classList.toggle('open');
});
document.getElementById('newTaskBtn')?.addEventListener('click', () => toast('Task creation is coming in the next development milestone.'));
document.getElementById('addAgenda')?.addEventListener('click', () => toast('Your priority planner is coming soon.'));
document.getElementById('aiInfoBtn')?.addEventListener('click', () => toast('AI features will be connected after the workspace foundation.'));
document.getElementById('exploreBtn')?.addEventListener('click', () => toast('Welcome to the NEXORA product roadmap.'));
document.getElementById('searchInput')?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.value.trim()) toast(`Search will be enabled for: ${event.target.value.trim()}`);
});
