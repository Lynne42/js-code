

// cpu密集型计算
function massCalculationFun() {
  // Create a new Web Worker.
  const worker = new Worker('workers/workerMassCalculation.js');
  // Define a function to handle messages from the worker.
  worker.onmessage = function (event) {
    const result = event.data;
    console.log('workerMassCalculation-result', result);
  };

  // Send a message to the worker to start the computation.
  worker.postMessage({ num: 1000000 });
}

massCalculationFun();

// 并行密集型运算
function batchMassCalculationFun() {

  const worker = new Worker('workers/workerBatchMassCalculation.js');
  console.log(234, worker)
  // Define a function to handle messages from the worker.
  worker.onmessage = function (event) {
    const result = event.data;
    console.log('workerBatchMassCalculation-result', result);
  };

  // Send a message to the worker to start the computations.
  worker.postMessage({ nums: [1000000, 2000000, 3000000] });
}
batchMassCalculationFun()

// 网络请求
function fetchRequest() {
  const worker = new Worker('workers/workerFetchRequest.js');

  // Define a function to handle messages from the worker.
  worker.onmessage = function (event) {
    const response = event.data;
    console.log('workerFetchRequest-result', response);
  };

  // Send a message to the worker to start the requests.
  worker.postMessage({
    urls: [
      'https://mock.uutool.cn/4lftemrkgjc0?type=1',
      'https://mock.uutool.cn/4lftemrkgjc0?type=2',
      'https://mock.uutool.cn/4lftemrkgjc0?type=3',
      'https://mock.uutool.cn/4lftemrkgjc0?type=4',
      'https://mock.uutool.cn/4lftemrkgjc0?type=5',
      'https://mock.uutool.cn/4lftemrkgjc0?type=6',
      'https://mock.uutool.cn/4lftemrkgjc0?type=7',
      'https://mock.uutool.cn/4lftemrkgjc0?type=8',
      'https://mock.uutool.cn/4lftemrkgjc0?type=9',
      'https://mock.uutool.cn/4lftemrkgjc0?type=10',
    ]
  });
}

fetchRequest()


/**
 * 在web worker中发送的fetch请求不受浏览器的最大请求数限制
 * 但如果启用线程过多，也会导致速度下降
 **/