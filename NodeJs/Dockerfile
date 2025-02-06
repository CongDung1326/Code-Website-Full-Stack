# Setting environmnet with nodeJs version 14-alpine
FROM node:14-alpine

# Create link
# WORKDIR /donvau/backend
WORKDIR /backend

# Coppy all files whose first name is packge and ends is .json
COPY package*.json ./

# And after coppy package.json we request docker to install all npm in package
RUN npm install

# Because we use operating system linux (it's not support @babel) we install @babel
RUN npm install -g @babel/core @babel/cli

# And first dot is to coppy all file in nodejs. Continue dot, save all file coppy from first dot and coppy to WORKDIR /donvau/backend (We create)
COPY . .

# Create build
RUN npm run build-src

# When we build success we open cmd and run code npm run build (to start backend)
CMD [ "npm","run","build" ]

# docker build --tag node-docker .
# docker run -p 8080:8080 -d node-docker