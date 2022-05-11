FROM node:lts-alpine

RUN npm config set registry https://registry.npm.taobao.org

# Set current working directory
WORKDIR /app

# Copy dependencies file (package.json, package-lock.json)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire source code to image
COPY . .

# Build Project
RUN npm run build

# Set up port
EXPOSE 8080

# Entry command
ENTRYPOINT [ "npm", "run", "serve-dev" ]
