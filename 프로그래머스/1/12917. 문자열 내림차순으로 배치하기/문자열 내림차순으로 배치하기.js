function solution(s) {
    let arr = s.split("").sort().reverse().join("");
    return arr;
}