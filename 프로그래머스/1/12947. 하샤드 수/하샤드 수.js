function solution(x) {
    let Str = String(x);
    let arr = [...Str];
    arr = arr.map(x => x*1);
    // console.log(arr);
    let answer = 0;
    arr.forEach(x => answer += x);
    // console.log(answer);
    if(x%answer === 0) {
        return true;
    }else {
        return false;
    }
}