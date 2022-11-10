FROM node:lts-alpine


WORKDIR /app


RUN npm install -g http-server 


COPY package*.json ./



RUN npm install


COPY . .


RUN npm run build

EXPOSE 8080


# CMD körs när man startar containern
# CMD ["http-server", "dist", "-p", "1337"]
CMD ["http-server", "dist"]