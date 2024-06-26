# Use an official Node.js runtime as a base image
FROM node:19.9.0-alpine

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json (or yarn.lock, if you are using Yarn) to the container
COPY package.json yarn.lock ./

# Install project dependencies
# If you are using npm, replace with `RUN npm install`
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Compile TypeScript to JavaScript
RUN yarn build

ENV PORT=8080

EXPOSE $PORT

# The start command to run your application
CMD [ "node", "build/src/index.js" ]