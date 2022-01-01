FROM node:16 as buildImg
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY tslint.json ./
COPY src ./src
RUN npm install
RUN npm run build

FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install 
COPY --from=buildImg /usr/src/app/dist .
EXPOSE 3001
CMD [ "npm", "start" ]