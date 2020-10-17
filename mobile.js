// This function detects mobile devices and scales appropriately
// Mobile detection: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
// Device orientation: http://www.williammalone.com/articles/html5-javascript-ios-orientation
// JS variables to CSS: https://css-tricks.com/updating-a-css-variable-with-javascript
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
}
// Run the function before page starts loading!
mobileScale();