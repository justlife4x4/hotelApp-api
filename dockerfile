FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
COPY . .
RUN apk add --update nodejs npm
RUN npm ci
CMD ["node", "src/server.js"]