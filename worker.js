console.log("worquer is running")

addEventListener('message', (ev) => {
    console.log('worker got message: ' + ev.data);
    postMessage("worker is responding to " + ev.data);
})
