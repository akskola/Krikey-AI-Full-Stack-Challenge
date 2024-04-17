# Part 2A : Write an API Endpoint (Node.js API for Top 10 Performing Authors)

This API provides access to author revenue data stored in a local SQLite database. It allows users to query the top 10 performing authors by sales revenue and can filter results by author name.

## Prerequisites

Before you can run this API, you'll need to have Node.js and npm (Node Package Manager) installed on your system. You can download both from the [Node.js official website](https://nodejs.org/).

## Getting Started

Follow these steps to get the API up and running on your local machine:

### Step 1: Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone <repository-url>
cd <repository-directory>
```
Replace <repository-url> with the URL of the Git repository and <repository-directory> with the name of the folder where the repository contents are downloaded.

### Step 2: Install Dependencies
Navigate to the project directory and install the necessary dependencies:
```bash
npm install
```

### Step 3: Start the Server
Run the following command to start the API server:
```bash
node index.js
```
This will launch the server on localhost at port 3000. Look for the message "Server running on port 3000" in your terminal to confirm that the server is active.

## Testing the API
You can test the API endpoints using a web browser, Postman, or the curl command-line tool. Here are the endpoints you can access:

Fetch Top 10 Performing Authors: http://localhost:3000/api/authors

Fetch Data for a Specific Author: http://localhost:3000/api/authors?author_name=Lorelai%20Gilmore

### Example Curl Commands
```bash
curl "http://localhost:3000/api/authors"
curl "http://localhost:3000/api/authors?author_name=Lorelai%20Gilmore"
```

## Database Configuration
The API uses a SQLite database located at ./DB/Krikey.db. Ensure that this file exists and contains the correct schema and data before starting the server.