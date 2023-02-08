FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:latest
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/configfile.template
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
