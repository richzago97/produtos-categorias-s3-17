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

## 1. Pré-requisitos

Antes de começar a executar o projeto, verifique se você possui as seguintes dependências instaladas em seu ambiente de desenvolvimento:

- Node.JS: Para instalar o Node.JS, visite o site oficial em https://nodejs.org e siga as instruções para a instalação adequada em seu sistema operacional.
- PostgreSQL: O PostgreSQL é necessário para o armazenamento dos dados. Você pode baixar e instalar o PostgreSQL a partir do site oficial em https://www.postgresql.org/. Recomendamos também a instalação do DBeaver (https://dbeaver.io/) como uma interface gráfica para gerenciamento do banco de dados.

## 2. Instalação

Siga as etapas abaixo para instalar e configurar o projeto:

1. Clone o repositório do projeto em seu ambiente de desenvolvimento:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório raiz do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências do projeto utilizando o gerenciador de pacotes de sua preferência (npm ou yarn):

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

No arquivo `.env`, forneça as credenciais corretas para se conectar ao seu banco de dados local. Certifique-se de alterar a variável `DB_HOST` para `localhost`.

## 4. Executando as Queries

Antes de iniciar o serviço, é necessário executar as queries SQL para criar as tabelas necessárias no banco de dados. As queries estão disponíveis no arquivo `creates_tables.sql` no diretório raiz do projeto.

### Método 1: Executando as Queries pelo DBeaver

1. Certifique-se de ter o DBeaver instalado em sua máquina. Você pode baixá-lo em [https://dbeaver.io/](https://dbeaver.io/).

2. Abra o DBeaver e conecte-se ao servidor PostgreSQL utilizando as credenciais corretas (nome de usuário, senha, host e porta).

3. Após a conexão ser estabelecida, clique com o botão direito em "Databases", irá abrir uma janela, clica em "Create New Database" e informa o nome da database, como exemplo, o nome será products_management.

4. Na database products_management, clique em cima com o botão direito, irá aparecer uma janela, selecione "SQL Editor" e "New SQL Script".

5. Irá aparecer o prompt das queries, copie o código no arquivo do vscode create_tables.sql, cole no prompt.

6. Agora é só executar a query, você pode clicar na seta amarela para executar ou utilizar o atalho ctrl + enter, lembre-se de selecionar cada comando CREATE com o mouse antes, pois o dbeaver não executa todas as queries com apenas um clique.

7. As queries serão executadas e as tabelas `categories` e `products` serão criadas no banco de dados selecionado.

Repita os passos 3 a 7 para criar um banco de dados separado para ambiente de testes, se necessário.

### Método 2: Executando as Queries pelo Terminal

1. Abra o terminal e navegue até o diretório raiz do projeto.

2. Certifique-se de que o serviço do PostgreSQL esteja em execução.

3. Execute o seguinte comando para executar as queries no banco de dados de desenvolvimento:

```bash
psql -U <seu_usuario> -d products_management -f creates_tables.sql
```

Substitua `<seu_usuario>` pelo nome de usuário do PostgreSQL que possui permissões para criar tabelas e acesso ao banco de dados `products_management`. Certifique-se de que o banco de dados `products_management` já tenha sido criado anteriormente.

4. Para criar um banco de dados separado para ambiente de testes, execute o seguinte comando:

```bash
psql -U <seu_usuario> -d tests_products -f creates_tables.sql
```

Substitua `<seu_usuario>` pelo nome de usuário do PostgreSQL que possui permissões para criar tabelas e acesso ao banco de dados `tests_products`. Certifique-se de que o banco de dados `tests_products` já tenha sido criado anteriormente.

Após a execução bem-sucedida das queries, você estará pronto para iniciar o serviço e utilizar as APIs para gerenciar produtos e categorias.

Certifique-se de que as credenciais de autenticação no arquivo `.env` correspondam às configurações do banco de dados PostgreSQL em sua máquina.

## 5. Executando o Projeto

Existem duas opções para executar o projeto: utilizando o Docker ou localmente.

## Utilizando o Docker

Certifique-se de ter o Docker instalado em seu ambiente de desenvolvimento. Para executar o projeto com o Docker, execute o seguinte comando:

```bash
docker-compose up --build
```

ATENÇÃO: A porta utilizada para rodar o Docker é a 5431. Caso você tenha algum problema com essa porta, basta alterá-la no arquivo `docker-compose.yml`.

Com isso, o

 projeto será construído e os containers serão iniciados. O serviço estará disponível no endereço `http://localhost:5431`.

### Executando Localmente

Para executar o projeto localmente sem o uso do Docker, certifique-se de ter as variáveis de ambiente configuradas corretamente no arquivo `.env`. Em seguida, execute o seguinte comando:

```bash
yarn dev
```

Isso iniciará o projeto no endereço `http://localhost:PORT`, onde `PORT` é a porta definida no arquivo `.env`.

## Testes

O projeto possui testes automatizados para garantir seu correto funcionamento. Antes de executar os testes, crie um banco de dados chamado "products_management" para o ambiente de desenvolvimento e um banco de dados chamado "tests_products" para o ambiente de teste.

Para executar os testes, utilize o seguinte comando:

```bash
yarn test
```

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
| GET    | /products/category/:category_id      | Retorna os dados dos produtos pertencentes a uma categoria específica |

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
