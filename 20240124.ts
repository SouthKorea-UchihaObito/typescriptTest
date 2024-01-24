let copy = 'copy';
// let 이름 :string[] = ['123', 'shim']; 배열 타입 지정 배열중에서 string 문자열만
// let 이름 : {name : string} = {name : 'kim'} 오브젝트에서 타입 지정
// let 이름 : {name? : string} = {name : 'kim'} name 이라는 속성이 불확실할때 지정해줄수도 있음 옵션 
type Mytype = string | number;
let named:Mytype = 123;

function 함수(x  :number) :number {
    // x(파라미터는 숫자가 들어와야 하고) return에는 숫자가 들어와야 한다.
    return x * 2
}

// array에 쓸 수 있는 tuple 타입
// tuple 타입
// type Member = [number, boolean];
// let shim:Member = [1, true] // 첫번째꺼는 number, 둘 째는 boolean(true, false)\


type Member = {
    [key : string] : string // 글자로 된 모든 object 속성의 타입은 :string
}
let shim : Member = { name : 'kid', age : '123'}

class User {
    name;
    constructor() {

    }
}