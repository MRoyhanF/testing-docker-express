FROM node:20-alpine3.17

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "dev" ]

