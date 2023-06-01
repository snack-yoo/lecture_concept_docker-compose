FROM node
ENV SERVER_PORT=$SERVER_PORT
ENV SERVER_NAME=$SERVER_NAME
WORKDIR app
COPY node_modules/ node_modules/
COPY app.js app.js
ENTRYPOINT ["node", "app.js"]