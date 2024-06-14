# Use an official node image as a parent image.
FROM node:16

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the project files.
COPY . .

# Expose the port the app runs on.
EXPOSE 3001

# Run the application.
CMD ["npm", "run", "dev"]
