const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : true })); //요청 객체를 통해 body 데이터를 정상적으로 받기 위한 미들웨어 설정

const objectToString = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => res.send(objectToString(req.query)));
app.post('/', (req, res) => res.send(objectToString(req.body)));
app.put('/', (req, res) => res.send(objectToString(req.body)));
app.delete('/', (req, res) => res.send(objectToString(req.body)));

app.listen(port, () => console.log(`Server listening on port ${port}!`));