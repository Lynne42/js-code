function compute(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}

// Define a function to handle messages from the main thread.
onmessage = function(event) {
    const nums = event.data.nums;
    const results = nums.map(compute);
    postMessage(results);
};