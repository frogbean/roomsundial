const { hexNow, hexUse } = require("SunPosRGB");
const { rgblights } = require("lights");

hexUse(require("./colors.json"));

setInterval(()=>{
    rgblights(hexNow());
}, 100);