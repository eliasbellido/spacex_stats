const express = require('express');
const graphqlHttp = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

//Permite cross-origin
app.use(cors());

app.use('/graphql',graphqlHttp({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});