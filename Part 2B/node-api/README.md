# Part 2B : API Performance

Below are some techniques to enhance performance of the Node.js API:

## 1. Database Optimization

I have used SQLite for this challenge and SQLite is typically file-based and not optimized for high levels of concurrency. For high concurrent access, we should consider switching to a more scalable database system like PostgreSQL or MySQL that supports `connection pooling`.

## 2. Caching

We can use Redis or a similar in-memory data store to cache the results of database queries or full API responses. This reduces the load on your database and can significantly improve response times.

## 3. Load Balancers

We can deploy mutiple instances of the Node.js application, and use a load balancer to distribute traffic evenly across servers. This ensures that no single server becomes a bottleneck.

## 4. Application Performance Improvements

We can use Node.js `clustering` to utilize multiple CPU cores. Node.js runs in a single thread by default. By using clustering, we can spawn a cluster of Node.js processes to handle more requests simultaneously. I have made changes to the part 2A code by implementing clustering onto it.


# Updated API with Clustering

This API provides access to author revenue data stored in a local SQLite database. It allows users to query the top 10 performing authors by sales revenue and can filter results by author name. The server utilizes Node.js clustering to improve performance and handle high loads by distributing requests across multiple CPU cores.

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
This will launch the server using Node.js clustering on localhost at port 3000. Each CPU core will run a separate instance of the server, enhancing the ability to handle multiple simultaneous requests. Look for messages indicating that each worker has started, such as "Worker <process_id> started, server running on port 3000".

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

## Note on Clustering
Clustering in this API is used to improve performance by parallelizing processing across multiple CPU cores. If the server is running on a machine with multiple cores, we will see enhanced performance and scalability.
