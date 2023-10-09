const express = require('express');

const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    const {number} = req.query;
    return res.redirect(`/factorial/${number}`); //리다이렉트
});
// /factorial 경로에 방문하면 쿼리 매개변수 입력 가능. 그 값은 /factorial/{숫자} 로 리다이렉트

app.get('/factorial/:number', (req, res) => {
    const {number} = req.params;
    const facNumber = parseInt(number, 10); // URL의 number에서 추출한 문자열을 정수로 반환

    //팩토리얼 계산
    let result = 1;
    for (let i=0; i<facNumber; i++) result *= (i+1);
    //클라이언트에게 반환
    return res.send(`${facNumber} != ${result}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));