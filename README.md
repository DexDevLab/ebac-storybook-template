<h1 align="center">Storybook Template para EBAC</h1>
<p align=center><i align="center">Template de Aplicação React com Storybook para exercício do Módulo 14 da Seção "React: do Zero ao Pro" do curso "Profissão: Engenheiro Front-End" da Instituição EBAC - Escola Britânica de Artes Criativas e Tecnologia</i></p>

<br>

<div align="center">

<a href="https://html.com"><img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white" height="22" alt="HTML5"/></a>&nbsp;
<a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src="https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white" height="22" alt="CSS3"/></a>&nbsp;
<a href="https://www.javascript.com"><img src="https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E" height="22" alt="JavaScript"/></a>&nbsp;
<br>
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white" height="22" alt="NodeJS"/></a>&nbsp;
<a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-%23323330.svg?logo=react&logoColor=white" height="22" alt="React"/></a>&nbsp;
<a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?logo=express" height="22" alt="ExpressJS"/></a>
<br>
<a href="https://storybook.js.org"><img src="https://img.shields.io/badge/Storybook-%23323330.svg?logo=storybook" height="22" alt="Storybook"/></a>&nbsp;
<a href="https://main--6621609505a9e64e34183ee5.chromatic.com"><img src="https://img.shields.io/badge/Storybook on Chromatic-%23323330.svg?logo=chromatic" height="22" alt="Chromatic"/></a>
<a href="https://www.netlify.com"><img src="https://img.shields.io/badge/Netlify-%23000000.svg?logo=netlify&logoColor=#00C7B7" height="22" alt="Netlify"/></a>
<br>
<a href=""><img src="https://img.shields.io/badge/maintenance-as--is-yellow.svg" height="22" alt="Maintenance-as-is"/></a>&nbsp;
<a href=""><img src="https://img.shields.io/github/last-commit/dexdevlab/ebac-storybook-template" height="22" alt="LastCommit"></a>&nbsp;
<a href=""><img src="https://img.shields.io/github/v/release/dexdevlab/ebac-storybook-template" height="22" alt="Version"/></a>
<br>
<a href=""><img src="https://img.shields.io/github/repo-size/dexdevlab/ebac-storybook-template" height="22" alt="RepoSize"/></a>&nbsp;
<a href=""><img src="https://img.shields.io/github/languages/code-size/dexdevlab/ebac-storybook-template" height="22" alt="CodeSize"/></a>&nbsp;
<a href="https://github.com/dexdevlab/ebac-storybook-template/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dexdevlab/ebac-storybook-template" height="22" alt="License"></a>

</div>

<br>

## Conteúdo

<br>

O objetivo deste repositório é comportar o material necessário para servir de exemplo prático do exercício do Módulo 14 da Seção "React: do Zero ao Pro" do curso "Profissão: Engenheiro Front-End" da Instituição EBAC - Escola Britânica de Artes Criativas e Tecnologia. Contém uma simulação de um trabalho de build, deployment, teste e revisão de um projeto contendo uma aplicação React, um backend em Express.js, e uma Documentação de Layout em Storybook e implementada via Chromatic.

### Tarefas propostas pelo exercício

- Correção da aplicação original, ajustes e melhorias de interface - Abaixo serão listadas as melhorias realizadas no projeto:
  - Adição de mecanismos de CI na forma de workflows do Github Actions para melhor organização, automação e versionamento dos projetos e futuros lançamentos (releases)
  - Adição de arquivo de linting ao projeto para melhor estruturação e contextualização do material escrito nas linguagens utilizadas
  - Adição de toda a documentação de layout promovida pelo Storybook, a qual pode ser acessada pelo link abaixo
  - Adição do arquivo de licença (não declarado no repositório original)
  - Adição de assets para maior customização do projeto e melhoria da identidade da aplicação, agregando maior valor ao software como produto e promovendo uma melhor UX
  - Restruturação de toda a arquitetura do projeto, considerando a topologia necessária para a execução do Storybook e mantendo, de forma mais concisa possível, a utilização de arquitetura componentizada e atômica para os conteúdos de interface
  - Criação de um handler de API que servirá para as negociações com o Backend e também servirá de controller para realizar a tratativa dos dados. O handler também comporta a instância <a href="https://axios-http.com/docs/intro" target="_blank">`Axios`</a> para as requisições
  - Implementação de Backend de exemplo como mock para requisições
  - Separação de todas as requisições nos componentes e adaptação para comunicação apenas com o handler
  - Criação de rotas de Frontend para correta utilização das páginas, e viabilização da página de erro 404
  - Componente `PokemonCard` refatorado:
    - Adição das props 'allowAddPokemon', 'allowEditPokemon', 'allowRemovePokemon' para melhor controle do comportamento do componente no Storybook
    - Remoção dos 2 handlers de evento para o uso em um único handler, com ajuste na lógica para funcionar adequadamente com o handler de API
  - Página `404` refatorada:
    - Componente de estilização apartado do componente da página, em arquivo js separado
  - Página `indexPage` refatorada:
    - Comunicação direta com o handler para requisições `GET` com adequada tratativa de erros

- Criação do README - Esta aplicação, bem como a aplicação Backend independente estão ambas documentadas corretamente com o README, atualizado e descritivo contendo as informações necessárias para o onboarding de um desenvolvedor.

- Criação de Documentação Funcional - Foi solicitado que a Documentação Funcional fosse fornecida em documento Word, o qual pode ser baixado neste <a href="https://raw.githubusercontent.com/dexdevlab/ebac-storybook-template/main/resources/Documentacao_Funcional.docx" target="_blank" download='Documentação_Funcional.docx'>`link`</a>

- Criação de Documentação de Layout usando o Storybook - A Documentação de Layout foi implementada no Chromatic e tem seu acesso através deste <a href="https://main--6621609505a9e64e34183ee5.chromatic.com" target="_blank">`link`</a>

<br>

## Funcionamento da Aplicação

Como não foi encontrado um template ou repositório de origem com uma Aplicação Bakend para o exercício proposto, eu mesmo criei um servidor Express para atender a demanda. Alguns detalhes são explorados abaixo:

Banco de Dados - Para a proposta deste projeto, não foi intencionada a utilização de um Banco de Dados próprio. As informações são salvas em um arquivo `JSON`, lidas e modificadas pelas requisições da API (ver abaixo na seção "Instruções").

Backend local e Backend implementado - Toda vez que a aplicação estiver sendo executada em ambiente de desenvolvimento (`process.env.NODE_ENV`), a aplicação Frontend irá optar por se conectar ao Backend local, contido neste repositório e sendo executado por padrão na porta `4000`. Caso esta aplicação esteja sendo executada em um ambiente implementado, a mesma optará por realizar as requisições para uma implementação externa, cujos detalhes podem ser visualizados <a href="https://github.com/DexDevLab/ebac-storybook-template-backend" target="_blank">`neste`</a> repositório.

Uma implementação no Netlify pode ser testada <a href="https://ebac-engenheiro-frontend-adv-react14.netlify.app" target="_blank">`aqui`</a>.

<br>

## Instruções

<br>

### Utilizando o repositório como projeto

1 - Faça um git clone ou o download do repositório, da forma que preferir

```bash
git clone https://github.com/dexdevlab/ebac-storybook-template.git
```

2 - Execute `yarn` para carregar as dependências.

#### Testando a aplicação

Execute `yarn dev` do terminal dentro do diretório do projeto. A aplicação inicializará as seguintes instâncias:

1 - Aplicação React (Frontend), na porta `3000`<br>
2 - Aplicação Express JS (Backend API), na porta `4000`<br>
3 - Storybook Preview, na porta `6006`

#### Realizando testes

Execute `yarn test` do terminal dentro do diretório do projeto. Um teste será performado.

#### Compilando a aplicação

Execute `yarn build` e ocorrerá a compilação das aplicações React e Storybook.

#### Implementação no Chromatic

Para implementar a build do Storybook no <a href="https://www.chromatic.com" target="_blank">`Chromatic`</a>, é necessário adicionar o token do projeto ao arquivo `chromatic.config.json`, com as seguintes especificações mínimas:

```json
// ./chromatic.config.json
{
    "projectId": "PROJECT_NAME",
    "externals": ["public/**"],
    "junitReport": false,
    "onlyChanged": true,
    "projectToken": "PROJECT_TOKEN"
}
```

A criação de um <a href="https://www.chromatic.com/docs/github-actions/" target="_blank">`Github Secret`</a> com o valor do token do Chromatic permite a execução do workflow para implantação do Storybook automaticamente.

### Testes de API

#### Método GET

Fornece a lista de Pokémon.

```json
// http://localhost:3000/
[
  {
    "_id": 0,
    "pid": 83,
    "name": "Farfetch'd",
    "evolution": 1
  },
  {
    "_id": 1,
    "pid": 304,
    "name": "Aron",
    "evolution": 1
  },
  {
    "_id": 2,
    "pid": 158,
    "name": "Totodile",
    "evolution": 1
  },
  {
    "_id": 3,
    "pid": 1008,
    "name": "Miraidon",
    "evolution": 1
  }
]
```

#### Método POST

Adiciona um novo Pokémon à coleção.

Body (JSON):

```json
// http://localhost:3000/new-pokemon
{
  "pid": 83,
  "name": "Farfetch'd",
  "evolution": 1
}
```

#### Método PUT

Modifica um Pokémon da lista, baseado no ID contido no Banco de Dados

Query Params:

| Parâmetro | Valor | Tipo | Exemplo |
| --- | ----------- |-------|--------|
| id | ID do Pokémon contido no Banco de Dados.| Number | 2 |

Body (JSON):

Adicione no corpo os valores a serem modificados, mas não suprima nenhum dos campos.

```json
// http://localhost:3000/update-pokemon/:id
{
  "pid": 84,
  "name": "Farfetch'd",
  "evolution": 1
}
```

#### Método DELETE

Remove um Pokémon da lista, baseado no ID contido no Banco de Dados

```bash
http://localhost:3000/delete-pokemon/:id
```

Query Params:

| Parâmetro | Valor | Tipo | Exemplo |
| --- | ----------- |-------|--------|
| id | ID do Pokémon contido no Banco de Dados.| Number | 2 |

<hr>

<br>

## Notas de versão

### v1.0.1-240426

- Atualização do README

### v1.0.0-240426

- Atualização do README

### v0.2.3-240426

- Alteração da lógica dos stories para promover uma listagem de resultados mais dinâmica e responsiva com a interação com o Backend.

### v0.2.2-240426

- Testes de implementação

### v0.2.1-240426

- Testes de implementação
- Alteração do script do Github Actions para automação de implementação no Chromatic

### v0.2.0-240426

- Publicação do Repositório modificado
- Atualização do README
- Elaboração do Repositório
- Testes de implementação
- Correção e melhorias do projeto original

### v0.1.0

- Initial commit

<br>

## Autores

<br>
<br>

<a href="https://github.com/dexdevlab/ebac-storybook-template/graphs/contributors">
  <img alt="contrib" src="https://contrib.rocks/image?repo=dexdevlab/ebac-storybook-template" />
</a>

<br>

## Contato

<br>

Se você gostou deste projeto, dê uma <a href="https://github.com/dexdevlab/ebac-storybook-template" data-icon="octicon-star" aria-label="Star dexdevlab/ebac-storybook-template on GitHub">`estrela`</a>. <br>
Para contato, envie um email a: <a href="mailto:dex.houshi@hotmail.com">`dex.houshi@hotmail.com`</a>

<br>

## Licença

Licenciado sob a <a href="https://github.com/dexdevlab/ebac-storybook-template/blob/main/LICENSE">`MIT License`</a>.
