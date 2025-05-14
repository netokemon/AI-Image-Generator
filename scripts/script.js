let index = 0;
const carrossel = document.getElementById("carrossel");
const itemLargura = 320;

function avancar(){
    if(index < carrossel.children.length - 1){
        index++;
        carrossel.style.transform = `translateX(-${itemLargura * index}px)`;
    }
}

function voltar() {
    if (index > 0) {
      index--;
      carrossel.style.transform = `translateX(-${itemLargura * index}px)`;
    }
  }