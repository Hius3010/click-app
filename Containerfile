FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
VOLUME [ "/app/data" ]
EXPOSE 8888
CMD ["node", "server.js"]
