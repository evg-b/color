export default function (rgba: string) {
    let sep = rgba.includes(",") ? "," : " "
    let rgbArr = rgba.substr(5).split(")")[0].split(sep)

    if (rgbArr.reduce((num, nextNum) => num + nextNum).includes('%')) {
        for (let R in rgbArr) {
            let r = rgbArr[R]
            let p = +r.substr(0, r.length - 1) / 100;
            rgbArr[R] = +R < 3 ? String(Math.round(p * 255)) : String(p)
        }
    }
    return rgbArr.map(n => +n)
}