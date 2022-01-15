FROM node:14.18 AS build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --production --verbose

FROM node:14.18
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install -g serve
COPY --from=build-stage /usr/src/app/build ./build
EXPOSE 4000
CMD serve -s build -l 4000