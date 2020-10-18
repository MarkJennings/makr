// This function detects mobile devices and scales appropriately
// Mobile detection: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
// Device orientation: https://davidwalsh.name/orientation-change
// JS variables to CSS: https://css-tricks.com/updating-a-css-variable-with-javascript
/*
function mobileScale() {
    // True if mobile browser or device detected
    var mobile = (/Mobi|Android/i.test(navigator.userAgent));
    let root = document.documentElement;
    // Mobile portrait orientation
    if (mobile && Math.abs(window.orientation) !== 90) {
        root.style.setProperty('--titleSize', 150 + "%");
        root.style.setProperty('--textSize', 100 + "%");
        root.style.setProperty('--pWidth', 50 + "%");
        root.style.setProperty('--bHeight', 7.5 + "vh");
    }
    // Normal style settings
    else {
        root.style.setProperty('--titleSize', 170 + "%");
        root.style.setProperty('--textSize', 105 + "%");
        root.style.setProperty('--pWidth', 33.33 + "%");
        root.style.setProperty('--bHeight', 15 + "vh");
    }
    window.alert(window.orientation);
}
// Run the function before page starts loading!
mobileScale();
*/

// True if mobile browser or device detected
var mobile = (/Mobi|Android/i.test(navigator.userAgent));
let root = document.documentElement;

function makePortrait() {
    root.style.setProperty('--titleSize', 150 + "%");
    root.style.setProperty('--textSize', 100 + "%");
    root.style.setProperty('--pWidth', 50 + "%");
    root.style.setProperty('--bHeight', 7.5 + "vh");
}
function makeLandscape() {
    root.style.setProperty('--titleSize', 170 + "%");
    root.style.setProperty('--textSize', 105 + "%");
    root.style.setProperty('--pWidth', 33.33 + "%");
    root.style.setProperty('--bHeight', 15 + "vh");
}

if (mobile) {
    // Initialize media query list monitoring orientation
    var mql = window.matchMedia("(orientation: portrait)");

    // If there are matches, we're in portrait
    if(mql.matches) {  
        // Portrait orientation
        makePortrait();
    } else {  
        // Landscape orientation
        makeLandscape();
    }

    // Add a media query change listener
    mql.addListener(function(m) {
        if(m.matches) {
            // Changed to portrait
            makePortrait();
        }
        else {
            // Changed to landscape
            makeLandscape();
        }
    });
}