# stage 1: Development
FROM node:20-alpine as dev

WORKDIR /app

ENV NODE_ENV development
RUN apk add --no-cache libc6-compat
RUN adduser -S -u 1001 -G node myuser

COPY --chown=node:node . /app

RUN yarn --frozen-lockfile
RUN yarn build

USER myuser
CMD ["node", "dist/main.js"]

# stage 2: Build
FROM node:20-alpine as build

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

RUN adduser -S -u 1001 -G node myuser

COPY --chown=node:node --from=dev /app/node_modules ./node_modules

COPY --chown=node:node ./AccountService /app

RUN yarn build

RUN yarn --frozen-lockfile --production && yarn cache clean

COPY --from=dev --chown=node:node /tmp/dist ./dist

USER myuser

# stage 3: Server
FROM node:20-alpine as prod

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

RUN adduser -S -u 1001 -G node myuser

COPY --chown=node:node --from=build /app/dist dist
COPY --chown=node:node --from=build /app/node_modules node_modules

USER myuser

CMD ["node", "dist/main.js"]
