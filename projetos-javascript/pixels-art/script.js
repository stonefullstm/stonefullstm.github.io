// Source: https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
}

function definePaletteColor() {
  const colors = ['black'];
  for (let index = 1; index <= 3; index += 1) {
    colors.push(generateRandomColor());
  }
  const palette = document.getElementsByClassName('color');
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].style.backgroundColor = colors[index];
  }
}

function selectPaletteColor() {
  const palette = document.getElementsByClassName('color');
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      selectedColor.style.width = '40px';
      selectedColor.style.height = '40px';
      palette[index].classList.add('selected');
      palette[index].style.width = '42px';
      palette[index].style.height = '42px';
    });
  }
}

function paintPixel() {
  // aqui você pega todos os elementos pixel (cada caixa na grid)
  const pixels = document.getElementsByClassName('pixel');
  // aqui você percorre cada um desses elementos e adiciona o event listener
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      // aqui você pega o backgroundColor da cor que tem o selected
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      // aqui você atribui a cor que pegou acima no pixel
      pixels[index].style.backgroundColor = selectedColor;
    });
  }
}

function unpaintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('dblclick', () => {
      pixels[index].style.backgroundColor = 'white';
    });
  }
}

function clearBoard() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function removeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function createGrid(size) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.gridTemplateColumns = '40px '.repeat(size);
  pixelBoard.style.gridTemplateRows = '40px '.repeat(size);
  for (let index = 1; index <= size * size; index += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    pixelBoard.appendChild(pixelDiv);
  }
  paintPixel();
  unpaintPixel();
}

function resizeBoard() {
  const buttonVQV = document.getElementById('generate-board');
  buttonVQV.addEventListener('click', () => {
    const input = document.getElementById('board-size');
    if (input.value > 0) {
      removeBoard();
      createGrid(input.value);
    } else {
      alert('Board inválido!');
    }
  });
}

function selectBlack() {
  const palette = document.getElementsByClassName('color');
  palette[0].classList.add('selected');
  palette[0].style.width = '42px';
  palette[0].style.height = '42px';
}

function defineInputLimits() {
  const input = document.getElementById('board-size');
  input.addEventListener('blur', () => {
    if (input.value < 5) {
      input.value = '5';
    }
    if (input.value > 50) {
      input.value = '50';
    }
  });
}

createGrid(5);
resizeBoard();
definePaletteColor();
selectBlack();
selectPaletteColor();
clearBoard();
paintPixel();
unpaintPixel();
defineInputLimits();
