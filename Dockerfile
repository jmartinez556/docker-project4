FROM node:latest

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 9995

ENTRYPOINT ["node", "index.js"]

FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 9995
ENTRYPOINT ["node", "index.js"]
