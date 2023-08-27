// 3.2 オブジェクトの型
// 3.2.1 オブジェクト型の記法
const obj={
    foo: 123,
    bar: "Hello, world!"
}
// 型は
const obj: {
    foo: number;
    bar: string;
}

const obj: {
    foo: number;
    bar: string;
}={
    foo: 123,
    bar: "Hello, world!",
};

// 識別子以外の場合
const obj: {"foo bar": number}={
    "foo bar": 123,
}



// 3.2.2 オブジェクト型の型チェックと安全性
const obj: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    // エラー: Type 'boolean' is not assiginable to type 'string'
    bar: true,
}

// エラー: Property 'bar' is missing in type'{foo: number}' but required in type '{foo: number; bar: string;}
const obj: {
    foo: number;
    bar: string;
} = {
    foo: 123,
}

const obj={
    foo: 123,
    bar:"Hello, world!",
};
// エラー: Type 'null' is not assignable to type 'number'
obj.foo = null;

const obj={
    foo: 123,
    bar: "Hell,world!",
}
// エラー: Property 'hoge' does not exist on type '{foo: number; bar: string;}'



// 3.2.3 type文で型に別名をつける
// type 型名 = 型
// type文を用いて別名をつけることで扱いやすくする
// type文はどんな型にも別名をつけられるが、あくまでも別名をつけるだけ。
type FooBarObj = {
    foo: number;
    bar: string;
}
const obj: FooBarObj={
    foo: 123,
    bar: "Hello, world!",
}
// FooBarObjを宣言する前に使ってもOK



// 3.2.4 interface宣言でオブジェクト型を宣言する
// interface宣言が扱えるのはオブジェクト型のみ
// interface 型名 オブジェクト型
interface FooBarObj{
    foo: number;
    bar: string;
}
const obj: FooBarObj={
    foo: 0,
    bar: "string",
}