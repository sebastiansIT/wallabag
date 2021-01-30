// Register the service worker
if ('serviceWorker' in navigator) {
  // The service worker file has to be in the web root for security reasons
  navigator.serviceWorker.register('/serviceworker.js')
    .catch((error) => {
      console.error(`Service worker registration failed, error: ${error}`);
    });
}
