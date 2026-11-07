# 🪙 Conversor de Pokéouros — TCG Pocket

Aplicação web que calcula quantos pacotes podem ser abertos com uma quantidade informada de Pokéouros, utilizando a regra de **6 Pokéouros por pacote** definida no código.

Desenvolvida com **HTML, CSS e JavaScript puro**, a aplicação oferece uma interação simples por meio das caixas de diálogo do navegador.

**[🚀 Acessar o conversor](https://edineycampos.github.io/pokeouro-tcg-pocket/)**

## Sobre o projeto

O conversor aplica conceitos básicos de desenvolvimento web a uma situação relacionada ao Pokémon TCG Pocket. Ao clicar no botão, o usuário informa sua quantidade de Pokéouros e recebe o total de pacotes inteiros correspondente.

## Funcionalidades

- Entrada da quantidade de Pokéouros por meio de `prompt`.
- Cálculo do número de pacotes inteiros com `Math.floor`.
- Exibição do resultado em um `alert`.
- Mensagem de erro quando o valor interpretado não é numérico ou é negativo.
- Encerramento da operação quando o usuário cancela a entrada.
- Interface com imagem de fundo temática e efeito de cor no botão.

## Como o cálculo funciona

O código divide a quantidade de Pokéouros por 6 e arredonda o resultado para baixo:

```javascript
let umpacote = 6;
let resultado = Math.floor(pokeouros / umpacote);
```

| Pokéouros informados | Pacotes calculados |
| --- | --- |
| 5 | 0 |
| 6 | 1 |
| 30 | 5 |
| 35 | 5 |
| 60 | 10 |

O resultado representa apenas pacotes inteiros. A quantidade restante de Pokéouros não é exibida.

> O conversor utiliza uma regra fixa no código e não consulta dados do jogo em tempo real. A entrada é convertida com `parseInt`, que descarta a parte decimal de valores como `12.5`.

## Tecnologias

| Tecnologia | Aplicação |
| --- | --- |
| HTML5 | Estrutura da página, botão de interação e rodapé |
| CSS3 | Layout, cores, imagem de fundo e efeito no botão |
| JavaScript | Entrada de dados, validação, cálculo e exibição do resultado |

O projeto não utiliza frameworks e não exige instalação de dependências ou etapa de compilação.

## Como usar

1. Acesse a [versão online](https://edineycampos.github.io/pokeouro-tcg-pocket/).
2. Clique em **Bora converter!**.
3. Informe uma quantidade inteira e não negativa de Pokéouros.
4. Confirme a entrada para visualizar o número de pacotes.

Para fazer outro cálculo, clique novamente no botão.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/EdineyCampos/pokeouro-tcg-pocket.git
   ```

2. Entre na pasta `pokeouro-tcg-pocket` e abra o arquivo `index.html` em um navegador.

Também é possível baixar o projeto pelo botão **Code → Download ZIP**, extrair os arquivos e abrir o `index.html`.

> A imagem de fundo é carregada de um endereço externo e precisa de conexão com a internet para ser exibida.

## Organização dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura da interface e carregamento do CSS e do JavaScript |
| `estilos.css` | Aparência da página e organização do layout |
| `script.js` | Evento de clique, entrada de dados, validação e conversão |
| `README.md` | Apresentação e instruções do projeto |

## Conceitos praticados

- Seleção de elementos com `document.getElementById`.
- Tratamento de eventos com `addEventListener`.
- Entrada e saída de dados com `prompt` e `alert`.
- Conversão de texto em número com `parseInt`.
- Verificações com `isNaN`, condicionais e retornos antecipados.
- Operações aritméticas e arredondamento com `Math.floor`.
- Estilização com CSS e centralização com Flexbox.

## Autor

[Edinei Silva de Campos Filho](https://github.com/EdineyCampos)
