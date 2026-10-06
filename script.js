const filtros = document.getElementById("filtros");
const botoesCasa = document.querySelectorAll(".filtro");
const personagens = document.querySelectorAll(".personagem");
const listaPersonagens = document.getElementById("lista-personagens");
const resultado = document.getElementById("resultado-filtro");

filtros.hidden = false;

botoesCasa.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const casaEscolhida = botao.dataset.casa;
    let quantidade = 0;

    personagens.forEach(function (personagem) {
      const mostrar = personagem.dataset.casa === casaEscolhida;
      personagem.hidden = !mostrar;
      if (mostrar) {
        quantidade++;
      }
    });

    botoesCasa.forEach(function (outroBotao) {
      const selecionado = outroBotao === botao;
      outroBotao.classList.toggle("ativo", selecionado);
      outroBotao.setAttribute("aria-pressed", String(selecionado));
    });

    listaPersonagens.hidden = false;
    resultado.hidden = false;

    const palavra = quantidade === 1 ? "personagem" : "personagens";
    resultado.textContent = quantidade + " " + palavra + " · " + botao.textContent;
  });
});

const botaoFeitico = document.getElementById("botao-feitico");
const descricaoFeitico = document.getElementById("descricao-feitico");
const secaoFeiticos = document.getElementById("feiticos");
botaoFeitico.hidden = false;

botaoFeitico.addEventListener("click", function () {
  const revelar = descricaoFeitico.hidden;
  descricaoFeitico.hidden = !revelar;
  secaoFeiticos.classList.toggle("revelado", revelar);
  botaoFeitico.setAttribute("aria-expanded", String(revelar));
  botaoFeitico.textContent = revelar ? "Esconder feitiço" : "Revelar feitiço";
});