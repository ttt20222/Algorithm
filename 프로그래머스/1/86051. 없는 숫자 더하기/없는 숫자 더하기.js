function solution(numbers) {
    let answer = 0;
    
    for(i=0; i<10; i++){
        if(numbers.find(x => x === i)){
            continue;
        }else{
            answer += i;
        }
    }
    return answer;
}