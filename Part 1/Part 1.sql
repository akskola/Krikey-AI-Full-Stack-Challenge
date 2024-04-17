-- First 10 Authors Ordered by Date of Birth:
SELECT name, date_of_birth FROM authors ORDER BY date_of_birth ASC LIMIT 10;

-- Sales Total for Lorelai Gilmore:
SELECT SUM(item_price * quantity) AS total_sales
FROM authors
JOIN books ON authors.id = books.author_id
JOIN sale_items ON books.id = sale_items.book_id
WHERE authors.name = 'Lorelai Gilmore';

-- Top 10 Performing Authors by Sales Revenue:
SELECT authors.name, SUM(sale_items.item_price * sale_items.quantity) AS total_revenue
FROM authors
JOIN books ON authors.id = books.author_id
JOIN sale_items ON books.id = sale_items.book_id
GROUP BY authors.name
ORDER BY total_revenue DESC
LIMIT 10;


