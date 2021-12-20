# base

FROM node:16-alpine AS base

WORKDIR /usr/src/app
COPY . . 
RUN yarn install

# builder

FROM base AS builder

WORKDIR /usr/src/app
RUN NODE_ENV=production yarn build

# final

FROM node:16-alpine as final

COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules

# script

CMD ["start"]
ENTRYPOINT ["yarn"]