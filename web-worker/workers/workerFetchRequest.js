// In worker.js:

// Define a function to handle network requests.
function request(url) {
    return fetch(url).then(response => response.json());
}


// Define a function to handle messages from the main thread.
onmessage = async function (event) {
    const urls = event.data.urls;
    console.log('worker-fetch-request-urls', urls)
    const results = await Promise.all(urls.map(request));
    postMessage(results);
};