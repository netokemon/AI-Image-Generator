let index = 0;
const carrossel = document.getElementById("carrossel");
const itemLargura = 320;
const divImagemGerada = document.getElementById("resultado-imagem");
const imagemResultado = document.getElementById("imagem-gerada");
const API_KEY = "Insira a sua aqui! :D";
const API_URL = "Inserir aqui! :D";

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


function ativarImagem(){
  divImagemGerada.style.display = 'block';
}

setTimeout(function() {
    document.querySelector('.popup-container').classList.add('mostrar');
}, 1000);

function fecharPopup() {
    document.querySelector('.popup-container').classList.remove('mostrar');
}

document.querySelector('.popup-container').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharPopup();
    }
});


function ativarImagem(){
  document.getElementById("botao-gerar").disabled = true;
  const prompt = document.getElementById("input-gerar").value;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + API_KEY);

  if(!prompt){
    alert('Insira uma descrição antes de gerar uma imagem.');
    return;
  }

  setLoadingState(true);

  const formdata = new FormData();
  formdata.append("prompt", prompt);
  formdata.append("style", "realistic");
  formdata.append("aspect_ratio", "1:1");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch(API_URL, requestOptions)
   .then(response => response.blob())
   .then(blob => {
      const imageURL = URL.createObjectURL(blob);
      imagemResultado.src = imageURL;
   })
   .catch(error => {
      console.log('error', error);
      alert('Um erro ocorreu ao gerar a imagem.');
   })
   .finally(() => {
      setLoadingState(false);
      document.getElementById("input-gerar").value = "";
      document.getElementById("botao-gerar").disabled = false;
   });


}

function setLoadingState(isLoading){
  if(isLoading){
    divImagemGerada.style.display = 'block';
    imagemResultado.src = "assets/loading-gif.gif"
  }
  else{
    divImagemGerada.style.display = 'block';
  }
}