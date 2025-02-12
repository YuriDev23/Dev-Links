console.log("script.js carregado");

function toggleMode() {
  const html = document.documentElement;
  
  console.log("Modo trocado");  // Verificar se o evento de clique chama a função

  if (html.classList.contains('light')) {
    html.classList.remove('light');
  } else {
    html.classList.add('light');
  }
}

