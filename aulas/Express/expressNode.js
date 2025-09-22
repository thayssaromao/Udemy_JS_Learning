const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá do Express!');
}); 

app.get('/contato', (req,res) => {
    res.send(console.log("Obrigada"))
})

app.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});