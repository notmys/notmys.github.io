// user.js
function loadAnyUser() {
  const userInfo = document.getElementById('user-info');
  const avatar = document.getElementById('user-avatar');
  const usernameElem = document.getElementById('username');
  const loginBtn = document.getElementById('discord-login-btn');
  const createBtn = document.getElementById('create-btn');
  const loginBtnMain = document.getElementById('login-btn'); // optional main site login

  const discordData = localStorage.getItem('discordUser');
  const customData = localStorage.getItem('customUser');

  let user = null;
  let avatarUrl = 'https://cdn.discordapp.com/embed/avatars/0.png';

  if (discordData) {
    try {
      user = JSON.parse(discordData);
      avatarUrl = user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : avatarUrl;
    } catch (e) {
      console.error('Invalid Discord user data.');
    }
  } else if (customData) {
    try {
      user = JSON.parse(customData);
      avatarUrl = user.avatar || avatarUrl;
    } catch (e) {
      console.error('Invalid custom user data.');
    }
  }

  if (!user) return;

  if (avatar) avatar.src = avatarUrl;
  if (usernameElem) usernameElem.textContent = `${user.username}#${user.discriminator}`;
  if (userInfo) userInfo.style.display = 'flex';
  if (loginBtn) loginBtn.style.display = 'none';
  if (createBtn) createBtn.style.display = 'none';
  if (loginBtnMain) loginBtnMain.style.display = 'none';
}

window.addEventListener('load', loadAnyUser);
