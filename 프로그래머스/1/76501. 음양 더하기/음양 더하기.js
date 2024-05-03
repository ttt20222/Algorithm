function solution(absolutes, signs) {
    let answer = 0;
    
    for(let i=0; i<signs.length; i++){
        if(signs[i] === true){
            absolutes[i] = absolutes[i];
        }else {
            absolutes[i] = -absolutes[i];
        }
    }
    
    absolutes.forEach(x => answer+=x);
    return answer;
}