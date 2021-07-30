# https://github.com/cypress-io/cypress-docker-images/tree/master/base
FROM cypress/base:10.16.0 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm && npm cache clean --force --loglevel=error

COPY . .

EXPOSE 5000

CMD ["npm","dev"]


# https://github.com/cypress-io/cypress-docker-images/tree/master/base
FROM cypress/base:10.16.0 as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production --unsafe-perm && npm cache clean --force --loglevel=error

COPY . .

CMD ["npm","start"]
