const cover = document.getElementById('cover');

function openInvitation() {
  if (document.body.classList.contains('invite-open')) return;
  document.body.classList.add('invite-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  window.setTimeout(() => {
    cover.setAttribute('aria-hidden', 'true');
  }, 950);
}

cover.addEventListener('click', openInvitation);
cover.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openInvitation();
  }
});

// İlk ekran zarf gibi kilitli kalsın, tıklandıktan sonra alttaki davetiye sayfası kaydırılabilir.
document.body.classList.add('is-locked');
