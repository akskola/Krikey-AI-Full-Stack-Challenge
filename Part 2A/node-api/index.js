const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const dbPath = './DB/Krikey.db';
const db = new sqlite3.Database(dbPath);

app.use(cors());

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
        if (rows.length === 0) {
            res.status(404).json({ error: 'No data found' });
            return;
        }
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
