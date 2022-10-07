FROM node:16

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "yarn.lock"] .

RUN yarn

COPY . . 

# USER giovana-richard

# CMD ["yarn", "start"]