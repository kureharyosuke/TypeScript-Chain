const name = "Oh",
  age = 30,
  gender = "male";

const TsFunc = (name: string, age: number, gender?: string): void => {
  console.log(`Hello, ${name}, you are ${age}, you are a ${gender}`);
};

const TsFuncRe = (name: string, age: number, gender?: string): string => {
  return `Hello, ${name}, you are ${age}, you are a ${gender}`;
};

// TsFunc(name, age); // 타입스크립트 파라미터 부족하면 에러발생

// TsFunc(name, age); // 이렇게만 사용하고 싶으면 gender? 붙이면 된다.

TsFunc("YUN", 123);
TsFunc("YUN", 123, "men");

export {}; // export 선언안하면 버그가 생긴다.
