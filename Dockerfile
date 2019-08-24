FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g pm2
RUN npm install --prefix client && npm run build --prefix client
EXPOSE 5000
ENTRYPOINT [ "pm2-docker", "server.js" ]
# CMD [ "node", "server.js" ]