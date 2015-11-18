var ip = "172.0.0.1";
var d = new Date();
if(window.location.href.indexOf("index.html") > -1) {
    getIPInfo();
} else {
    getUserInfo();
}


function getBrowserInfo() {

    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    var txt1 = "<span style='color:green;'>Browser Inner</span>: Breite: " + innerWidth + " Höhe: " + innerHeight;
    document.getElementById("infInnerSize").innerHTML = txt1;


    var outerWidth = window.outerWidth;
    var outerHeight = window.outerHeight;
    var txt2 = "<span style='color:green;'>Browser Outer</span>: Breite: " + outerWidth + " Höhe: " + outerHeight;
    document.getElementById("infOuterSize").innerHTML = txt2;

    var txt3 = "<span style='color:green;'>Cookies enabled</span> : " + navigator.cookieEnabled;
    document.getElementById("infCookiesEnabled").innerHTML = txt3;
    var txt4 = "<span style='color:green;'>Browser engine</span> : " + navigator.product;
    document.getElementById("infBrowserEngine").innerHTML = txt4;
    var txt5 = "<span style='color:green;'>Browser language</span> : " + navigator.language;
    document.getElementById("infBrowserLang").innerHTML = txt5;
    var txt6 = "<span style='color:green;'>Screen Color Depth</span> : " + screen.colorDepth;
    document.getElementById("infColorDepth").innerHTML = txt6;
    var txt7 = "<span style='color:green;'>Screen Pixel Depth</span> : " + screen.pixelDepth;
    document.getElementById("infPixelDepth").innerHTML = txt7;

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

// In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
// In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
// In Chrome, the true version is after "Chrome"
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
// In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
// In Firefox, the true version is after "Firefox"
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
// In most other browsers, "name/version" is at the end of userAgent
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
// trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }



    var txt9 = "<span style='color:green;'>Browser name</span> : " + browserName;
    document.getElementById("infBrowserName").innerHTML = txt9;

    var txt10 = "<span style='color:green;'>Full Version</span> : " + fullVersion;
    document.getElementById("infFullVersion").innerHTML = txt10;

    var txt11 = "<span style='color:green;'>Major Version</span> : " + majorVersion;
    document.getElementById("infMajorVersion").innerHTML = txt11;

    var txt12 = "<span style='color:green;'>App Name</span> : " +  navigator.appName;
    document.getElementById("infAppName").innerHTML = txt12;

    var txt13 = "<span style='color:green;'>User Agent</span> : " + navigator.userAgent;
    document.getElementById("infUserAgent").innerHTML = txt13;


    document.getElementById("browserLoadImg2").style.display = "none";
  //  main = txt1 + txt2 + txt3 + txt4 + txt5 + txt6 + txt7 + txt9 + txt10 + txt11 + txt12 + txt13;
    var outerWidthCookie = getCookie("width");
    var outerHeightCookie = getCookie("height");
    var ipCookie = getCookie("ip");
if (!outerHeightCookie == "") {
    document.getElementById("infCookieSize").innerHTML = "<span style='color:green;'>Browser Größe</span>: Breite: " + outerWidthCookie + " Höhe: " + outerHeightCookie;
    document.getElementById("infCookieIP").innerHTML = "<span style='color:green;'>Deine letzte IP</span>: " + ipCookie;
}

    getUserInfo();

    document.getElementById("browserLoadImg1").style.display = "none";

}

function getUserInfo(){

    var outerWidthCookie = getCookie("width");
    var outerHeightCookie = getCookie("height");
    var ipCookie = getCookie("ip");

    var timesVisitedCookie = getCookie("timesVisited");
    var lastVisitedCookie = getCookie("lastVisited");

    var username = getCookie("username");

    var prefColor = getCookie("prefColor");

    if (username == "") {
        username = prompt("Benutzernamen eingeben:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
            setCookie("width", outerWidth, 365);
            setCookie("height",outerHeight, 365);
            setCookie("ip", ip, 365);

            setCookie("timesVisited", 1, 365);
            setCookie("lastVisited", d.toLocaleDateString(), 365);
        } else {
            alert("Fehler beim Nutzernamen. Kein cookie gespeichert.");
        }


        document.getElementById("infCookieSize").innerHTML =  "Kein Cookie gefunden";


    } else {
        var visited = parseInt(timesVisitedCookie) + 1;

        document.getElementById("usrName").innerHTML = '<span class="glyphicon glyphicon-user"></span>' + username;

        document.getElementById("infUsrIP").innerHTML = "<span style='color:green;'>Deine IP</span>: " + ip;
        document.getElementById("infUsrTimesVisited").innerHTML = "<span style='color:green;'>Anzahl Besuche:</span> " + visited;

        document.getElementById("infUsrLastVisited").innerHTML = "<span style='color:green;'>Letzter Besuch:</span> " + lastVisitedCookie;

        if (prefColor==""){
            document.getElementById("infUsrPrefColor").innerHTML = "<span style='color:green;'>Präferenzierte Farbe:</span> " + "Nicht gesetzt.";
        }else{
            document.getElementById("infUsrPrefColor").innerHTML = "<span style='color:green;'>Präferenzierte Farbe:</span> " + prefColor;
        }

        setCookie("width", outerWidthCookie, 365);
        setCookie("height",outerHeightCookie, 365);
        setCookie("ip", ipCookie, 365);

        setCookie("lastVisited", d.toLocaleDateString(), 365);
        setCookie("timesVisited",visited,365);
    }


}

function getIPInfo(){


    $.get("http://ipinfo.io", function(response) {
        var txt14 = "<span style='color:green;'>Deine IP</span> : " + response.ip;
        document.getElementById("infIP").innerHTML = txt14;

        ip = response.ip;

        var txt15 = "<span style='color:green;'>Hostname</span> : " + response.hostname;
        document.getElementById("infHostname").innerHTML = txt15;

        var txt16 = "<span style='color:green;'>Stadt</span> : " + response.city;
        document.getElementById("infCity").innerHTML = txt16;

        var txt17 = "<span style='color:green;'>Region</span> : " + response.region;
        document.getElementById("infRegion").innerHTML = txt17;

        var txt18 = "<span style='color:green;'>Land</span> : " + response.country;
        document.getElementById("infCountry").innerHTML = txt18;

        var txt19 = "<span style='color:green;'>Latitude/Longitude</span> : " + response.loc;
        document.getElementById("infLocation").innerHTML = txt19;

        var txt20 = "<span style='color:green;'>Netzwerk</span> : " + response.org;
        document.getElementById("infNetzwerk").innerHTML = txt20;

        document.getElementById("infKarte").src = "https://maps.googleapis.com/maps/api/staticmap?center="+response.loc+"&zoom=9&size=640x200&sensor=false";
     }, "jsonp")
        .done(function() {
            getBrowserInfo();
        })
        .fail(function() {
            alert( "Error beim holen der IP vom Drittanbieter!" );
        });


    document.getElementById("browserLoadImg3").style.display = "none";
}


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split('; ');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.getElementById("logoutBtn").addEventListener("click", function(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        var spcook =  cookies[i].split("=");
        document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";
    }
    location.reload();
    alert("Logged out!")
});