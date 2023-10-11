const express = require('express');

const app = express();
const port = 3000;

app.get('/board/page/:page', (req, res) => {
    const { page } = req.params; // URL의 가변적인 부분을 변수 params로 저장
    res.send(`This is page #${page}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
