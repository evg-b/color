export default function (rgb: string) {
    let sep = rgb.includes(",") ? "," : " "
    let rgbArr = rgb.substr(4).split(")")[0].split(sep)

    if (rgbArr.reduce((num, nextNum) => num + nextNum).includes('%')) {
        for (let R in rgbArr) {
            let r = rgbArr[R]
            rgbArr[R] = String(Math.round(+r.substr(0, r.length - 1) / 100 * 255))
        }
    }
    return [...rgbArr.map(n => +n), 1]
}