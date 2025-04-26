const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customer_directory'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database.');
});

app.post('/customers', (req, res) => {
    const body = req.body;
    const sql = 'INSERT INTO customers (name, email, company_name, phone, profile_picture_url, contract_start_date, contract_expire_date) VALUES (?, ?, ?, ?, ?, ?, ?)'
    const values = [body.name, body.email, body.company, body.phone, body.profilePicture, body.startDate, body.endDate];
    db.query(sql, values, (err) => {
        if (err) {
            console.error('Error fetching customers:', err);
            res.status(500).json({"success": false, "message": 'Error saving customer'});
            return;
        }
        res.status(200).json({"success": true});
    });
});

app.get('/customers', (req, res) => {
    const sql = 'SELECT * FROM customers';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err);
            res.status(500).json({"success": false, "message": 'Error fetching customers'});
            return;
        }
        console.log(results);
        res.status(200).json({"success": true, "data": results});
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});