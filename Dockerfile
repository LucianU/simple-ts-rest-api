FROM node:21.6.2-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
