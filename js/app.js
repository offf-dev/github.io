window.addEventListener('load', async () => {
    console.log(window.isSecureContext)
    console.log(navigator)
    if(navigator.serviceWorker){
        try {
            const reg = await navigator.serviceWorker.register('/worker.js');
            console.log('Service Worker success', reg);
        } catch (e) {
            console.log('Service Worker fail')
        }
    }
});