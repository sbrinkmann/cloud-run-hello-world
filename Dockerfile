FROM node:16.14.2-alpine3.14

ENV APP_HOME /app
WORKDIR ${APP_HOME}

COPY index.js ${APP_HOME}
COPY package.json ${APP_HOME}

RUN npm install

EXPOSE 8080
CMD node index.js