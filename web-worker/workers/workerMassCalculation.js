
// Define a function to perform the computation.
function compute(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}

// Define a function to handle messages from the main thread.
onmessage = function (event) {
    const num = event.data.num;
    console.log('num', num)
    const result = compute(num);
    postMessage(result);
};