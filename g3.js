fetch("https://raw.githubusercontent.com/3kh0/website-v4/main/assets/json/games.json")
.then((lessgooo) => lessgooo.json())
.then((games) => {
  games.forEach((game) => {
    const gamecontainmentchamber = document.createElement('div');
    const gamerdiv = document.querySelector('.frame-main');
    const gamesbutton = document.querySelector('.classes');
    const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
    const gamerframer = document.getElementById('homework');
    gamecontainmentchamber.className = 'class';
    gamecontainmentchamber.innerHTML = `<img src="${"https://raw.githack.com/3kh0/3kh0-assets/main/" + game.root + "/" + game.img}"/>`;
    gamecontainmentchamber.innerHTML += `<h1>${game.name}</h1>`;
    gamesbutton.appendChild(gamecontainmentchamber);

    gamecontainmentchamber.onclick = (e) => {
      gamesbutton.classList.add('hidden');
      gamerdiv.classList.remove('hidden');
      gamerframer.src = `https://raw.githack.com/3kh0/3kh0-assets/main/${game.root}/${game.file}`;
    };
    gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
      gamesbutton.classList.remove('hidden');
      gamerdiv.classList.add('hidden');
      gamerframer.src = '';
    });
    gamerNavigaton.querySelector('#fullscreen').addEventListener('click', (e) => {
      if (!document.fullscreenElement) {
          gamerframer.requestFullscreen();
      }
  });
});
})
.catch((e) => {
  alert('Error Classes Not Loaded');
  alert(e);
});