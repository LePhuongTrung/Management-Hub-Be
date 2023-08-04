FROM node:20-alpine as build

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

RUN adduser -S -u 1001 -G node myuser

COPY --chown=node:node ./package*.json ./app

RUN yarn --frozen-lockfile --production && yarn cache clean

RUN yarn build

USER myuser

# stage 3: Server
FROM node:20-alpine as prod

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

RUN adduser -S -u 1001 -G node myuser

COPY --chown=node:node --from=build ./app/dist dist
COPY --chown=node:node --from=build ./app/node_modules node_modules

USER myuser

CMD ["node", "dist/main.js"]
