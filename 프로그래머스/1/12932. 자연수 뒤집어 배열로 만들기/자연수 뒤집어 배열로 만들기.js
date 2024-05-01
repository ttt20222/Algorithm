function solution(n) {
    let answer = [];
    let str = String(n);
    let arr = Array(...str);
    
    for(i = arr.length-1 ; i>= 0; i--){
        answer.push(Number(arr[i]));
    }
    
    return answer;

}