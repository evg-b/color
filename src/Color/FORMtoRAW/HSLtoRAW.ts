export default function (hsl: string) {
    let sep = hsl.includes(",") ? "," : " "
    let hslArr = hsl.substr(4).split(")")[0].split(sep)

    let h = hslArr[0]
    let s = +hslArr[1].substr(0, hslArr[1].length - 1) / 100
    let l = +hslArr[2].substr(0, hslArr[2].length - 1) / 100

    let hInt: number = 0
    if (h.includes("deg")) {
        hInt = +h.substr(0, h.length - 3)
    } else if (h.includes("rad")) {
        hInt = Math.round(+h.substr(0, h.length - 3) / (2 * Math.PI) * 360)
    } else if (h.includes("turn")) {
        hInt = Math.round(+h.substr(0, h.length - 4) * 360)
    }

    if (hInt >= 360) {
        hInt %= 360
    }

    let c = (1 - Math.abs(2 * l - 1)) * s
    let x = c * (1 - Math.abs((hInt / 60) % 2 - 1))
    let m = l - c / 2
    let r = 0
    let g = 0
    let b = 0

    if (0 <= hInt && hInt < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= hInt && hInt < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= hInt && hInt < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= hInt && hInt < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= hInt && hInt < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= hInt && hInt < 360) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return [r, g, b, 1]
}