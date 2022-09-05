 FROM node:16-alpine

 WORKDIR /usr/app

COPY . /usr/app

 RUN npm install 

ENTRYPOINT npm start

EXPOSE 3000