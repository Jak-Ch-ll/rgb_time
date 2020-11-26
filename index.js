var timeunit;
(function (timeunit) {
    timeunit[timeunit["hour"] = 3600000] = "hour";
    timeunit[timeunit["min"] = 60000] = "min";
    timeunit[timeunit["sec"] = 1000] = "sec";
})(timeunit || (timeunit = {}));
var rgbTime = /** @class */ (function () {
    function rgbTime() {
    }
    rgbTime.prototype.timeToColor = function (timeNumber) {
        return Math.floor(Date.now() / timeNumber) % 256;
    };
    Object.defineProperty(rgbTime.prototype, "red", {
        get: function () {
            return this.timeToColor(timeunit.hour);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(rgbTime.prototype, "green", {
        get: function () {
            return this.timeToColor(timeunit.min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(rgbTime.prototype, "blue", {
        get: function () {
            return this.timeToColor(timeunit.sec);
        },
        enumerable: false,
        configurable: true
    });
    return rgbTime;
}());
var rgbTest = new rgbTime();
var body = document.querySelector("body");
body === null || body === void 0 ? void 0 : body.getAttribute("background");
setInterval(function () {
    if (body) {
        body.style.backgroundColor = "rgb(" + rgbTest.red + ", " + rgbTest.green + ", " + rgbTest.blue + ")";
    }
}, 500);
