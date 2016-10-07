function loadAds() {
	if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
		document.addEventListener('deviceready', initApp, false);
	} else {
		initApp();
	}
}

var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) {
	admobid = {
		banner: 'ca-app-pub-8597358551901146/4544804049',
		interstitial: 'ca-app-pub-8597358551901146/8975003642'
	};
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
	admobid = {
		banner: 'ca-app-pub-8597358551901146/4544804049',
		interstitial: 'ca-app-pub-8597358551901146/8975003642'			
	};
} else {
	admobid = {
		banner: 'ca-app-pub-8597358551901146/4544804049',
		interstitial: 'ca-app-pub-8597358551901146/8975003642'
	};
}
	
function initApp() {

	if (typeof AdMob == 'undefined') {
		return;
	}
	
	//if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

	initAd();

	// display a banner at startup
	createSelectedBanner();
	
}

function initAd(){

	var defaultOptions = {
		position: AdMob.AD_POSITION.BOTTOM_CENTER,
		bgColor: 'white', // color name, or '#RRGGBB'
		//isTesting: true, // set to true, to receiving test ad for testing purpose
	};
	
	AdMob.setOptions( defaultOptions );
	
	registerAdEvents();
	
}

// optional, in case respond to events or handle error
function registerAdEvents() {
	// new events, with variable to differentiate: adNetwork, adType, adEvent
	document.addEventListener('onAdFailLoad', function(data){ 
		/*
		alert('error: ' + data.error + 
				', reason: ' + data.reason + 
				', adNetwork:' + data.adNetwork + 
				', adType:' + data.adType + 
				', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
		*/
		AdMob.removeBanner();
	});
	document.addEventListener('onAdLoaded', function(data){});
	document.addEventListener('onAdPresent', function(data){});
	document.addEventListener('onAdLeaveApp', function(data){});
	document.addEventListener('onAdDismiss', function(data){});
}



function createSelectedBanner() {

	AdMob.createBanner({
		adId:admobid.banner, 
		overlap:false, 
		offsetTopBar:false, 
		adSize: 'SMART_BANNER', 
		position:8
	});
	
}