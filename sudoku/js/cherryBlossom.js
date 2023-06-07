function cherryBlossom() {
  const section = document.querySelector('.cherry-blossom-container');

  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEl);

    setTimeout(() => {
      petalEl.remove();
    }, 10000);
  }

  setInterval(createPetal, 300);
}