const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

// innerHeight: https://www.w3schools.com/jsref/prop_win_innerheight.asp
// getBoundingClientRect: https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp