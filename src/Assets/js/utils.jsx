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