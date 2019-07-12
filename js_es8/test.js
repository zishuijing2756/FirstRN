async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);
//async 函数返回的是一个 Promise 对象
//async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，
//如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。

//async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：then() 链来处理这个 Promise 对象，就像这样
testAsync().then(v => {
    console.log(v);    // 输出 hello async
});

console.log('0.0'.padStart(5,'50')); //10.0

