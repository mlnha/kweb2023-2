const fs = require('fs');
const path = require('path');
const util = require('util');

const dirList = util.promisify(fs.readdir); //디렉토리 목록 읽어오기
const fileStat = util.promisify(fs.stat);  //디렉토리 정보 읽어오기
const PATH = './test';

const directorySearch = async diretory => {
    const files = await dirList(directory); // 디렉토리 내용 읽고 결과 -> 배열에 저장

    files.forEach(async file => {
        const filePath = path.join(directory, file); //파일 경로 문자열로 return
        const stat = await fileStat(filePath); //파일 정보 읽어오기

        if (stat.isDirectory()) await directorySearch(filePath); //파일이 디렉토리인지 확인
        else if (path.extname(filePath) === '.js') console.log(filePath); //파일이 디렉토리가 아니고 js파일이면 콘솔에 로깅
    });
};

(async () => {
    try {
        await searchDirectory(PATH);
    } catch (err) {
        console.error(err);
    }
})();