# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files to the working directory
COPY . .

# Install the application dependencies
# RUN npm install

# Define the command to run your frontend app
CMD ["npm", "start"]

# Expose the port the app runs on
EXPOSE 4200

