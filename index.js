const { hexNow, hexUse, pClock } = require("SunPosRGB");
const { rgblights } = require("lights");
hexUse(require("./colors.json"));

//globalThis.debug = true;
//globalThis.plcktest = 0.01

setInterval(()=>{
    //console.log(pClock(), hexNow());
    rgblights(hexNow());
}, 100);

