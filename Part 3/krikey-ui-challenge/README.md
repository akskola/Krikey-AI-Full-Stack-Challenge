# Part 3 : Build & Deploy Webpage

This document provides instructions on how to run the API and UI locally on your machine, how to deploy the web application using Vercel, and includes a link to the live site.

## Running the Code Locally

### Running the API Server

1. **Navigate to the API directory:**
Navigate to `Part 2A/node-api` folder or open terminal here and enter the below command.
   ```bash
   cd ../../Part 2A/node-api
   ```
2. **Start the API server:**
    ```bash
    node index.js
    ```
This will run the Node API on port 3000.

### Running the UI

1. **Navigate to the UI directory:**
Make sure you are in `Part 3/krikey-ui-challenge` folder or open new terminal here.
2. **Install dependencies (if not already done):**
    ```bash
    npm install
    ```
3. **Start the UI server:**
    ```bash
    npm start
    ```
This will run the UI on port 4000.
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

## Deployment Steps
The webpage was deployed using Vercel by following these steps:

1. Push the code to a Git repository.
2. Log in to Vercel.
3. Give Vercel access to the repository.
4. Click on the 'Deploy' button in Vercel to deploy the application.

Vercel handles the build and deployment processes and provides you with a live URL once the deployment is successful.

## Live Website
The deployed web application can be accessed at the following URL:
https://krikey-challenge-ui.vercel.app/

