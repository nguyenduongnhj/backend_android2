# Pull node image from docker hub
FROM node:16

LABEL maintainer="Manhnv"
WORKDIR  /app
COPY  ./dist ./dist
COPY package.json .

# install dev dependencies too
RUN set -x && yarn --prod=false
EXPOSE 3000
CMD ["node", "dist/main"]
