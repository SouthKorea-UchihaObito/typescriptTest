// type alias 만드는 법 타입 변수
// type Animal = string | number | undefined;

// let 동물 : Animal = 123;
type Animal = {name : string , age : number};
let 동물 : Animal = {name : 'shim', age : 25};

let info = {
    name : 'shim',
    plusOne(n:number){ // 객체 안의 함수 타입 지정 하기
        return n + 1
    },
    changeName : () => {

    }
}

// 객체 안 함수 갖다 쓰는 방법
info.plusOne(2);
