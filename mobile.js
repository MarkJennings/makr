// This function detects mobile devices and scales appropriately
// Mobile detection: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
// Device orientation: https://davidwalsh.name/orientation-change
// JS variables to CSS: https://css-tricks.com/updating-a-css-variable-with-javascript

// Access handle to html elements
let root = document.documentElement;

function makePortrait() {
    root.style.setProperty('--titleSize', 150 + "%");
    root.style.setProperty('--pWidth', 50 + "%");
    root.style.setProperty('--bHeight', 7.5 + "vh");
    root.style.setProperty('--picWidth', 65 + "%");
}
function makeLandscape() {
    root.style.setProperty('--titleSize', 170 + "%");
    root.style.setProperty('--pWidth', 33 + "%");
    root.style.setProperty('--bHeight', 10 + "vh");
    root.style.setProperty('--picWidth', 50 + "%");
}
function makeMobile() {
    root.style.setProperty('--textSize', 18 + "px");
    root.style.setProperty('--picRadius', 25 + "px");
    root.style.setProperty('--navHeight', 25 + "px");
}
function makeDesktop() {
    root.style.setProperty('--textSize', 1.8 + "vmin");
    root.style.setProperty('--picRadius', 2 + "vmin");
    root.style.setProperty('--navHeight', 3 + "vmin");
}

// True if mobile browser or device detected
if (/Mobi|Android/i.test(navigator.userAgent))
{
    makeMobile();
    // Initialize media query list monitoring orientation
    var mql = window.matchMedia("(orientation: portrait)");
    // If it matches, we're in portrait
    if(mql.matches)
        makePortrait();
    else
        makeLandscape();
    // Add a media query change listene
    mql.addListener(function(m){
        if(m.matches)
            makePortrait();
        else
            makeLandscape();
    });
}
// Not mobile
else {
    makeDesktop();
    // Default to landscape
    makeLandscape();

}
