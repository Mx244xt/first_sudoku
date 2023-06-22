function cherryBlossom() {
  const SECTION = document.querySelector('.cherry-blossom-container');

  const createPetal = () => {
    const PETAL_EI = document.createElement('span');
    PETAL_EI.className = 'petal';
    const MIN_SIZE = 10;
    const MAX_SIZE = 15;
    const SIZE = Math.random() * (MAX_SIZE + 1 - MIN_SIZE) + MIN_SIZE;
    PETAL_EI.style.width = `${SIZE}px`;
    PETAL_EI.style.height = `${SIZE}px`;
    PETAL_EI.style.left = Math.random() * innerWidth + 'px';
    SECTION.appendChild(PETAL_EI);

    setTimeout(() => {
      PETAL_EI.remove();
    }, 10000);
  }

  setInterval(createPetal, 200);
}