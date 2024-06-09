const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = 3001;

app.use(cors())
const jsonParser = bodyParser.json();

app.listen(PORT, () => {
    console.log(`App is listing on PORT : ${PORT}`);
});

app.get('/', jsonParser, (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.get('/success', jsonParser, (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/user_success.html'));
});

app.post('/user-login', jsonParser, (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    try {
        // Build the connection
        // Execute the query

        // If nothing availabe in the db
        // result.rows.length === 0
        const isUsernameExitingInDb = true;
        if (!isUsernameExitingInDb) {
            res.status(200).send({ message: 'username not found' });
        }
        else {
            // check password here
            const passwordMatched = true;
            if (passwordMatched) {
                res.status(200).send({ message: 'verified authentication' });
            }
            else {
                res.status(200).send({ message: 'invalid password' });
            }
        }
    } catch (error) {
        res.status(500).send({ message: 'internal server error' })
    }
});