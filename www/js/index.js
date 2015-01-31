var gapReady = $.Deferred();
var jqmReady = $.Deferred();

//Catch "deviceready" event which is fired when PhoneGap is ready
document.addEventListener("deviceReady", deviceReady, false);

//Resolve gapReady in reponse to deviceReady event
function deviceReady()
{
	gapReady.resolve();
}

/**
* Catch "mobileinit" event which is fired when a jQueryMobile is loaded.
* Ensure that we respond to this event only once.
*/
$(document).one("mobileinit", function(){
	jqmReady.resolve();
});

/**
* Run App Logic only when both frameworks have loaded
*/
$.when(gapReady, jqmReady).then(appLogic);

// App Logic -- add back disable and hide splash screen.
function appLogic() {  
    var sound;
    
    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown(e) {
        e.preventDefault();
    }
    
    if (device.platform === "Android") {
        sound = new Media("/android_asset/www/assets/clickSnd.wav");
    }
    else {
        sound = new Media("assets/clickSnd.wav");
    }
    
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000);
}