FROM node:14.17.0
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]