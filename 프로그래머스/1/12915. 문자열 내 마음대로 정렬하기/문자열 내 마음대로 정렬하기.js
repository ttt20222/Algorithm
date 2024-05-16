function solution(strings, n) {
    let answer = [];
    let tmp = [];
    
    for(let i=0; i<strings.length; i++){
        tmp.push([strings[i][n],strings[i]]);
    }
    tmp = tmp.sort();
    
    tmp.map((x) => {
        answer.push(x[1]);
    })
    
    return answer;
}