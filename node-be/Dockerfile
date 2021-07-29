FROM node:lts-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm && npm cache clean --force --loglevel=error

COPY . .

EXPOSE 5000

CMD ["npm","start:dev"]


FROM node:lts-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production --unsafe-perm && npm cache clean --force --loglevel=error

COPY . .

CMD ["npm","start"]
