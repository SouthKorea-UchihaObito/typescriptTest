/*
    1. nodojs 최신 버전 설치
    2. 터미널에 npm install -g typescrit
    3. tsconfig,json 만들기

    4. 터미널에 tsc -w 해둔 채로 코딩 시작
    - 자동으로 ts파일을 js 파일로 근처에 변환


    React 프로젝트에서 Typescript 사용할 경우
    1. 이미 있는 React 프로젝트에 설치하실거면

    - npm install --save typescript @types/node @types/react @types/react-dom @types/jest

    2. 그냥 React 프로젝트를 새로 만들거면
    - npx create-react-app my-app --template typescript

*/
let myname = 'shim'; // 타입은 변수에 실드를 씌우는 것임
let age = 50;
let you = true;
let myvalue = null;
let value = undefined;
let peopled = ['shim', 'pack']; // 배열
let objectd = { key: 'myname', value: 'shim' }; // 오브젝트
// 타입지정 원래 자동으로 된다 문법 생략 가능
// 기본 타입 정리
let text = 'my name shim jaehun'; // 이런식으로 생략 가능
let mynameis = 'shim jaehun';
let myageis = 25;
let myaddress = 'seoul';
let likeplople = { kasyuName: 'makihara noriuki', musicName: 'youki' };
let project = {
    member: ['kim', 'shim'],
    days: 25,
    started: true,
};
/*  */
// Union Type 도 Union Type 라는 또 하나의 타입임 ex) string 또는 number 타입!
let plopleList = 123; // Union Type 타입 2개 이상 합친 새로운 타입만들기 소괄호로 여러개 넣기 가능  
let arrayd = [1, 2, 3]; // array 에서 Union 타입 지정
let newobject = { a: '123' }; // object 에서 Union 타입 지정
let testname; // any 타입 모든 자료형 허용해줌 타입실드 해제문법임 일반 자바스크립트 처럼 아무거나 넣을 수 있음
let testname2; // unknown 타입 모든 자료형 허용해줌 any보다 안전한 이유는
testname2 = 123;
testname2 = {};
// let testlet :string = testname2;
// 타입스크립트의 엄격함에 대해
// - 간단한 수학연산도 타입맞아야함
// - unknown은  number 타입이 아님
/* 타입 엄격하게 지켜야함 */
/* 간단한 수학연산도 타입맞아야함 */
// 정확한 타입끼리의 연산만 허용해줌
let testage;
/*

    타입이 맞는데 + 1 이 안되는 것?

    - 타입스크립트는 타입 엄격한것을 좋아한다.

    string 타입 + 1 (허용)
    number 타입 + 1 (허용)
    string | number 타입 + 1 (비허용)
*/
// testage + 1; 연산 안됨!
let aged = 1;
// aged - 1; // unknown 타입이지  number 타입이 아님
/* 변수 4개에 타입 지정해보기 */
let user = 'shim';
let ageTest = 25;
let married = false;
let 철수 = [user, ageTest, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'shim jaehun',
    friend: 'jim',
};
function 함수(x) {
    if (x) {
        console.log('이름 있음');
    }
    else {
        console.log('이름 없음');
    }
}
function 함수2(x) {
    if (x) {
        console.log('이름있음' + x);
    }
    else {
        console.log('이름 없음');
    }
}
let numb = 12345;
let numbStr = null;
numb = numb.toString();
numbStr = numb.length;
function 자릿수출력(x) {
    // x = x;
    // let newNum : number | String | undefined = null
    // x = x.toString();
    // newNum = x.length;
    return x.toString().length;
}
자릿수출력(222);
/*

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.

2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.

3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

 

(예시)

결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

*/
function 결혼가능유무(money, house, charm) {
    let score = 0;
    score += money;
    if (charm === "상") {
        score += 100;
    }
    if (house === true) {
        score += 500;
    }
    if (score >= 600) {
        return '결혼가능';
    }
    else {
        return "결혼 불가능";
    }
}
console.log(결혼가능유무(1, true, "상"));
/*

function 함수(x? :number | string) : 여기에 타입지정 가능 {

}
*/
// 함수에서 void 타입 활용가능
// 아무것도 return 하지 못하게 지정해주는 타입 실수로 뭔가 return 하는걸 막아줌
// 타입 지정된 파라미터는 필수
// 파라미터가 옵션일 경우에는 ? :타입 지정해놓을수 있음
// x옆에 ? 지정하면 파라미터 지정 할수도 안할수도 지정가능
/* 중요 */
/*
    변수? :number는
    변수:number | undefined 와 같음

*/ 
