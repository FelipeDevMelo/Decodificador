let btnCriptografar = document.querySelector(".btn_criptografar");
let btnDescriptografar = document.querySelector(".btn_descriptografar");
let btnCopiar = document.querySelector(".btn_copiar");
let fraseCompleta;
let textosaida = document.querySelector(
  ".conteudo-principal__texto-resultado__paragrafo"
);
let textoEntrada = document.querySelector(
  ".conteudo-principal__texto-entrada__texto"
);
btnCriptografar.addEventListener("click", function (event) {
  event.preventDefault();

  fraseCompleta = textoEntrada.value;
  let FraseSeparada = textoEntrada.value.split("");
  let ArrayfraseCriptografada = [];
  FraseSeparada.forEach((letra) => {
    if (letra == "a") {
      ArrayfraseCriptografada.push("ai");
    } else if (letra == "e") {
      ArrayfraseCriptografada.push("enter");
    } else if (letra == "i") {
      ArrayfraseCriptografada.push("imes");
    } else if (letra == "o") {
      ArrayfraseCriptografada.push("ober");
    } else if (letra == "u") {
      ArrayfraseCriptografada.push("ufat");
    } else {
      ArrayfraseCriptografada.push(letra);
    }
  });
  let FraseCriptografada = ArrayfraseCriptografada.join("");

  textosaida.innerHTML = FraseCriptografada;
  textoEntrada.value = "";
  btnCopiar.style.display = 'block';
  btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    navigator.clipboard.writeText(FraseCriptografada);
  });
});

btnDescriptografar.addEventListener("click", function (event) {
  event.preventDefault();
  btnCopiar.style.display = 'none';
  textosaida.innerHTML = fraseCompleta;
});



  