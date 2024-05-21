function solution(k, score) {
    let answer = [];
    let tmp = [];
    
    score.forEach((x) => {
        tmp.push(x);
        tmp.sort((a,b) => b-a).splice(k);
        answer.push(Math.min.apply(null, tmp));
    })
    return answer;
}
