console.log('script loaded');

self.onmessage = ((event) => {
    setInterval(() => {
        postMessage(20)
    }, 1000)
});