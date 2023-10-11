// index.js
const express = require('express');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`); //views 디렉토리를 템플릿 파일을 모아둔 디렉토리로 설정
app.set('view engine', 'pug'); //view engine으로 pug 사용

app.use(express.urlencoded({ extended: true })); //body 데이터를 받기 위한 미들웨어

app.get('/', (req, res) => res.render('login.pug')); //사용자에게 login.pug 템플릿 렌더링해서 보여줌
app.post('/login', (req, res) => { // /login 경로에 대한 POST 요청 (로그인 양식 제출 시 실행)
    const { username, password } = req.body; //body에서 username, password 값을 가져옴 
    return res.send(`Username: ${username} / Password: ${password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}~`));