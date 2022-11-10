const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        Password: '',
        database: 'employees_db'
    },
)

app.post('/api/employees', ({body}, res) => {
    const sql = `INSERT INTO job_roles (job_title) VALUES (?)`;
    const params = [body.job_title];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ errr: err.message });
            return;
        }
        res.json({
            message: 'information applied',
            data: body
        });
    });
});

app.get('/api/job_roles', (req, res) => {
    const sql = `SELECT job_title AS title FROM job_roles`;
  
    console.log(sql);
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      console.log(rows);
      res.json({
        message: 'information applied',
        data: rows
      });
    });
  });

  app.delete('/api/roles/:id', (req, res) => {
    const sql = `DELETE FROM job_roles WHERE role_id = ?`;
    const params = [req.params.id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
        message: 'Information not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });