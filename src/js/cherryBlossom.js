function cherryBlossom() {
  const section = document.querySelector('.cherry-blossom-container');

  const createPetal = () => {
    const petalEi = document.createElement('span');
    petalEi.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const SIZE = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEi.style.width = `${SIZE}px`;
    petalEi.style.height = `${SIZE}px`;
    petalEi.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEi);

    setTimeout(() => {
      petalEi.remove();
    }, 10000);
  }

  setInterval(createPetal, 200);
}