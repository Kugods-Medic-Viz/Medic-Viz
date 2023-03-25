// 추가 분석용 질환명 탐색
// string 부분을 스크립트 db 파일 링크로 변환해주면 됩니다.

const fs = require('fs');
const a_json = fs.readFileSync('DiseaseList.json', 'utf-8');
const a_dict = JSON.parse(a_json);

const string = "환자 분 말단부 관절이 상태가 안 좋네요. 루푸스가 의심됩니다.";
for (let i = 0; i < a_dict.length; i++) {
    const idx = string.indexOf(a_dict[i]);
    if (idx !== -1) {
        console.log(a_dict[i], idx);
    }
}


// 다른 버전 : fs 모듈 + error 코드 
const fs = require('fs');
fs.readFile('DiseaseList.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const aDict = JSON.parse(jsonString);

        const string = "환자 분 말단부 관절이 상태가 안 좋네요. 루푸스가 의심됩니다.";
        for (let i = 0; i < aDict.length; i++) {
            const idx = string.indexOf(aDict[i]);
            if (idx !== -1) {
                console.log(aDict[i], idx);
            }
        }
    } catch (err) {
        console.log("Error parsing JSON:", err);
    }
});
