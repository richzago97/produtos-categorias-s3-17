# Documentação - Gerenciamento de Produtos e Categorias

Esta documentação apresenta informações completas sobre o projeto de Gerenciamento de Produtos e Categorias, um serviço de back-end desenvolvido com JavaScript, Node.JS, Express.JS, PostgreSQL e Docker. O projeto permite criar, listar, atualizar e excluir produtos e categorias, além de fornecer endpoints para recuperar informações específicas e filtrar produtos por categoria.

## Visão Geral

O serviço de Gerenciamento de Produtos e Categorias é uma aplicação back-end que oferece uma API para realizar operações relacionadas a produtos e categorias. Ele utiliza o Node.JS e o framework Express.JS para construir os endpoints da API, enquanto o PostgreSQL é utilizado como banco de dados para armazenar os dados dos produtos e categorias. O Docker é utilizado para facilitar o gerenciamento de dependências e o provisionamento do ambiente de desenvolvimento.

## Tecnologias Utilizadas

- JavaScript: Linguagem de programação utilizada para desenvolver o serviço back-end.
- Node.JS: Ambiente de execução JavaScript utilizado para executar o código do servidor.
- Express.JS: Framework web utilizado para construir os endpoints da API.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados dos produtos e categorias.
- Docker: Plataforma de contêiner que permite empacotar o aplicativo juntamente com todas as suas dependências em um contêiner isolado.

## Pré-requisitos

Antes de começar a executar o projeto, verifique se você possui as seguintes dependências instaladas em seu ambiente de desenvolvimento:

- Node.JS: Para instalar o Node.JS, visite o site oficial em https://nodejs.org e siga as instruções para a instalação adequada em seu sistema operacional.
- Docker: O Docker é necessário para a execução do projeto. Certifique-se de tê-lo instalado em seu ambiente de desenvolvimento. Você pode baixar e instalar o Docker a partir do site oficial em https://www.docker.com/.

## Instalação

Siga as etapas abaixo para instalar e configurar o projeto:

1. Clone o repositório do projeto em seu ambiente de desenvolvimento:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório raiz do projeto:

```bash
cd nome-do-repositorio
```

### Configure as variáveis de ambiente

No arquivo `.env`, forneça as credenciais corretas para se conectar ao seu banco de dados local. Certifique-se de alterar a variável `DB_HOST` para `localhost`.

### Executando o Projeto

Build e suba os containers do Docker utilizando o comando abaixo:

```bash
docker-compose up --build
```

ATENÇÃO: A porta utilizada para rodar o Docker é a 5431. Caso você tenha algum problema com essa porta, basta alterá-la no arquivo `docker-compose.yml`.

Com isso, o projeto será executado e estará disponível no endereço `http://localhost:5431`.

## Testes

O projeto já possui testes automatizados para garantir o correto funcionamento dos endpoints. Certifique-se de ter configurado o banco de dados de teste seguindo as instruções acima.

Para executar os testes, utilize o seguinte comando:

```bash
yarn test
```

Os resultados dos testes serão exibidos no terminal

.

## Endpoints

A tabela a seguir lista os endpoints disponíveis na API, juntamente com suas respectivas responsabilidades:

| Método | Endpoint                            | Responsabilidade                                       |
| ------ | ----------------------------------- | ------------------------------------------------------ |
| POST   | /categories                         | Criação de uma nova categoria                          |
| GET    | /categories                         | Lista todas as categorias                              |
| GET    | /categories/:id                     | Retorna os dados de uma categoria específica           |
| PATCH  | /categories/:id                     | Atualiza os dados de uma categoria específica          |
| DELETE | /categories/:id                     | Deleta uma categoria do banco                          |
| POST   | /products                           | Criação de um novo produto                             |
| GET    | /products                           | Lista todos os produtos                                |
| GET    | /products/:id                       | Retorna os dados de um produto específico              |
| PATCH  | /products/:id                       | Atualiza os dados de um produto específico             |
| DELETE | /products/:id                       | Deleta um produto do banco                             |
| GET    | /products/category/:category_id     | Retorna os dados dos produtos pertencentes a uma categoria específica |

## Observações

- Certifique-se de fornecer os valores corretos para as variáveis de ambiente relacionadas ao banco de dados, tanto para o ambiente de desenvolvimento quanto para o ambiente de teste.
- Ao criar uma nova categoria ou produto, forneça os dados necessários no corpo da solicitação.
- Certifique-se de ter o Docker instalado e configurado corretamente em seu ambiente de desenvolvimento para executar o projeto usando contêineres.
- Para executar o projeto localmente sem o uso do Docker, configure corretamente as variáveis de ambiente no arquivo `.env` e utilize o seguinte comando:

```bash
yarn dev
```

Isso executará o projeto no endereço `http://localhost:PORT`, onde `PORT` é a porta definida no arquivo `.env`.

Com esta documentação, você terá todas as informações necessárias para instalar, executar e utilizar o serviço de Gerenciamento de Produtos e Categorias.
