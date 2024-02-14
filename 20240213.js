/*
    타입이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야함
    애매한 타입
    어떤 변수가 타입이 아직 불확실하면 if 문으로 Narrowing 해줘야 조작가능
*/
// typeof 연산자
function MyFunction(x) {
    // if(typeof x === 'string'){
    //     return x + '1'
    // } else {
    //     return x + 1
    // } 
    let arr = [];
    if (typeof x === 'number') {
        return arr[0] = x;
    }
    else {
        // else , else if 없으면 오류 날수도 있음
        return arr[0] = 0;
    }
    // 위에 방법 아니면 assertion 문법 (타입 덮어쓰기)
    /*
        용도
        1. Narrowing 할 때 쓰는게
        2. 무슨 타입이 들어올지 100% 확실할 때 사용함
        3. 비상용 으로 사용함
    */
    // arr[0] = x as number;
}
let newarr = [];
function MyFun(x) {
    let superFun = [];
    /*
        반복문 돌리기
        돌려서 문자열인것들은 개별로 정수로 변환 하여
        superFun 배열에 push 넣는다.
    
    */
    x.forEach((ele) => {
        if (typeof ele === 'string') {
            superFun.push(Number(ele));
        }
        else {
            superFun.push(ele);
        }
    });
    return superFun;
}
// console.log(MyFun([1,2,3,4,5,'56']));
let test = 0;
let people1 = { subject: 'math' };
let people2 = { subject: ['science', 'english'] };
let people3 = { subject: ['science', 'art', 'korean'] };
function LastSubject(people) {
    /*
        people1 같은 object 자료를 파라미터로
        집어넣으면 맨뒤 과목 1개를 return 해줘야함
    */
    // 타입지정 
    // console.log(people)-
    if (typeof people === 'object') {
        return people.subject;
    }
    else if (Array.isArray(people)) {
        return 'people.subject';
    }
    else {
        return '오브젝트도 배열도 아니네요';
    }
}
console.log(LastSubject({ subject: ['science', 'art', 'korean'] }));
/*
    만들함수( { subject : 'math' } )  //이 경우 'math'를 return
    만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
    만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
*/ 
