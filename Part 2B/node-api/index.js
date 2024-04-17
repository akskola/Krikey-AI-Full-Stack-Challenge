const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const dbPath = './DB/Krikey.db';

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers for each CPU
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died, restarting a new worker`);
        cluster.fork();
    });
} else {
    const app = express();
    const db = new sqlite3.Database(dbPath);

    app.get('/api/authors', (req, res) => {
        const authorName = req.query.author_name;
        let sql = `
            SELECT authors.name, SUM(sale_items.item_price * sale_items.quantity) AS total_revenue
            FROM authors
            JOIN books ON authors.id = books.author_id
            JOIN sale_items ON books.id = sale_items.book_id
            ${authorName ? `WHERE authors.name = ?` : ''}
            GROUP BY authors.name
            ORDER BY total_revenue DESC
            LIMIT 10;
        `;

        db.all(sql, authorName ? [authorName] : [], (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (rows.length == 0) {
                res.status(404).json({ error: 'No data found' });
                return;
            }
            res.json(rows);
        });
    });

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started, server running on port 3000`);
    });
}
