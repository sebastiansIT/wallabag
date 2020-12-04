// Register the service worker
if ('serviceWorker' in navigator) {
	// The service worker file has to be in the web root for security reasons
	navigator.serviceWorker.register('serviceworker.js')
	.then((registration) => {
		console.log(`Registration successful, scope is: ${registration.scope}`);
	})
	.catch((error) => {
		console.log(`Service worker registration failed, error: ${error}`);
	});
}