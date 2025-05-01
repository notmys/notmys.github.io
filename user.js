// user.js
function loadDiscordUser() {
  const userInfo = document.getElementById('user-info');
  const avatar = document.getElementById('user-avatar');
  const username = document.getElementById('username');
  const loginBtn = document.getElementById('discord-login-btn');

  const userData = localStorage.getItem('discordUser');
  if (!userData) return;

  try {
    const user = JSON.parse(userData);
    const avatarUrl = user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
      : 'https://cdn.discordapp.com/embed/avatars/0.png';

    if (avatar) avatar.src = avatarUrl;
    if (username) username.textContent = `${user.username}#${user.discriminator}`;
    if (userInfo) userInfo.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';
  } catch (e) {
    console.error('Invalid Discord user data in localStorage.');
  }
}

window.addEventListener('load', loadDiscordUser);
