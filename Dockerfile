# Use the official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app


COPY package*.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Command to run your app using npm
CMD ["npm", "run", "dev"]
