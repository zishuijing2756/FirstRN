// var waitSecond = new Promise(function(resolve, reject)
// {
//     setTimeout(resolve, 2000);
// });
//
// waitSecond
//     .then(function()
//     {
//         console.log("Hello"); // 1秒后输出"Hello"
//         return waitSecond;
//     })
//     .then(function()
//     {
//         console.log("Hi"); // 2秒后输出"Hi"
//     });

let timeout =(ms)=> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
};

timeout(100).then((value) => {
    console.log(value);
});
