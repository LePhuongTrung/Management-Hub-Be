# stage 1: build
FROM node:20-alpine as builder

RUN apk add --no-cache tini
ENTRYPOINT [ "/sbin/tini", "--" ]

WORKDIR /tmp

COPY AccountService/package*.json ./

RUN npm install

COPY AccountService .
RUN npm run build

# stage 2: runtime
FROM node:20-alpine

USER node

WORKDIR /var/www

COPY --chown=node:node AccountService/package*.json ./

RUN npm install --only=production

COPY --from=builder --chown=node:node /tmp/dist ./dist

EXPOSE 3000
# ENTRYPOINT ["tail", "-f", "/dev/null"]

CMD [ "node", "dist/main" ]
