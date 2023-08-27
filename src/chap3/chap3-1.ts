// 3.1 オブジェクトとは
// 3.1.1 オブジェクトは"連想配列"である
const obj1 ={
    foo: 123,
    bar: "Hello, world!"
};
console.log(obj1.foo); // 123と表示される
console.log(obj1.bar); // "Hello, world!""と表示される

/*
- オブジェクトリテラル: {}で囲まれたもの
- プロパティ名: 式, の形
- プロパティアクセスは、式.プロパティ名
*/



// 3.1.2 オブジェクトリテラル(1) 基本的な構文
const obj2 = {
    foo: 555,
    bar: "文字列",
}

const user0 = {
    name: input?input:"名無し",  // (条件式)?(真の時の式):(偽の時の式)
    age: 20,
}

const name = input?input:"名無し";
const user1={
    name: name,
    age: 20,
}
// 上のようにプロパティ名:変数名という形で、かつプロパティ名と変数名が同じ時、下のように省略できる
const name=input?input:"名無し";
const user={
    name, //省略
    age:20,
}
// プロパティ名が1つだけの場合, {name}だけで済んだりもして楽。


// 3.1.3 オブジェクトリテラル(2) プロパティ名の種々の指定方法
// コロンの左側には""で囲んだような文字も使える(文字リテラル)
const obj = {
    "foo": 123,
    "foo bar": -500,
    '↑↑↓↓': ""
}
console.log(obj.foo);
console.log(obj["foo bar"]); //識別子じゃないものがプロパティ名に来てる場合は[]の構文を用いないとアクセスできない

// 数値リテラル
const obj={
    1: "one",
    2.05: "two point o five",
}
console.log(obj["1"]) // "one"と表示
console.log(obj["2.05"]) // "two point o five"と表示

// プロパティ名が動的に決まる場合
const propName = "foo";
const obj = {
    [propName]: 123
};
console.log(obj.foo); // 123と表示される



// 3.1.4 プロパティアクセス
// プロパティの値を取得する/プロパティに代入する　で使う
const user = {
    name: "uhyo",
    age: 25,
};
user.age=26;
console.log(user.age); // 26　が表示される


import { isUtf8 } from "buffer";
// プロパティアクセスを動的にしたい場合は[]が使える
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const messages ={
    good: "0以上の数値が入力されました",
    bad: "負の数値を入力しないでください",
}

rl.question('数値を入力してください:', (line)=>{
    const num = Number(line);
    console.log(messages[num>=0?"good":"bad"])
    rl.close();
})



// コラム8
// constで宣言されてるため、別のオブジェクトそのものを再代入することはできないが, それはあくまで変数そのものに対する規制であってオブジェクトの値に再代入することはできる



// 3.1.5 オブジェクトリテラル(3) スプレッド構文
// スプレッド構文:
// オブジェクトの作成時にプロパティを別のオブジェクトからコピーすることができる
// ...式という構文。プロパティ:式　の代わりに使える
const obj1 = {
    bar: 456,
    baz: 789,
}

const obj2={
    foo:123,
    ...obj1
};
// obj2は{foo:123, bar:456, baz:789}
console.log(obj2);

// スプレッド構文と通常のプロパティ宣言が同じプロパティを与える場合、後に書かれている方が採用される
const obj1={
    foo:123,
    bar:456,
    baz:789,
}

const obj2={
    ...obj1,
    foo: -9999,
}

// obj2は{foo:-9999, bar:456, baz:789}
console.log(obj2);

// 次のように...obj1よりもfoo: -9999と書くとコンパイルエラーとなる。
// ...obj1によってfooが上書きされるとわかっているのにそれより前に書くのは無意味だから。
const obj1={
    foo:123,
    bar:456,
    baz:789,
}

// エラー: 'foo' is specified more than once, so this usage will be overwritten.
const obj2 = {
    foo: -9999,
    ...obj1,
};

// 1つのオブジェクトリテラルの中で、スプレッド構文を複数回使うことができる
const obj1={
    foo: 123,
    bar: 456,
};

const obj2={
    bar: -999,
    baz: -9999,
}

const obj3={
    ...obj1,
    ...obj2
}

//obj3は{foo: 123, bar:-999, baz: -9999}
console.log(obj3);

// スプレッド構文によって行われるのはプロパティのコピー
// コピー元のオブジェクトのプロパティをその後変更しても、コピー先のオブジェクトには影響しない



// 3.1.6 オブジェクトはいつ同じなのか
// オブジェクトはいつ同じなのかという問いの答えは、「明示的にコピーしなければ同じである」が答え。
// 変数はオブジェクトそのものというよりも、別のところにあるオブジェクトの実態を指し示すもの。
// 明示的にコピー: ex.スプレッド構文
// 別々のオブジェクトが欲しいなら、変数ごとに別々にオブジェクトを作成する

const foo = {num: 1234};
const bar=foo;
console.log(bar.num); // 1234と表示される
bar.num=0;
console.log(foo.num); // 0と表示される

const foo = {num:1234}
consst bar={...foo}
console.log(bar.num); // 1234と表示される
bar.num=0;
console.log(foo.num); // 1234と表示される

// ただし、スプレッド構文を用いたコピーには罠があるので普通は以下のようにするのがいい
const foo = {num: 1234};
const bar = {num: 1234};

// スプレッド構文を用いたコピーの罠は、オブジェクトがネストされてる時にある
// fooとbarは別々のオブジェクトだが、foo.objの中に入っているオブジェクトとbar.objの中に入ってるオブジェクトは同じもの
// ネストしたオブジェクトも含めてコピーする方法は今のところない。
const foo = {obj: {num: 1234}};
const bar = {...foo};
bar.obj.num=0;
console.log(foo.obj.num); // 0と表示される

// オブジェクトに対する一致判定は===でやる
const foo = {num: 1234};
const bar=foo;
const baz={num: 1234};

console.log(foo===bar); //trueと表示
console.log(foo===baz); //falseと表示