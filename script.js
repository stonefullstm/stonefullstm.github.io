const itemPerfil = document.getElementById('item-perfil');
const habilidades = document.getElementById('habilidades');
const projetos = document.getElementById('projetos');
itemPerfil.addEventListener('click', () => {
  habilidades.style.display = 'none';
  projetos.style.display = 'none';
});

const itemHabilidades = document.getElementById('item-habilidades');
itemHabilidades.addEventListener('click', () => {
  habilidades.style.display = 'block';
  projetos.style.display = 'none';
});

const itemProjetos = document.getElementById('item-projetos');
itemProjetos.addEventListener('click', () => {
  habilidades.style.display = 'none';
  projetos.style.display = 'block';
});