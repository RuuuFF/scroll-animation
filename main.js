const boxes = document.querySelectorAll('.box');

// Adicionando um ouvidor de eventos do tipo rolagem em "window"
window.addEventListener('scroll', checkBoxes);

// Chamando a função para exibir o conteúdo assim que a pagina for carregada
checkBoxes();

function checkBoxes() {
  // Pega o tamanho do viewport, divide por 5 e multiplica por 4
  const triggerBottom = window.innerHeight / 5 * 4;
  
  // Para cada item de "boxes"
  boxes.forEach(box => {
    // Pega a parte superior de cada "box" no documento e fornece sua posição relativa ao view port
    const boxTop = box.getBoundingClientRect().top;
    
    // Se a posição do elemento for menor que "triggerBottom", ele passa
    if (boxTop < triggerBottom) {
      // Adiciona a classe "show" no elemento
      box.classList.add('show');
    } else {
      // Se a posição de "box", relativa ao viewport, for maior, remove a classe "show" do elemento
      box.classList.remove('show');
    }
  });
}

// innerHeight: https://www.w3schools.com/jsref/prop_win_innerheight.asp
// getBoundingClientRect: https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp