# Creathus [T3](t3.gg) App

Este projeto foi criado utilizando a Stack T3, que é composta pelas seguintes tecnologias e padrões:

Next.js : Next.js é um framework React de código aberto que permite a criação de aplicativos web modernos do lado do cliente e do lado do servidor. Ele fornece recursos como renderização do lado do servidor, geração estática e pré-renderização, roteamento automático, carregamento de módulos sob demanda e suporte a API.

tRPC
: tRPC é uma biblioteca para criação de APIs no Next.js. Ela oferece uma maneira fácil e declarativa de definir e implementar suas rotas e controladores de API. Com o tRPC, você pode escrever código de forma rápida e eficiente, garantindo um bom desempenho e facilidade de manutenção.

Prisma
: Prisma é um ORM (Object-Relational Mapping) de banco de dados que simplifica a interação com o banco de dados em aplicativos. Ele fornece uma camada de abstração sobre o banco de dados, permitindo que você defina e acesse os modelos de dados usando uma linguagem declarativa. O Prisma oferece suporte a vários bancos de dados, como PostgreSQL, MySQL e SQLite.

NextAuth
: NextAuth é uma biblioteca de autenticação para aplicativos Next.js. Ela simplifica a implementação de recursos de autenticação, como login com provedores de terceiros (Google, Facebook, GitHub, etc.) e autenticação local. O NextAuth fornece uma API fácil de usar para gerenciar o fluxo de autenticação em seu aplicativo.

Tailwind CSS
: Tailwind CSS é uma estrutura de design CSS altamente personalizável e utilitária. Ele fornece uma ampla variedade de classes utilitárias pré-construídas, permitindo que você construa rapidamente interfaces responsivas e estilizadas. Com o Tailwind CSS, você pode evitar escrever CSS personalizado e se concentrar mais na estrutura e no layout do seu aplicativo.

TypeScript
: TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que estende o JavaScript adicionando tipos estáticos opcionais. Ele melhora a produtividade e a segurança do código, permitindo a detecção de erros em tempo de compilação. O TypeScript é amplamente utilizado no desenvolvimento de aplicativos web e fornece uma melhor experiência de desenvolvimento em comparação com o JavaScript puro.

Repository pattern
: O padrão Repository é uma abordagem comum para organizar o código de acesso a dados em aplicativos. Ele separa a lógica de acesso a dados da lógica de negócios, fornecendo uma camada de abstração que facilita a modificação e a extensão do código de acesso a dados. Usar o padrão Repository pode melhorar a modularidade, testabilidade e manutenção do seu projeto.

---

## Instalação

Para instalar o projeto, siga as etapas abaixo:

1. Certifique-se de ter o Yarn ou o npm instalados em seu sistema.
2. Clone este repositório em sua máquina local.
3. Acesse o diretório do projeto pelo terminal.
4. Execute o comando `yarn install` ou `npm install` para instalar as dependências.
5. Após a conclusão da instalação, você pode iniciar o projeto executando yarn start ou npm start.

Aguarde até que o projeto seja compilado e iniciado com sucesso.
Abra um navegador da web e acesse http://localhost:3000 para visualizar o projeto em execução.
Agora você pode explorar e utilizar o Creathus T3 App em sua máquina local.

## Problemas no desenvolvimento

Desculpas por não ter uma função de cadastro manual de filmes com upload de imagem:

Apesar do requisito solicitado para o desafio de contratação ser uma função de cadastrar um filme manualmente com upload de imagem, o que foi implementado foi uma busca do filme em uma API do TMDB e salvá-lo no banco pelo backend.

### Perda de Prática no frontend

Durante o tempo em que estive concentrado em outros aspectos do desenvolvimento, como aprimorar minhas habilidades em backend ou explorar novas tecnologias, acabei dedicando menos tempo ao frontend. Essa falta de prática contínua afetou minha capacidade de implementar recursos frontend com a mesma qualidade e eficiência que eu teria anteriormente.

---

## Hospedagem do Projeto

Este projeto foi hospedado na plataforma Vercel para a aplicação (frontend) e no PlanetScale para o banco de dados (backend).

Vercel
: A Vercel é uma plataforma de hospedagem e implantação de aplicativos que oferece escalabilidade, desempenho e facilidade de uso. Optamos por hospedar a aplicação nessa plataforma devido à sua integração perfeita com projetos Next.js, além da capacidade de implantação contínua e fácil configuração de ambientes de produção.

PlanetScale
: O PlanetScale é um serviço de banco de dados MySQL totalmente gerenciado e escalável. Escolhemos hospedar nosso banco de dados nessa plataforma devido à sua confiabilidade, escalabilidade e facilidade de uso. Ele nos permite armazenar e gerenciar com segurança os dados da aplicação de forma eficiente.

## Utilização da Stack T3 para Estudos com tRPC

Este projeto foi desenvolvido utilizando a Stack T3 disponibilizada pelo t3.gg (https://t3.gg). Optei por utilizar essa stack com o objetivo de aprimorar meus conhecimentos e habilidades na tecnologia tRPC.

### Stack T3

A Stack T3 é uma combinação de tecnologias escolhidas especificamente para trabalhar em conjunto de forma integrada, proporcionando uma experiência de desenvolvimento eficiente e produtiva. A stack inclui as seguintes tecnologias:

- Next.js
- tRPC
- Prisma
- NextAuth
- Tailwind CSS
- TypeScript

### Motivos de Estudo com tRPC

O principal motivo para utilizar a Stack T3 e focar nos estudos com tRPC foi a minha intenção de aprofundar meus conhecimentos nessa tecnologia de criação de APIs. O tRPC é uma biblioteca moderna que simplifica o processo de criação de APIs no Next.js, oferecendo uma sintaxe declarativa e eficiente. Ao utilizar o tRPC, é possível desenvolver APIs de forma rápida e eficaz, com um código limpo e de fácil manutenção.

Portanto, ao escolher a Stack T3 do t3.gg para este projeto, pude me dedicar ao aprendizado e à prática do tRPC, aproveitando as vantagens da integração com as demais tecnologias presentes na stack.

Com essa abordagem, adquiri conhecimentos valiosos em relação ao tRPC e sua aplicação em projetos reais, contribuindo para o aprimoramento das minhas habilidades de desenvolvimento.

# Fluxo do Sistema Creathus T3 App

O Creathus T3 App é um sistema que permite aos usuários visualizar informações sobre filmes.

## 1. Login com Discord

- Os usuários têm a opção de fazer login no sistema usando sua conta do Discord.

## 2. Visualização de Filmes

- Após fazer login, os usuários têm acesso à funcionalidade de visualização de filmes.

## 3. Seleção de Filmes

- Os usuários podem selecionar os filmes que gostarem para obter mais informações sobre eles.

## 4. Integração com a API do TMDB

- O sistema utiliza a API do TMDB (The Movie Database) para buscar informações detalhadas sobre os filmes selecionados pelos usuários.

## 5. Informações do Filme

- Após selecionar um filme, o usuário pode visualizar informações como sinopse, elenco, diretor, avaliações, etc.

## 6. Adicionar Filme à Coleção

- Os usuários têm a opção de adicionar filmes à sua coleção pessoal.
- Ao adicionar um filme à coleção, o sistema registra qual usuário adicionou o filme.

## 7. Visualização das Coleções

- O sistema permite que os usuários vejam quais filmes foram adicionados às suas próprias coleções.
- Os usuários também podem ver quais outros usuários adicionaram determinados filmes às suas coleções.

Isso resume o fluxo básico do sistema Creathus T3 App.
