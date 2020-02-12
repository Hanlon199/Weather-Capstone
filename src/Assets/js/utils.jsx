export function celsiusToFar(value) {
    var f = (value * (1.8)) + 32;
    return Math.round(f);
}

export function farToCelsius(value) {
    var c = (value - 32.0) * (5.0 / 9.0);
    return Math.round(c);
}

export function msToMph(value) {
    var mph = value / 0.44704;
    return Math.round(mph);
}

export function kpaToInches(value) {
    var inches = value * 0.2953;
    return Number(inches).toFixed(2);
}

export function mmToInches(value) {
    var inches = value * 0.039370;
    return Number(inches).toFixed(2);
}

export function mmToInchesNumber(value) {
    var inches = value * 0.039370;
    return inches;
}

export function wpmToWpft(value) {
    var watts = value * 0.092903040144221;
    return Math.round(watts);
}

export function kgM2ToLM2(value){
    var lm2 = value/1000;
    return Math.round(lm2);
}

export function lM2TokgM2(value){
    var kgM2 = value*1000;
    return Math.round(kgM2);
}

export function kPaToInHG(value){
    var inHG = value *0.29529983071445;
    return Math.round(inHG);
}

export function inHgToKpa(value){
    var kpa = value / 0.29529983071445;
    return Math.round(kpa);
}

export function ConvertData(value, conversionType, unitType){
    if (conversionType !== undefined) {
        switch (conversionType) {
            case 'temperature':
                if (unitType === 'metric') {
                    return value;
                }else{
                    return celsiusToFar(value);
                }
            case 'container':
                if (unitType === 'metric') {
                    // return lM2TokgM2(value);
                    return value;
                }else{
                    return kgM2ToLM2(value);
                }
            case 'pressure':
                if (unitType === 'metric') {
                    // return inHgToKpa(value);
                    return value;
                }else{
                    return kPaToInHG(value);
                }
            case 'length':
                if (unitType === 'metric') {
                    return value;
                }else{
                    return mmToInches(value);
                }
            case 'watts':
                if (unitType === 'metric') {
                    return value;
                }else{
                    return wpmToWpft(value);
                }
            case 'speed':
                if (unitType === 'metric') {
                    return value;
                }else{
                    return msToMph(value);
                }
            default:
                break;
        } 
    }else{
        return value;
    }
}