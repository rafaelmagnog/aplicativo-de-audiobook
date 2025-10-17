const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  audio.play();
  taTocando = true;
  console.log("Tocando...");

  botaoPlayPause.classList.add("tocando");
}
function pausarFaixa() {
  audio.pause();
  taTocando = false;
  console.log("Pausado.");

  botaoPlayPause.classList.remove("tocando");
}
function tocarOuPausar() {
  taTocando ? pausarFaixa() : tocarFaixa();
}

function proximoCapitulo() {
  console.log("Próximo capítulo...");
  pausarFaixa();
  capituloAtual < qtdCapitulos ? capituloAtual++ : (capituloAtual = 1);
  audio.src = `./audios/${capituloAtual}.mp3`;
  textoCapitulo.innerText = `Capítulo ${capituloAtual}`;
  console.log(`Capítulo atual: ${capituloAtual}`);
}
function capituloAnterior() {
  console.log("Capítulo anterior...");
  pausarFaixa();
  capituloAtual === 1 ? (capituloAtual = qtdCapitulos) : capituloAtual--;
  audio.src = `./audios/${capituloAtual}.mp3`;
  textoCapitulo.innerText = `Capítulo ${capituloAtual}`;
  console.log(`Capítulo atual: ${capituloAtual}`);
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
