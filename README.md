# Mimo Cloud Opss Desafio 

Projeto desenvolvido com React js

## Para Iniciar o Projeto é primeiro necessário clonar o repositório no git
em um diretório na sua máquina digite o seguinte comando : `git clone https://github.com/henrikeSilva93/mimoCloudOps.git`

## Para Iniciar a aplicação com o Docker

Primeiramente é necessário que o Docker esteja instalado na sua máquina. Se não estiver, segue o link para instalação:
https://docs.docker.com/get-docker/

Agora com o projeto clonado, devemos criar a imagem do nosso projeto. O arquivo dockerfile já está configurado

abra o terminal e digite:  `docker image build -t reactcloudops:1.1 .`

Após a criação da imagem execute o seguinte comando: `docker container run -p 3000:3000  -d reactcloudops:1.0`
esta linha irá executar nossa imagem criando um container que estará disponível na porta 3000 tcp
para acessar a página  agora basta abrir um navegador e digitar `http://localhost:3000`

## Para Iniciar a aplicação diretamente 
Para acessar esta aplicação é necessário ter o NODE JS instalado na sua máquina. caso não tenha, você pode fazer o Download por aqui:
https://nodejs.org/

Agora devemos clonar o projeto para máquina com o comando : `git clone https://github.com/henrikeSilva93/mimoCloudOps.git`

após Clonar o repositório, é necessário instalar as dependências do projeto. Faremos isso com o comando `npm install` caso use o geranciador NPM
ou ´yarn install´ caso use o gerenciador Yarn

Por fim, quando todas as depedências estiverem instaladas basta executar o comando `npm start` caso use o gerenciador de dependências NPM,
ou ´yarn run´ caso use o gerenciador Yarn.
