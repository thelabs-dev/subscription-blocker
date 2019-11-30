chrome.webRequest.onBeforeRequest.addListener(function() {
  		return { cancel: true };
	}, { urls: [
		"*://*/js/epd_sw*", // EL PAIS
		"*://*/jscripts/mvd_cms_newsletters.js" // MONTEVIDEO PORTAL
		] 
	}, ["blocking"] 
);

chrome.cookies.onChanged.addListener(function(changeInfo) {
	if (changeInfo.cookie.domain == 'www.elobservador.com.uy'){
		if (changeInfo.cookie.name == 'mostrar_Signwall'){
			// EL OBSERVADOR
			chrome.cookies.remove({url: "https://www.elobservador.com.uy" + "/", name: "mostrar_Signwall"});
		}
	}
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
	// EL OBSERVADOR
	chrome.cookies.remove({url: "https://www.elobservador.com.uy" + "/", name: "mostrar_Signwall"});
	chrome.cookies.remove({url: "https://www.elobservador.com.uy" + "/", name: "mostrar_AvisoSuscripcion"});
	chrome.cookies.remove({url: "https://www.elobservador.com.uy" + "/", name: "mostrar_Paywall"});
	
	/*
	chrome.cookies.set({
		"name": "userId",
		"url": "https://www.elobservador.com.uy/",
		"value": "100"
	}, function (cookie) {
		console.log(JSON.stringify(cookie));
		console.log(chrome.extension.lastError);
		console.log(chrome.runtime.lastError);
	});
	*/
  }
})