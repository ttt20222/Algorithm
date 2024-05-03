function solution(arr, divisor) {
    let answer = [];
    
    arr.forEach( (x) => {
        if(x % divisor === 0){answer.push(x);}
    })
    answer.sort((a,b) => a-b);
    
    if(answer.length === 0){
        return [-1];
    }
    
    return answer;
}