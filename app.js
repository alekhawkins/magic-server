// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`listening at http://localhost:${port}`)
// })
require('dotenv').config();

const express = require('express');
const app = express();


const deck = require('./controllers/deckController')
const format = require('./controllers/formatController')
const person = require('./controllers/personController')
const year = require('./controllers/yearController')

const sequelize = require('./db');
// console.log(sequelize);

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/deck', deck);
app.use('/format', format);
app.use('/person', person);
app.use('/year', year);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));
