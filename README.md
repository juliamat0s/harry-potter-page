# Harry Potter — Landing Page com HTML, CSS e DOM

Atividade 3 do curso de Front-end PROA Transforme-se.

## Como abrir

Extraia a pasta e abra `index.html` no navegador. Mantenha `style.css`, `script.js` e a pasta `imagens` ao lado dele. O projeto funciona sem instalar bibliotecas e sem conexão com a internet depois de baixado.

## O que a página faz

- Apresenta a saga e 12 personagens, com três integrantes de cada casa de Hogwarts.
- Começa mostrando apenas os quatro botões das casas, sem personagens. Ao clicar em uma casa, mostra seus três personagens; ao escolher outra, troca o grupo exibido.
- Atualiza a quantidade de personagens e o nome da casa escolhida.
- Revela e esconde o feitiço Lumos.

## Onde entra o DOM?

O DOM é a representação do HTML que o navegador cria. O JavaScript encontra elementos nessa estrutura e modifica o que aparece na tela.

No arquivo `script.js`:

- `getElementById` encontra um elemento pelo seu `id`.
- `querySelectorAll` encontra todos os elementos de uma classe.
- `addEventListener` executa uma função quando a pessoa clica.
- `dataset.casa` lê a casa registrada no atributo `data-casa` do HTML.
- `hidden` esconde ou mostra o elemento.
- `textContent` troca o texto exibido na página.
- `classList.toggle` adiciona ou remove uma classe para mudar o estilo.
- `setAttribute` atualiza informações de acessibilidade dos botões.
- `forEach` percorre os botões e os personagens.

Por exemplo: ao clicar em “Corvinal”, o código compara a casa de cada personagem com a escolhida. Os cards de Luna, Cho e Flitwick permanecem visíveis, e o texto muda para “3 personagens · Corvinal”. Nenhuma página nova é aberta.

## Organização dos arquivos

- `index.html`: conteúdo e estrutura.
- `style.css`: cores, espaçamentos, botões arredondados e adaptação ao celular.
- `script.js`: filtros e interação do feitiço.
- `imagens/`: imagens salvas localmente.

O CSS usa Flexbox para os filtros, Grid para os personagens e media queries para as telas menores. O JavaScript usa variáveis, funções, condições e eventos, sem frameworks.

## O que testar antes de entregar

1. Abra a página e confira os quatro botões, sem personagens visíveis.
2. Clique em cada casa e confira se aparecem apenas os três personagens dela.
3. Revele o feitiço e depois esconda-o.
4. Diminua a janela para conferir o celular.
5. Navegue com Tab e use Enter ou Espaço nos botões.

## Como enviar ao GitHub

Envie o HTML, CSS, JavaScript, README e toda a pasta de imagens. Deixe o `index.html` na raiz do repositório. Não envie somente o ZIP: os arquivos extraídos permitem visualizar o código e publicar a página.

## Fontes e créditos

Imagens e informações consultadas no site oficial HarryPotter.com:

- [Hogwarts](https://www.harrypotter.com/quiz/the-hogwarts-castle-quiz)
- [Harry Potter](https://www.harrypotter.com/fact-file/characters-and-pets/harry-potter)
- [Draco Malfoy](https://www.harrypotter.com/fact-file/characters-and-pets/draco-malfoy)
- [Luna Lovegood](https://www.harrypotter.com/fact-file/characters-and-pets/luna-lovegood)
- [Cedric Diggory](https://www.harrypotter.com/fact-file/characters-and-pets/cedric-diggory)
- [Hermione Granger](https://www.harrypotter.com/fact-file/characters-and-pets/hermione-granger)
- [Rony Weasley](https://www.harrypotter.com/fact-file/characters-and-pets/ron-weasley)
- [Severo Snape](https://www.harrypotter.com/fact-file/characters-and-pets/severus-snape)
- [Bellatrix Lestrange](https://www.harrypotter.com/fact-file/characters-and-pets/bellatrix-lestrange)
- [Cho Chang](https://www.harrypotter.com/fact-file/characters-and-pets/cho-chang)
- [Filius Flitwick](https://www.harrypotter.com/fact-file/characters-and-pets/filius-flitwick)
- [Ninfadora Tonks](https://www.harrypotter.com/fact-file/characters-and-pets/nymphadora-tonks-fact-file)
- [Newt Scamander](https://www.harrypotter.com/fact-file/characters-and-pets/newt-scamander)
- [Lumos](https://www.harrypotter.com/fact-file/spells/the-wand-lighting-charm)
- [Nox](https://www.harrypotter.com/fact-file/spells/the-wand-extinguishing-charm)

Projeto educacional. As imagens e os personagens pertencem aos respectivos titulares; nenhuma licença aberta é atribuída a esse material. Os créditos ficam neste README para manter o rodapé da página somente com a autoria do projeto.

Desenvolvido por Ana Júlia com apoio na criação e revisão do código.
