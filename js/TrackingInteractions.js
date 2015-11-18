
var r = 1;
var g = 1;
var b = 1;
if (getCookie("r") === ""){
    setCookie("r",1,365);
    setCookie("g",1,365);
    setCookie("b",1,365);
    r = getCookie("r");
    g = getCookie("g");
    b = getCookie("b");
} else {
     r = getCookie("r");
     g = getCookie("g");
     b = getCookie("b");

}
r = parseInt(r);
g = parseInt(g);
b = parseInt(b);

init();
function init(){

  var colorboxes =  document.getElementsByClassName("mycolorbox");
    var rndBoxCount = 3;
    [].forEach.call(colorboxes,function(entry) {

        var sr = Math.round((Math.random() * (255 - 1) + 1));
        var sg = Math.round((Math.random() * (255 - 1) + 1));
        var sb = Math.round((Math.random() * (255 - 1) + 1));
        if (Math.round((Math.random() * (5 - 1) + 1)) == 2 && rndBoxCount >= 0) {
            rndBoxCount-=1;
        } else {
            sr *= r;
            sg *= g;
            sb *= b;
            sr = Math.max(0, Math.min(255, sr));
            sg = Math.max(0, Math.min(255, sg));
            sb = Math.max(0, Math.min(255, sb));
    }

        entry.style.backgroundColor = "rgba("+sr+","+sg+","+sb+",0.8)";
    });

}



$(document).click(function(event) {
    var clickedObj = $(event.target);

    if (clickedObj[0].className.indexOf("likebox") > -1) {

        clickedObj[0].style.color = "red";

        var rgb = clickedObj[0].parentNode.style.backgroundColor.match(/\d+/g);
        rgb = [parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2])];

        if (rgb[0] >= rgb[1] && rgb[0] >= rgb[2]) {
            if (r < 10) {r+=1;}
            if (g > 1) {g-=1;}
            if (b > 1) {b-=1;}
        } else if (rgb[1] >= rgb[0] && rgb[1] >= rgb[2]) {
            if (g < 10) {g=g+1;}
            if (r > 1) {r=r-1;}
            if (b > 1) {b=b-1;}
        } else if (rgb[2] >= rgb[1] && rgb[2] >= rgb[0]) {
            if (b < 10) {b+=1;}
            if (r > 1) {r-=1;}
            if (g > 1) {g-=1;}
        }
        setCookie("r",r,365);
        setCookie("g",g,365);
        setCookie("b",b,365);

        if(r>b&&r>g){setCookie("prefColor","Rot",365);}else if(g>r&&g>b){setCookie("prefColor","Gruen",365);}else if(b>r&&b>g){setCookie("prefColor","Blau",365);}
    }
});

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