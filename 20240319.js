// type alias 만드는 법 타입 변수
// type Animal = string | number | undefined;
let 동물 = { name: 'shim', age: 25 };
let info = {
    name: 'shim',
    plusOne(n) {
        return n + 1;
    },
    changeName: () => {
    }
};
// 객체 안 함수 갖다 쓰는 방법
info.plusOne(2);
