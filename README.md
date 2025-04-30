# 📚 API de Controle de Livros

Este projeto é uma API REST simples desenvolvida em **Node.js**, com objetivo de gerenciar um catálogo de livros. O foco principal da aplicação é **colocar em prática testes automatizados**, como parte de uma tarefa da faculdade sobre ferramentas de teste em projetos backend.


## 🧪 Ferramenta de Teste Escolhida

Utilizamos a **API nativa de testes do Node.js** (`node:test`), disponível a partir da versão 18 do Node, evitando dependências externas como Jest ou Mocha. A ideia foi explorar os recursos internos da plataforma de forma prática e didática.


## 🚀 Funcionalidades da API

A API permite:

- ✅ Criar um novo livro
- ✏️ Editar um livro existente
- ❌ Excluir um livro
- 📖 Listar todos os livros cadastrados


## 🧠 Diferenciais Técnicos

Durante o desenvolvimento, foram aplicadas boas práticas que enriqueceram a experiência de aprendizado e a estrutura do projeto:

- ✅ Implementação de uma **função genérica de requisições HTTP** (`makeRequest`) para facilitar e padronizar os testes, simulando chamadas reais à API.
- 🧪 Uso da **API nativa de testes do Node.js** (`node:test`), sem dependências externas, reforçando o conhecimento da plataforma.
- ♻️ Criação de uma função `reset()` para garantir isolamento entre os testes e estado limpo a cada execução.

## 🔧 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/jonathannrocha/Teste-na-pratica.git
cd Teste-na-prática