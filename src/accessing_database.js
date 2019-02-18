// npm init
// npm install --save mysql express cors
// npm install -g nodemon
// GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');




var db = mysql.createConnection({
  host: 'company.cbmlwtaaldfn.us-east-2.rds.amazonaws.com',
  user: 'opseek',
  password: 'test1!',
  database: 'main_db'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
app.use(cors());

app.get('/sign-up/:userid/:password/:first_name:/:last_name', (req, res) => {

  let post = {userid:`${req.param.userid}`, password:`${req.param.password}`, first_name:`${req.param.first_name}`, last_name:`${req.param.last_name}`};
  let sql = 'INSERT INTO accounts SET ?';
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('created account');
  });
});

app.put('/postlocation/:id/:location', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `UPDATE preferences INNER JOIN accounts ON preferences.uid = accounts.uid SET preferences.location="${req.params.location}" 
    WHERE accounts.userid = "${req.params.id}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);

    });
});

app.put('/postduration/:id/:duration', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `UPDATE preferences INNER JOIN accounts ON preferences.uid = accounts.uid SET preferences.duration="${req.params.duration}" 
    WHERE accounts.userid = "${req.params.id}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);

    });
});

app.put('/postposition/:id/:position', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `UPDATE preferences INNER JOIN accounts ON preferences.uid = accounts.uid SET preferences.position="${req.params.position}" 
    WHERE accounts.userid = "${req.params.id}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);

    });
});




app.get('/getid/:userid', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT uid FROM accounts WHERE userid="${req.params.userid}" `;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

// Select posts
app.get('/get', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = 'SELECT * FROM job';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.get('/getpreferences/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM preferences, accounts WHERE accounts.userid = "${req.params.id}" and accounts.uid = preferences.uid`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getpreferences', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM preferences`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.get('/getprofile/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM accounts where userid = "${req.params.id}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// account filter
app.get('/getuserprofile/:uid', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM accounts WHERE userid = ${req.params.uid}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getprogress/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM progress_reports, accounts where accounts.userid = "${req.params.id}"`;

    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Select single post
app.get('/getid/:id', (req, res) => {
    let sql = `SELECT * FROM company WHERE cid = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Select single post
app.get('/getname/:name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM company WHERE name = "${req.params.name}"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


// company filter
app.get('/getcompanyfilter/:name/:location', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM company WHERE hq_location LIKE "%${req.params.location}%" and name LIKE "%${req.params.name}%"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Job filter
app.get('/getjobfilter/:company/:position/:location/:duration', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM job, company WHERE position LIKE "%${req.params.position}%" and location LIKE "%${req.params.location}%"
    and duration LIKE "%${req.params.duration}%" and company.name LIKE "%${req.params.company}%"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Options of duration
app.get('/getdurationOptions', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT DISTINCT duration FROM job`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});







// all jobs
app.get('/getjob', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let sql = `SELECT * FROM job `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});




// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('deleted');
    });
});

app.listen(4001, () => {
    console.log('Server started on port 4001');
});
