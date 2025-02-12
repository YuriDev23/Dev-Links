console.log("script.js carregado");

function toggleMode() {
  const html = document.documentElement;

  console.log("Modo trocado");  // Verificar se o evento de clique chama a função

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light'); // Armazena a preferência no localStorage
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Armazena a preferência no localStorage
  }
}

// Verifica a preferência do tema ao carregar a página
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.classList.add(savedTheme);
  } else {
    html.classList.add('light'); // Define o tema claro como padrão
  }
};

